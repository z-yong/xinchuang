<template>
    <div class="wrapper app-win">
         <div class="top" id='win'>
            <div class="back"><img v-on:click="back" src="../assets/images/back.png" alt=""></div>
            <div class="titles"><img src="../assets/images/hexin_1.png"></div>
            <div class="share">
               <el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo">
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
  
</el-row>
                </div>
       </div>
        <!-- <div class="bg">
        </div> -->
        <div class="case">
            <!-- <div class="case-title">
                <p class="title-left">案例类型</p>
            
            </div> -->
            <!-- <div class="case-menu">
                <ul>
                    <li v-for="(item,index) in menuList" :key="index" @mouseenter="getGoodsList(index,item.cid)" :class="currentIndex == index ? 'menu-active' : ''">
                        {{item.cname}}
                    </li>
                </ul>
            </div> -->
        </div>
        <!-- :goodsList='goodslist' -->
        <z-goods :goodsList='goodslist2' :show='show' ref="goods"></z-goods>
        <div class="pages">
            <div class="start" @click="goStart">首页</div>
            <el-pagination
                background
                prev-text='上一页'
                next-text='下一页'
                :current-page='currentPageNum'
                @current-change='currentPage'
                layout="prev, pager, next"
                :total="allPages">
            </el-pagination>
            <div class="end" @click="goEnd">末页</div>
        </div>
        <div class="youshiBox">
            <div class="youshi-content">
                <z-advantage/>
            </div>
        </div>
        <!-- :goodsList='goodslist2'  -->
         <!-- <z-goods :goodsList='goodslist2' :show='!show'></z-goods> -->
          <div class="foot-nav" >
              <span><a href='#win'><img src="../assets/images/top.png"></a></span>
              <span><a href='#win'> 返回顶部</a></span>
         </div>
    </div>
</template>
<style>
/*头部*/
.app-win .top{height: 50px;width: 100%;}
.app-win .top .back{
    height: 35px;float: left;width: 10%;
    padding-top: 10px;
    margin-left: 5%;
     border-right: 1px solid #CECECE;}
.app-win .top .back img{width: 40%;height: 80%;}
.app-win .top .titles{width:67%;float: left;text-align: center;padding-top: 5px}
.app-win .top .titles img{width: 30%;}
.app-win .top .share{
    float:left;
     height: 45px!important;
    right: 0px;
    width: 17.4%!important;
    border-left: 1px solid #CECECE;
    padding:0px;
    }
.app-win .top .share img{width: 100%!important; height: 40%!important;margin-bottom: 10px;}
.app-win .el-collapse-item__wrap{z-index: 10;position:absolute;}
.app-win .el-col-12{width: 100%!important;height:100%}
.app-win .el-row{z-index: 10;height: 100%}
.app-win .el-submenu__title i{display: none!important;}
.app-win .el-submenu__title{height: 3rem!important;}
.app-win .el-submenu {font-size: 0.5rem;}
.app-win .el-menu{height: 100%;}

/* 底部 */
.app-win .foot-nav{
    height: 7vh;
      background: #f3f3f3;padding: 10px 0px;
}
.app-win .foot-nav span{
    display: block!important;
    width: 100%;
    text-align: center;
    z-index: 999;
}
.app-win .foot-nav span img{display:block!important;padding-left:47%;}


    .app-win .btns{padding: 7px 0px;text-align: center}
   
    .app-win .case{
        width: 100%;
        margin: auto;
        padding: -1px 0 10px;
    }
    

.app-win .el-pagination.is-background .btn-next,.app-win  .el-pagination.is-background .btn-prev,.app-win  .el-pagination.is-background .el-pager li{
    margin:0 4px!important;
    }
    .app-win .case-menu{
        width: 100%;
        height: 5vh;
        margin: 15px 0 10px;
        border: 2px solid #ccc;
        box-sizing: border-box;
    }
    .app-win .case-menu ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around
    }
    .app-win .case-menu ul li{
        height: 100%;
        width: 11%;
        text-align: center;
        font-size: 14px;
        line-height: 5vh;
        user-select: none;
    }
   
    .wrapper.app-win  .case-menu .menu-active{
        background: #ef8c26;
    }
    .wrapper.app-win  .pages{
        position: relative;
        width: 100%;
        margin: auto;
        margin-top: 20px;
        text-align: center
    }
    .app-win .el-pagination{
        display: inline-block;
        width: 76%;
    }
    .app-win .pages .start,
    .app-win .pages .end{
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
        font-size: 0.7rem;
        color: #666;
        padding: 5px 5px;
        background: #f4f4f5;
        cursor: pointer;
        user-select: none;
    }
    .app-win .pages .start{
        left: 10px;
    }
    .app-win .pages .end{
        right: 10px
    }
    .app-win .el-pagination.is-background .btn-prev{
     min-width: 2%!important;
    }
    .app-win .el-pagination .btn-prev, .el-pagination .btn-next{padding:0 4%;}
    .app-win .el-pagination span:not{font-size: 0.7rem!important;}
    .app-win .el-pager li{
            padding: 0 3px!important;
            min-width: 8%!important;
    }
    .wrapper.app-win  .youshiBox{
        border-bottom: 1px solid #ddd;
        /* padding: 5vh 0; */
    }
    .wrapper.app-win  .youshi-content{
        width: 99%;
        margin: 25px auto 0;
    }

    .wrapper.app-win  .el-col{
        text-align: center
    }
    .wrapper.app-win  .grid-content{
        width: 100%;
        display: inline-block;
        margin: 10px 0;
        padding-top:1rem;
        text-align: left;
    }
    .wrapper.app-win  .grid-content.bg-purple .img,
    .wrapper.app-win  .grid-content.bg-purple .you-title{
        text-align: center
    }
    .grid-content .you-title{
        font-size: 18px;
        font-weight: 600;
        margin: 10px 0 20px;
    }
    .wrapper.app-win  .grid-content span{
        font-size: 13px;
        color: #676767;
        text-align: right;
    }


