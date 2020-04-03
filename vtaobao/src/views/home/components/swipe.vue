<template>
  <div class="swipe-content">
      <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(banner,index) in banners" :key="index"><router-link :to="banner.url"><img :src="banner.imgSrc" class="banner-img" /></router-link></mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
import banner1 from '@/assets/images/banner_1.jpg'
import banner2 from '@/assets/images/banner_2.jpg'
import banner3 from '@/assets/images/banner_3.jpg'

export default {
  name: 'Swipe',
  data () {
    return {
       banners:[{
         url:'/shopDetail/1',
         imgSrc:banner1
       },{
         url:'/shopDetail/2',
         imgSrc:banner2
       },{
         url:'/shopDetail/3',
         imgSrc:banner3
       }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .swipe-content{
      width:100%;
      height:150px;
      .banner-img{
          width:100%;
          height:100%;
      }
  }
</style>
