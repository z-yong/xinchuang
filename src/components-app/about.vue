<template>
    <div class="wrapper app-about">
         <div class="top" id='about'>
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
        <div class="bg"></div>
        <div class="wrapper-about-our">
            <div class="about-path">
                <div class="side"></div>
                <p class="path-desc">
                    您的位置：<span>首页>联系我们</span>
                </p>
            </div>
            <div class="about">
                <div class="about-title title">
                    <p class="title-name">关于我们</p>
                    <p class="line"></p>
                    <p class="title-desc">安徽欣创办公室装修设计：帮您赚钱的装修公司！</p>
                    <div class="about-bot-content">
                        <div class="content-text">
                            <img src="../assets/about/icon.png" alt="">
                            <p class="about-text" v-for="(item,index) in aboutContent" :key="index">
                                {{item}}
                            </p>
                        </div>
                        <div class="content-img">
                            <img src="../assets/about/aboutright.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="case-box">
            <z-goods :goodsList='goodslist' :show='show'></z-goods>
             <div class="goods-btns" @click="goWin"><img src="../assets/images/more-success.png"></div>
        </div>
        <div class="foot-nav" >
              <span><a href='#about'><img src="../assets/images/top.png"></a></span>
              <span><a href='#about'> 返回顶部</a></span>
         </div>
    </div>
</template>

<style>
    
