<template>
    <div class="wrapper app-details">
        <div class="top" id='details'>
            <div class="back"><img v-on:click="back" src="../assets/images/back.png" alt=""></div>
            <div class="titles"><img src="../assets/images/hexin_1.png"></div>
            <div class="share"><el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
            <img src="../assets/images/navbar.png" alt="">
        </template>
        <el-menu-item-group>
          <ul>
                    <li><router-link tag="div" to="/indexapp" class="btns">首页</router-link></li>
                    <li><router-link tag="div" to="/winapp" class="btns">成功案例</router-link></li>
                    <li><router-link tag="div" to="/coreapp" class="btns">核心优势</router-link></li>
                    <li><router-link tag="div" to="/aboutapp" class="btns">关于我们</router-link></li>
                    <li><router-link tag="div" to="/phoneapp" class="btns">联系我们</router-link></li>

                </ul>

        </el-menu-item-group>
        
      </el-submenu>
    </el-menu>
  </el-col>
  
</el-row></div>
       </div>
        
        <div class="design">
            <div class="all">
                <p>案例类型</p>
            </div>
            <div class="design-title">
            
            </div>
            <div class="title-desc">
                <!-- <p>设计说明： -->
                    <span v-html="detailsMess.content">{{detailsMess.content}}</span>
                <!-- </p> -->
            </div>
            <div class="img-box">
                <ul>
                    <li>
                        <img :src="detailsMess.picture" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="goods-box">
            <z-advantage/>
            <!-- <z-goods :goodsList='goodslist' :show='show' @changeGoods='getChangeGoods($event)'></z-goods> -->
        </div>
         <div class="more_good">
              <router-link tag="div" to="/coreapp" class="btn"><img src="../assets/images/more_good.png"></router-link>
           </div>
           <div class="foot-nav" >
              <span><a href='#details'><img src="../assets/images/top.png"></a></span>
              <span><a href='#details'> 返回顶部</a></span>
         </div>
    </div>
</template>

<style >
/*头部*/
.app-details .top{height: 50px;width: 100%;}
.app-details .top .back{
    height: 35px;float: left;width: 10%;
    padding-top: 10px;
    margin-left: 5%;
     border-right: 1px solid #CECECE;}
.app-details .top .back img{width: 40%;height: 80%;}
.app-details .top .titles{width:67%;float: left;text-align: center;padding-top: 5px}
.app-details .top .titles img{width: 30%;}
.app-details .top .share{
    float:left;
     height: 45px!important;
    right: 0px;
    width: 17.4%!important;
    border-left: 1px solid #CECECE;
    padding:0px;}
.app-details .top .share img{width: 100%!important; height: 40%!important;margin-bottom: 10px;}
.app-details .el-collapse-item__wrap{z-index: 10;position:absolute;}
.app-details .el-col-12{width: 100%!important;height:100%}
.app-details .el-row{z-index: 10;height: 100%}
.app-details .el-submenu__title i{display: none!important;}
.app-details .el-submenu__title{height: 3rem!important;}
.app-details .el-submenu {font-size: 0.5rem;}
.app-details .el-menu{height: 100%;}
/* 底部 */
.app-details .foot-nav{
    height: 7vh;
      background: #f3f3f3;padding: 10px 0px;
}
.app-details .foot-nav span{
    display: block!important;
    width: 100%;
    text-align: center;
    z-index: 999;
}
.app-details .foot-nav span img{display:block!important;padding-left:47%;}


.app-details .btns{padding: 7px 0px;text-align: center}
    /* .wrapper .bg{
        background: url('../assets/details/bg11.png') no-repeat;
        background-position: center;
        background-size: cover;
        height: 28vh;
    } */
    .wrapper.app-details  .all{width: 100%;
    height: 3rem;
    background-color: #EFEEEE;
    text-align: center;
    line-height: 3rem;}
    .wrapper.app-details  .menu-wrapper{
        width: 100%;
        border-bottom: 2px solid #ccc;
    }
    .wrapper.app-details  .menu-box{
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
    }
    .app-details .menu-box .menu-left{
        cursor: pointer;
        user-select: none;
    }
    .app-details .menu-box .menu-left span{
        color: #ef8c26;
        margin-left: 5px;
    }
    .app-details .menu-box .menu-right ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .app-details .menu-box .menu-right ul li{
        padding: 10px;
        cursor: pointer;
        user-select: none;
    }
    .app-details .menu-box .menu-right ul .menu-active{
        background: #ef8c26;
        color: #fff
    }
    .app-details .design{
        width: 100%;
        margin: 0px auto;
    }
    .app-details .design .design-title{
        width: 100%;
        text-align: center
    }
    .app-details .design .design-title .title-text{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .app-details .design .design-title img{
        width: 100%
    }
    .app-details .design .title-desc{
        margin: 20px 0;
    }
    .app-details .design .title-desc p{
        font-size: 15px;
        font-weight: 600;
        line-height: 22px
    }
    .app-details .design .title-desc p span{
        display: inline-block;
        margin-left: 40px;
        text-align: left;
        color: #666;
        font-weight: normal;
        font-size: 14px;

    }
    .app-details .design .img-box{
        margin: 30px 0 20px
    }
    .app-details .design .img-box,
    .app-details .design .img-box ul{
        width: 100%;
    }
    .app-details .design .img-box ul li{
        width: 96%;
        margin: 10px auto
    }
    .app-details .design .img-box ul li img{
        width: 100%;
        height: auto;
    }
    .wrapper.app-details  .goods-box{
        width: 100%;
        border-top: 2px solid #ef8c26
    }
    .app-details .more_good{width:100%;height:2rem;text-align: center;}
    .app-details .more_good .btn{height:1.5rem;}
    .app-details .more_good .btn img{height:100%}
</style>

<script>
// import goods from './goods'
import advantage from './advantage'
export default {
    components: {
        // "z-goods": goods,
        "z-advantage": advantage
    },
    data(){
        return {
            detailsMess: {},
            currentIndex: 0,
            show: true,
            goodslist: []
        }
    },
    methods: {
         back(){
        this.$router.go(-1);//返回上一层
        },
        clickMenu(index){
            this.currentIndex = index
        },
        getChangeGoods(event){
            this._getGoods(event)
        },
        goIndex(){
            this.$router.push('/indexapp')
        },
        _getGoods(id){
            this.axios.get('/jiekou/Article_api/get_article.html?id=' + id).then(res =>{
                        res.data[2].forEach(ele =>{
                            ele.picture = 'http://' +ele.picture
                        })
                        this.detailsMess = res.data[2][0];
                    },err =>{
                        console.log(err)
                    })
        },
    },
    computed: {
        menuList(){
            return this.$store.getters.menuList
        }
    },
    created(){
        const id = this.$route.params.id;
        this._getGoods(id)
    }






    // showHtml: function(str){
    //             return str.replace(str ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    //             .replace(/&lt;/g, "<")
    //             .replace(/&gt;/g, ">")
    //             .replace(/&quot;/g, "\"")
    //             .replace(/&#39;/g, "\'");
}
</script>