<template>
    <div class="app-wrap">
        <div class="app-main-content">
            <router-view></router-view>
        </div>
        <FooterBar></FooterBar>
    </div>
</template>

<script>
import FooterBar from './components/footerbar'
export default {
    name:'layout',
    data(){
        return{

        }
    },
    components:{
        FooterBar
    }
}
</script>

<style scoped lang="less">

</style>