/*头部*/
.app-about .top{height: 50px;width: 100%;}
.app-about .top .back{
    position: relative;
    z-index: 999;
    height: 35px;float: left;width: 10%;
    padding-top: 10px;
    margin-left: 5%;
     border-right: 1px solid #CECECE;}
.app-about .top .back img{width: 40%;height: 80%;}
.app-about .top .titles{width:67%;float: left;text-align: center;padding-top: 5px}
.app-about .top .titles img{width: 30%;}
.app-about .top .share{
    float:left;
     height: 45px!important;
    right: 0px;
    width: 17.4%!important;
    border-left: 1px solid #CECECE;
    padding:0px;
    }
.app-about .top .share img{width: 100%!important; height: 40%!important;margin-bottom: 10px;}
.app-about .el-collapse-item__wrap{z-index: 10;position:absolute;}
.app-about .el-col-12{width: 100%!important;height:100%}
.app-about .el-row{z-index: 10;height: 100%}
.app-about .el-submenu__title i{display: none!important;}
.app-about .el-submenu__title{height: 3rem!important;}
.app-about .el-submenu {font-size: 0.5rem;}
.app-about .el-menu{height: 100%;}

/* 底部 */
.app-about .foot-nav{
    height: 7vh;
    background: #f3f3f3;padding: 10px 0px;
}
.app-about .foot-nav span{
    display: block!important;
    width: 100%;
    text-align: center;
    z-index: 999;
}
.app-about .foot-nav span img{display:block!important;padding-left:47%;}

.app-about .goods-btns{text-align: center}
.app-about .goods-btns img{width: 40%}

.app-about .btns{padding: 7px 0px;text-align: center}
.wrapper.app-about  .bg{
    background: url('../assets/about/bg11.png') no-repeat;
    background-position: center;
    background-size: cover;
    height: 5rem;
}
.wrapper.app-about  .wrapper-about-our{
    width: 100%;
    height:66rem;
    margin: auto;
}
.app-about .about{
    margin-top: 0!important;
}
.app-about .about .about-title{padding-top: 0!important;}
.app-about .wrapper-about-our .about-path{
    padding: 10px 0;
    height: 3vh;
    display: flex;
    align-items: center;
}
.app-about .wrapper-about-our .about-path .side{
    width: 10px;
    height: 2vh;
    background: #ef8c26;
}
.app-about .wrapper-about-our .about-path .path-desc{
    font-size: 14px;
    margin-left: 7px
}
.wrapper.app-about  .wrapper-about-our .about{
    width: 100%;
    height: 125vh;
    text-align: center;
    padding: 0;
}
.wrapper.app-about  .title .title-name{
    font-size: 1rem;
    font-weight: 600;
}
.wrapper.app-about  .title .line{
    width: 4vw;
    height: 4px;
    background: #ef8c26;
    margin: 10px auto;
}
.wrapper.app-about  .title .title-desc{
    color: #888;
    font-size: 14px
}
.wrapper.app-about  .wrapper-about-our .about-bot-content{
    /* display: flex; */
    justify-content: space-between;
    margin-top: 2vh;
    height: 45rem;
    position: relative;
}
.wrapper.app-about  .wrapper-about-our .about-bot-content .content-text{
    width: 96%;
    text-align: left;
    font-size: 0.8rem;
    color: #888;
    padding:0 2%;
    height: 43rem;
}
.app-about .wrapper-about-our .about-bot-content .content-text .about-text:nth-of-type(1){
    display: inline;
    text-indent: 3em;
    line-height: 24px
}
.app-about .wrapper-about-our .about-bot-content .content-text .about-text{
    margin-top: 3vh;
    line-height: 24px
}
.app-about .wrapper-about-our .content-img img{
    width: 100%;
    height: 100%;
}
.app-about .wrapper-about-our .content-img{
    width: 75%;
    height: 14rem;
    margin: 1.8rem auto;
    position: relative;
}
.case-box{
    width: 100%;
    margin-top: 10px;
    position: relative;

}

    
</style>

<script>
import goods from './goods'
export default {
    components: {
        "z-goods": goods
    },
    data(){
        return {
            developMess: [],
            leftLen: 0,
            goodslist:[],
            show: true,
            timer1: '',
            timer2: '',
            speed: 1,
            honorImg: [],
            leftHonorLen: 0,
            flag: true,
            courseFlag: true,
            honorFlag: true,
            aboutContent: [
                '安徽欣创装饰工程有限公司在2011年成立于安徽合肥，是一家集设计、施工、售后服务于一体的创新型企业。拥有家装和工装两大事业部，家装缔造经典空间，工装彰显不凡气质。公司成立至今，坚定不移的立足诚信，从客户的角度出发，用完美的设计、专业的施工、专业的方案呈现给客户一个实用精美的高质量的装饰效果，赢得广大客户的一致好评，更是在装饰业内创下优良的口碑。',
                '欣创装饰有一支高水准洋溢热情的高端设计团队，设计理念时尚、设计思维鲜活，不拘泥于传统，用不拘一格的设计风格引领装饰风尚。在设计方面，他们追求实用功能和美观度完美兼顾的高端品位设计，坚信设计可以让生活变得更加美好。',
                '欣创装饰以企业展厅和智能化装修为企业核心竞争力，同时也承接大量的精装修样板房、别墅家居、酒店餐饮、办公空间等设计工程。在设计和施工上欣创装饰竭力将绿色装饰与高科技智能化装饰完美结合，统筹环保、健康、时尚发展统一。打造一个有社会责任感的企业。',
                '欣创装饰积极跟进时代发展，纵览全局，抓住时机进行企业转型，运用网络新媒体优势不断开拓进取，与时俱进地把握市场潮流。欣创装饰以其独特的魅力吸引了大量的优秀人才共创装饰盛景，发挥“工匠精神”，通过精湛工艺、精细施工、完善服务和高效的职业精神来更好地为新老客户全心服务。同时以精湛、负责、协同、创新的新理念，打造行业新模式，努力让欣创成为安徽装饰行业的标杆企业。',
                '在今后，欣创装饰将坚持不懈的提高企业经营管理和完善服务水平，扩大品牌影响力，励志将欣创装饰打造成国内一流的装饰公司。'
            ]
        }
    },
    methods: {
        back(){
        this.$router.go(-1);//返回上一层
    },
     goWin(){
            this.$router.push({name: 'winapp'})
        },
        
    
    },
   
}
</script>