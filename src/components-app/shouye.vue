<template>
    <div class="wrapper app">
        <div class="top" id='index'>
            <div class="logo">
                <img src="../assets/shouye/logo.png" alt="">
            </div>
                <div class="share">
                    <el-row class="tac">
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
                    </el-row>
                </div>
        </div>
        <el-carousel :interval="5000" arrow="always" height="25vh">
            <el-carousel-item v-for="(item,index) in bgImg" :key="index">
                <!-- <router-link :to="'/details/' + item.id" tag="img" :src="item.picture" alt=""></router-link> -->
                <img :src="item.picture" alt="">
            </el-carousel-item>
        </el-carousel>
        <div class="tubiao-box">
            <ul class="tubiao-list">
                <!--    -->
                <li v-for="(item,index) in tubiaoList" :key="index" @mouseenter="getGoodsList(index,item.cid) "
                    @click="getGoodsList(index,item.cid)" :class="currentIndex == index ? 'menu-active' : ''" >
                    <div class="tubiaos">
                    <img class="tubiao" :src="currentIndex == index ? item.xuan_photo: item.photo">
                    </div>
                    <p class="tubiao-text">{{item.cname}}</p>
                    <!-- <div class="arrows" v-if="currentIndex == index">
                        <img src="../assets/shouye/arrows.png" alt="">
                    </div> -->
                </li>
            </ul>
        </div>
        <div class="goodsbox">
            <!-- <div class="goodsbox-top">
                <span style="font-size: 1.1rem">推荐案例</span>
                <span><img src="../assets/images/r.png"></span>
                <span><img src="../assets/images/jx.png"> </span>
            </div> -->
            <z-goods :goodsList='goodslist' :show='show' ref="goods"></z-goods>
            <div class="goods-btn" @click="goWin"><img src="../assets/images/more.png"></div>
        </div>
        <div class="youshi">
            <div class="youshi-content">
               <div class="good-top">
                <span style="font-size: 1rem">我们的六大优势</span>
                <span><img src="../assets/images/o.png"></span>
                <span><img src="../assets/images/jx.png"> </span>
             </div>
                <z-advantage/>
            </div>
            <div class="more_good">
              <router-link tag="div" to="/coreapp" class="btn"><img src="../assets/images/more_good.png"></router-link>
           </div>
        </div>
        <div class="hezuo">
           <div class="goodsbox-top">
                <span style="font-size: 1rem">合作伙伴</span>
                <span><img src="../assets/images/c.png"></span>
                <span><img src="../assets/images/jx.png"> </span>
            </div>
             <div class="partners-pic"><img src="../assets/images/partners.png"></div>
        </div>
        <div class="about">
            <div class="about-box">
                 <div class="good-top">
                <span style="font-size: 1rem">关于我们</span>
                <span><img src="../assets/images/a.png"></span>
                <span><img src="../assets/images/jx.png"> </span>
            </div>
                <div class="about-content">
                    <div class="content-left">
                        <p class="left-title">{{contentTitle}}</p>
                        <p class="about-mess" v-for="(item,index) in aboutMess" :key="index">
                            {{item}}
                        </p>
                        <router-link tag="div" to="/aboutapp" class="btn"> <img src="../assets/images/more.png"></router-link>
                    </div>
                    <div class="content-right">
                        <img src="../assets/shouye/about-right.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="dongtai">
            <div class="goodsbox-top">
                <span style="font-size: 1rem">企业动态</span>
                <span><img src="../assets/images/dynamic.png"></span>
                <span><img src="../assets/images/jx.png"> </span>
            </div>
            <div class="dontaiMess">
                <div class="dt"><img src="../assets/images/dt.png"></div>
            <div class="news">
                <ul>
                    <router-link tag="li" :to="'/detailsapp/' + messD.id" v-for="(messD,index) in dynamic" :key="index">
                        <div class="mess-time">{{messD.id}}</div>
                        <div class="mess-right">
                            <p class="mess-title">{{messD.title}}</p>
                            <span v-html="messD.content" class="mess-content">{{messD.content}}</span>
                        </div>
                    </router-link>
                </ul>
            </div>
            </div>
            <!-- <div class="more-dt">
                <img src="../assets/images/more-dt.png">
            </div> -->
        </div>
        <div class="foot-nav" >
              <span><a href='#index'><img src="../assets/images/top.png"></a></span>
              <span><a href='#index'> 返回顶部</a></span>
         </div>
    </div>
