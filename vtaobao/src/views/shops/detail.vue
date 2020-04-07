<template>
  <div class="detail-content">
      <div class="shop-img">
        <img :src="shop.imgSrc">
      </div>
      <div class="shop-description" v-html="shop.title"></div>
      <div class="footer">
        <div class="button-group">
            <mt-button type="primary" @click="pushCart(shop)">加入购物车<mt-badge type="error">{{this.cartNum}}</mt-badge></mt-button>
        </div>
      </div>
  </div>
</template>

<script>
import {getShopDetail} from '@/api/product'
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'shop-detail',
  data () {
    return {
      shop:{}
    }
  },
  created(){
      let shopId=this.$route.params.id
      getShopDetail({id:shopId}).then(res=>{
        this.shop=res.data;
        console.log(res.data);
      })
  },
  computed:{
    ...mapGetters({
      cartNum:'shopsSum'
    })
  },
  methods:{
    ...mapActions({
      pushCart:'requestJoinCart'
    })
  },
  components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .detail-content{
        font-size:14px;
    }
</style>