</style>

<script>
import goods from './goods'
import advantage from './advantage'

export default {
    components: {
        "z-goods": goods,
        "z-advantage": advantage
    },
    data(){
        return {
            goodslist: [],
            goodslist2: [],
            show: false,
            currentIndex: 0,
            currentPageNum: 1,
            allPages: 0
        }
    },
    methods: {
       
    back(){
        this.$router.go(-1);//返回上一层
    },

        getGoodsList(index,id){
            console.log(this.$refs)
            this.currentIndex = index;
            if(index == 0){
                this.currentIndex = 1;
            }
            if(id){
                this.axios.get('/jiekou/Article_api/get_article.html?cid='+ id).then(res =>{
                    res.data[1].forEach(ele =>{
                        ele.picture = 'http://' + ele.picture
                    })
                    this.goodslist = res.data[1];
                    this.goodslist.forEach(ele =>{
                        if(ele.content.length >= 15){
                            ele.content = ele.content.slice(0,15) + '...'
                        }
                    })
                    this.$refs.goods.mygoodsList = res.data[1].slice(0,6)
                    this.allPages = Math.ceil(res.data[1].length/6) * 10
                })
            }else{
                 this.axios.get('/jiekou/Article_api/get_article.html').then(res =>{
                    res.data[0].forEach(ele =>{
                        ele.picture = 'http://' + ele.picture
                    })
                    this.goodslist = res.data[0];
                    this.goodslist.forEach(ele =>{
                        if(ele.content.length >= 15){
                            ele.content = ele.content.slice(0,15) + '...'
                        }
                    })
                    this.$refs.goods.mygoodsList = this.goodslist.slice(0,6)
                    this.allPages = Math.ceil(res.data[0].length/6) * 10
                })
            }
        },
        currentPage(e){
            this.$refs.goods.mygoodsList = this.goodslist.slice(e*6-6,e*6)
        },
        goStart(){
            this.currentPageNum = 1;
            this.$refs.goods.mygoodsList = this.goodslist.slice(0,6);
        },
        goEnd(){
            this.currentPageNum = this.allPages/10;
            this.$refs.goods.mygoodsList = this.goodslist.slice(this.goodslist.length - 6)
        }
    },
    computed: {
        menuList(){
            const list = this.$store.getters.menuList;
            const arrMenu = [
                {
                    cname: '全部',
                    cid: 0
                }
            ]
            arrMenu.push(...list)
            return arrMenu
        }
    },
    created(){
         this.axios.get('/jiekou/Article_api/get_article.html').then(res =>{
             this.allPages = Math.ceil(res.data[0].length/6) * 10;
             this.goodslist = res.data[0];
             this.goodslist.forEach(ele =>{
                        if(ele.content.length >= 15){
                            ele.content = ele.content.slice(0,15) + '...'
                        }
                    })
              res.data[0].forEach(ele =>{
                        ele.picture = 'http://' + ele.picture
                    })
             this.goodslist = res.data[0]
         })
    }
}
</script>