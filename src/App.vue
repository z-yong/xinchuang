<template>
  <div id="app">
    <z-header v-if="show"></z-header>
    <router-view></router-view>
    <z-footer v-if="show"></z-footer>
  </div>
</template>

<script>
import header from './components/header';
import footer from './components/footer';

export default {
  components: {
    "z-header": header,
    "z-footer": footer
  },
  data(){
    return {
      show: true
    }
  },
  methods: {
    // 判断移动/pc
    _isMobile() {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag;
    }
  },
  mounted() {
    if (this._isMobile()) {
      this.show = false
      this.$router.push('/indexapp');
    } else {
      this.show = true
      this.$router.push('/index');
    }
  },
  created(){
    this.axios.get('/jiekou/column_api/get_column.html').then(res =>{
            this.$store.dispatch('setMenuList',res.data)
        },err =>{
            console.log(err)
        })
  }
}
</script>

<style>
html,body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0;font-family:Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", STXihei, STHeiti, Heiti, SimSun, sans-serif; font-size:100%;}
html,body{color:#333}
body{background:#fff;overflow-x: hidden;}
ul,ol,li{ list-style:none;}
a:link, a:visited{ color:#333; text-decoration:none;}
img{ border:none;}
em{ font-style:normal;}
h1,h2,h3,h4,h5{ font-weight:normal;}
.clearfloat:after{ content:'.';display:block;overflow:hidden;visibility:hidden;font-size:0;line-height:0;width:0;height:0;}
.clearfloat{zoom:1;}
</style>
