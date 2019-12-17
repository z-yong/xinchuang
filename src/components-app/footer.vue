<template>
    <div class="wrapper">
        <div class="wrapper-foot">
            <div class="foot-nav">
               <span><img id="totop" @click="Top" v-show="totop" src="../assets/images/top.png"></span>
               <!-- <span @click="Top" v-show="totop" >返回顶部</span> -->
               
            </div>
           
        </div>
        
    </div>
</template>

<style scoped>
    .wrapper-foot{
        padding: 10px 0px;
        background: #f3f3f3;
    }
    .foot-nav{
        height: 7vh;
    }
    .foot-nav span{
        display: block!important;
        width: 100%;
        text-align: center;
        z-index: 999;
    }
    .foot-nav span img{display:block!important;padding-left:47%;}
   
</style>

<script src="http://hovertree.com/texiao/mobile/6/topHovertree.js"></script>
<script>

export default {

  mounted(){
     window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
        window.removeEventListener('scroll', this.scrollToTop); 
    },
   
     methods: {
    Top(){
    var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
    document.documentElement.scrollTop = document.body.scrollTop =0; 
    // scroll('0px', 1000);
    },
  
}

}

</script>