</template>

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
            tubiaoList: [],
            goodslist: [],
            show: false,
            currentIndex: 0,
            bgImg: [],
            dynamic: [],
            contentTitle: '安徽欣创装饰设计有限公司',
            aboutMess: [
                '欣创团队介绍：“设计不是一种职业，它是一种生活的态度和流行的观念，一种规划生活空...”',
                ' 秉承这样的理念，一支有着多年经验的小资装修团队，跳出纷繁复杂的市场。用一颗单纯的爱生活的心期待着您的光临。'
            ]
        }
    //      return {
    //     activeNames: ['1']
    //   };
    },
    methods: {
        suspend(index){
            this.currentIndex = index
        },
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    //     handleChange(val) {
    //     console.log(val);
    //   },
        getGoodsList(index,id){
            this.currentIndex = index;
            if(id){
                this.axios.get('/jiekou/Article_api/get_article.html?cid='+ id).then(res =>{         
                    res.data[1].forEach(ele =>{
                        ele.picture = 'http://'+ ele.picture;
                        if(ele.content.length >= 15){
                            ele.content = ele.content.slice(0,15) + '...'
                        }
                    });
                    this.$refs.goods.mygoodsList = this.goodslist = res.data[1].slice(0,6);
                },err =>{
                    console.log(err)
                })
            }else{
                 this.axios.get('/jiekou/Article_api/get_article.html').then(res =>{
                     res.data[0].forEach(ele =>{
                        ele.picture = 'http://'+ ele.picture;
                        if(ele.content.length >= 15){
                            ele.content = ele.content.slice(0,15) + '...'
                        }
                    });
                    this.$refs.goods.mygoodsList = this.goodslist = res.data[0].slice(0,6);
                },err =>{
                    console.log(err)
                })
            }
        },
        goWin(){
            this.$router.push({name: 'winapp'})
        } 
    },
    created(){
        this.axios.get('/jiekou/column_api/get_column.html').then(res =>{
            const list = res.data;
            list.forEach(ele =>{
                ele.photo = 'http://' + ele.xuan_photo;
                ele.xuan_photo = 'http://' + ele.xuan_photo
            })
            const arr = [
                {
                    cname: '全部案例',
                    photo: require('../assets/shouye/a.png'),
                    xuan_photo: require('../assets/shouye/a.png')
                }
            ]
            this.tubiaoList = arr.concat(list).slice(0,8)
            this.$store.dispatch('setMenuList',res.data.slice(0,8))
        },err =>{
            console.log(err)
        });
        this.axios.get('/jiekou/slide_api/get_slide.html').then(res =>{
            res.data.forEach(ele =>{
                ele.picture = 'http://'+ ele.picture
            })
            this.bgImg = res.data;
        });
        this.axios.get('/jiekou/Article_api/get_dongtai.html').then(res =>{
            res.data.forEach(ele =>{
                const index = ele.content.indexOf('感')
                ele.content = ele.content.slice(index)
                if(ele.content.length > 35){
                    ele.content = ele.content.slice(0,35) + '....'
                }
            })
            this.dynamic = res.data
        })
    }
}
</script>

<style>

    html,body{overflow:hidden;overflow-y:auto;
    height: 100%;}
.wrapper{width:100%}
*{margin:0;padding:0}
/*头部*/
.app .top{height: 50px;width: 100%;display: flex;}
.app .top .logo{
    height: 25px;
    width: 30%;margin-top: 10px;margin-left: 5%;  margin-right: 47%;}
