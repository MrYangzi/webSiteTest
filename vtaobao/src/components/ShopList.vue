<template>
  <div class="shop-list">
      <ul>
        <li v-for="(item,index) in shops" :key="index" @click="skipToDetail(item.id)">
            <div class="shop-wrap">
                <div class="shop-img">
                    <img :src="item.imgSrc" />
                </div>
                <p class="shop-name">{{item.title}}</p>
                <p class="shop-desc"><span class="price"><em>￥</em>{{item.price}}</span><span class="pay-num">{{item.pay_num}}人付款</span></p>
            </div>
        </li>
      </ul>
  </div>  
</template>

<script>
import {getProductList} from '../api/product'

export default {
  name: 'ShopList',
  data () {
    return {
       shops:[]
    }
  },
  created(){
    getProductList().then(res=>{
      if(res.data){
        this.shops=res.data;
      }
    })
  },
  methods:{
    skipToDetail(id){
      this.$router.push({
        name:'shop-detail',
        params:{
          id
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../assets/styles/common';
  .shop-list{
      width:100%;
      ul{
          width:100%;
          margin:0;
          padding:0;
          li{
              width:50%;
              list-style: none;
              overflow:hidden;
              float:left;
              margin:5px 0 15px;
          }
      }
  }
  .shop-wrap{
      padding:2px;
      p{
          font-size:14px;
          padding:0;
          margin:0;
          text-align: left;
      }
      p.shop-name{
          color:#333;
      }
      p.shop-desc{
          color:#999999;
          span.price{
              font-size:18px;
              color:#de2727;
          }
          span.pay-num{
              float:right;
          }
          em{
              font-style:normal;
          }
      }
  }
  .shop-img{
      width:100%;
      height:172px;
      overflow:hidden
  }
  .shop-img img{
      width:100%;
      height:100%;
  }
</style>
