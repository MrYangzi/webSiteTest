<template>
  <div class="main-content">
    <swipe></swipe>
    <h5 class="title">热门商品</h5>
    <ShopList/>  
    <h5 class="title">精品推荐</h5>
    <ShopList/>  
    <h5 class="title">新品上线</h5>
    <ShopList/>  
  </div>
</template>

<script>
import Swipe from './components/swipe.vue'
import ShopList from '@/components/ShopList.vue'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your vTaobao'
    }
  },
  components:{
    Swipe,
    ShopList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    h5.title{
        font-size:16px;
        margin:10px 0;
    }
</style>