.app .top .logo img{width: 100%;height: 100%;}
.app .top .share{
    height: 45px!important;
    right: 0px;
    width: 18%!important;
    border-left: 1px solid #CECECE;
    padding:0px!important;
}
.app .top .share img{width: 100%!important; height: 40%!important;margin-bottom: 10px;}
.app .el-collapse-item__wrap{z-index: 10;position:absolute;}
.app .el-col-12{width: 100%!important;height:100%}
.app .el-row{z-index: 10;height: 100%}
.app .el-submenu__title i{display: none!important;}
.app .el-submenu__title{height: 3rem!important;}
/* .el-submenu__title:hover{background-color: #ffffff!important} */
.app .el-submenu {font-size: 0.5rem;}
.app .el-menu{height: 100%;}


/* 底部 */
.app .foot-nav{
    height: 7vh;
    background: #f3f3f3;padding: 10px 0px;
}
.app .foot-nav span{
    display: block!important;
    width: 100%;
    text-align: center;
    z-index: 999;
}
.app .foot-nav span img{display:block!important;padding-left:47%;}

/* 轮播 */
.app .el-carousel__arrow i{display: none!important; border: 1px solid red}
.app .el-carousel__button{width:13px!important;}
.app .el-carousel__arrow:hover{display: none;}
.wrapper.app  .el-carousel__arrow{display: none;}


.wrapper.app  .el-carousel__item img{
    width: 100%;
    height: 25vh;
}
.app .tubiao-box{
    height: 29vh;
    width: 100%;
    /* background: #ef8c26; */
}
.app .tubiao-box .tubiaos{
    border-radius: 50%;
    border: 1px solid #D34B00;
    padding: 5%;
    width: 45px;
    height: 45px;
}
.app .tubiao-box .tubiao-list{
    width: 100%;
    height: 100%;
    margin: auto;
    /* display: flex; */
    justify-content: space-around;
    align-items: center;
    /* padding: 0 30px */
}
.app .tubiao-list li{
    position: relative;
    width: 13%;
    height:35%;
    margin: 3% 6%;
    color: #D34B00;
    text-align: center;
    cursor: pointer;
    user-select: none;
    float: left;
}

.app .tubiao-list li .arrows{
    position: absolute;
    bottom: -14px;
    left: 50%;
    transform: translate(-50%,0%)
}
.app .tubiao-list li .tubiao{
    height: 3vh;
    width: 6vw;
    margin-top: 10px;
}

.app .tubiao-list li.menu-active{
    background: #fff;
    color: #D34B00;
    /* border: 2px solid #be2d00; */
    /* box-sizing: border-box */
}
.app .tubiao-list .tubiao-text{
    font-size: 12px;
    width: 16vw;
    text-align: left;
}
.app .goodsbox{
    width: 96%;
    padding:0 2%;
    background: #fff;
}

.app .goodsbox-top{height: 4rem;text-align: center;background-color: #F2F2F2;}
.app .goodsbox-top span:first-child,.good-top span:first-child{height: 2rem;display: block;line-height:2rem;width: 100%}
.app .goodsbox-top span:nth-child(2),.good-top span:nth-child(2){height: 1rem;display: block;line-height: 1rem;width: 100%}
/* .goodsbox-top span:nth-child(2),.good-top span:nth-child(2) img{height: 60%} */
.app .goodsbox-top span:nth-child(3),.good-top span:nth-child(3){height: 1rem;display: block;line-height: 0.3rem;width: 100%}
.app .goodsbox-top span:nth-child(3) img,.good-top span:nth-child(3) img{height:15%}

.app .good-top{height: 4rem;text-align: center;background-color: #ffffff}

.app .goods-btn{
    background-color: #F2F2F2;
    padding: 10px 15px;
    text-align: center;
    cursor: pointer;
    user-select: none;
}
.app .goods-btn img{width: 28%!important;}
.app .btn{
    /* background-color: #F2F2F2; */
    /* padding: 10px 15px; */
    text-align: center;
    cursor: pointer;
    user-select: none;
}
.app .btns{padding: 7px 0px;text-align: center}


.app .dongtai .dontaiMess ul li{
    display: flex;
    /* margin-bottom: 20px */
}
.app .dongtai .dontaiMess ul li .mess-time{
    font-size: 0.5rem;
    padding-top: 0.7vh;
}
.app .dongtai .dontaiMess ul li .mess-right{
    margin-left: 4%;
}
.app .dongtai .dontaiMess ul li .mess-right .mess-title{
    font-weight: 600;
    font-size: 0.8rem;
    color: #444;
    margin: 3px 0 3px
}
.app .dongtai .dontaiMess ul li .mess-right .mess-content{
    color: #888;
    font-size: 0.8rem
}
.app .more-dt{position: absolute;bottom: 0;width: 100%;text-align: center;height: 2vh;}
.app .more-dt img{width: 40%}
.app .youshi{
    /* background: url('../assets/shouye/youshi.png') no-repeat; */
    width: 100%;
    height: 54rem!important;
    /* padding-bottom: 40px */
}
.app .youshi .youshi-content{
    width: 100%;
    margin: auto
}
.app .youshi .youshi-content .youshi-title{
    font-size: 35px;
    font-weight: 600;
    text-align: center;
    padding-top: 7vh;
    margin-bottom: 40px
}
.app .more_good{height: 4rem;text-align: center;line-height: 4rem}
.app .more_good img{width: 43%;}
.app .partners-pic{background:#F2F2F2;height: 17rem;}
.app .partners-pic img{width: 100%}
.app .hezuo{
    /* background: url('../assets/shouye/hezuo.png') no-repeat; */
    /* padding: 0 0 10vh; */
    width:96%;
    padding:0 2%;
    text-align: center;
    height: 20rem!important;
}
.app .hezuo .hezuo-title{
    padding-top: 7vh;
    text-align: center;
}
.app .hezuo .hezuo-title p{
    font-size: 35px;
    font-weight: 600;
}
.app .about{
    /* background: url('../assets/shouye/about.png') no-repeat; */
    height: 20rem;
    margin-top: 2vh;
    width: 96%;
    padding: 0 2%;
}
.app .about .about-box{
    width: 100%;
    height: 43vh;
    margin: auto
}
.app .about .about-title{
    padding-top: 9.5vh;
    text-align: center;
}
.app .about .about-title .title{
    font-size: 35px;
    font-weight: 600
}
.app .about .about-content{
    display: flex;
    justify-content: space-between;
    margin-top: 5vh
}
.app .about-content .content-left{
    width: 53%;
    position: relative;
}
.app .about-content .content-left .left-title{
    color: #666;
    font-size: 0.97rem;
    font-weight: 600;

}
.app .about-content .content-left .about-mess{
    margin: 4px 0;
    color: #888;
    font-size: 0.8rem
}
.app .about-content .content-left .btn{
    position: absolute;
    left:-25px;
     padding:3px 0;
}
.app .about-content .content-left .btn img{width: 60%;height: 100%}
.app .about-content .content-right{
    width: 45%;
    height: 12rem;
}
.app .about-content .content-right img{
    width: 100%;height: 100%;
}

.app .guanyu{
    background-size: contain;
    background-position: 50%;
    height: 80vh;
    margin: 60px 0 120px;
}
.app .dt{float: left;width: 45%;height:15rem;}
.app .dt img{width: 100%;height: 100%}
.app .dongtai{
    position: relative;
    background-size: cover;
    background-position: 50%;
    height: 19rem;
    width: 96%;
    padding: 0 2%;
}
.app .dongtai .dontaiMess{
    position: absolute;
    /* top: 57vh; */
    /* right: 20vw; */
    width: 100%;
    display: flex;
}
.app .dongtai .news{
    width: 52%;
    height:16rem;
}
.app .dongtai .dontaiMess ul{
    position: relative;
    float: right;
    right: 0vw;
    width: 95%;
}


.app .youshi,.hezuo{
    background-position: center;
    background-size: cover;
    height: 80vh;
}

 .app .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.app .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.app .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>