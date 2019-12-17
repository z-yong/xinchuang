<template>
    <div class="wrapper app-core">
        <div class="top" id='core'>
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
        <div class="major"></div>
        <div class="hexinBox">
            <div class="hexin1 hexin">
                <!-- <img src="../assets/images/hexin_01.png"> -->
                <!-- <div class="hexin-title">
                    <div class="serial">01</div>
                    <p class="title-desc">专业设计思维</p>
                </div> -->
                <div class="content">
                    <ul class="content-items">
                        <li class="content-item" v-for="(item,index) in hexin1Mess" :key="index">
                            <p class="item-title">{{item.serial}}.<span>{{item.title}}</span></p>
                            <ul>
                                <li v-for="(miniItem,i) in item.mess" :key="i">{{i+1 + '、' + miniItem}}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hexin2 hexin">
                <!-- <div class="hexin-title">
                    <div class="serial">02</div>
                    <p class="title-desc">专业设计思维</p>
                </div> -->
                <div class="content">
                    <ul class="content-items">
                        <li class="content-item" v-for="(item,index) in hexin1Mess" :key="index">
                            <p class="item-title">{{item.serial}}.<span>{{item.title}}</span></p>
                            <ul>
                                <li v-for="(miniItem,i) in item.mess" :key="i">{{i+1 + '、' + miniItem}}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hexin3 hexin">
                <!-- <div class="hexin-title">
                    <div class="serial">03</div>
                    <p class="title-desc">绿色健康装修</p>
                </div> -->
                <div class="content">
                    <ul class="content-items">
                        <li class="content-item" v-for="(item,index) in hexin1Mess" :key="index">
                            <p class="item-title">{{item.serial}}.<span>{{item.title}}</span></p>
                            <ul>
                                <li v-for="(miniItem,i) in item.mess" :key="i">{{i+1 + '、' + miniItem}}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hexin4 hexin">
                <!-- <div class="hexin-title">
                    <div class="serial">04</div>
                    <p class="title-desc">客户眼里的欣创</p>
                </div> -->
                <div class="text">
                     <p>{{hexin4Mess}}</p>
                    <!-- <p>{{hexin4Mess.slice(0,40)}}</p>
                    <p>{{hexin4Mess.slice(40,79)}}</p>
                    <p>{{hexin4Mess.slice(79,117)}}</p>
                    <p>{{hexin4Mess.slice(117,154)}}</p>
                    <p>{{hexin4Mess.slice(154,190)}}</p>
                    <p>{{hexin4Mess.slice(190,225)}}</p>
                    <p>{{hexin4Mess.slice(225,259)}}</p>
                    <p>{{hexin4Mess.slice(259,292)}}</p>
                    <p>{{hexin4Mess.slice(292,324)}}</p>
                    <p>{{hexin4Mess.slice(324,355)}}</p>
                    <p>{{hexin4Mess.slice(355,385)}}</p>
                    <p>{{hexin4Mess.slice(385,414)}}</p>
                    <p>{{hexin4Mess.slice(414,442)}}</p>
                    <p>{{hexin4Mess.slice(442,469)}}</p>
                    <p>{{hexin4Mess.slice(469)}}</p> -->
                </div>
            </div>
            <div class="hexin5 hexin">
                <!-- <div class="hexin-title">
                    <div class="serial">05</div>
                    <p class="title-desc">完善的售后服务</p>
                </div> -->
                <div class="text">
                    <p>{{hexin4Mess}}</p>
                    <!-- <p>{{hexin4Mess.slice(0,40)}}</p>
                    <p>{{hexin4Mess.slice(40,79)}}</p>
                    <p>{{hexin4Mess.slice(79,117)}}</p>
                    <p>{{hexin4Mess.slice(117,154)}}</p>
                    <p>{{hexin4Mess.slice(154,190)}}</p>
                    <p>{{hexin4Mess.slice(190,225)}}</p>
                    <p>{{hexin4Mess.slice(225,259)}}</p>
                    <p>{{hexin4Mess.slice(259,292)}}</p>
                    <p>{{hexin4Mess.slice(292,324)}}</p>
                    <p>{{hexin4Mess.slice(324,355)}}</p>
                    <p>{{hexin4Mess.slice(355,385)}}</p>
                    <p>{{hexin4Mess.slice(385,414)}}</p>
                    <p>{{hexin4Mess.slice(414,442)}}</p>
                    <p>{{hexin4Mess.slice(442,469)}}</p>
                    <p>{{hexin4Mess.slice(469)}}</p> -->
                </div>
            </div>
        </div>
        <div class="goods-box">
            <z-goods :goodsList='goodslist' :show='show'></z-goods>
             <div class="goods-btns" @click="goWin"><img src="../assets/images/more-success.png"></div>
        </div>
         <div class="foot-nav" >
              <span><a href='#core'><img src="../assets/images/top.png"></a></span>
              <span><a href='#core'> 返回顶部</a></span>
         </div>
    </div>
</template>

<style>
   /*头部*/
.app-core .top{height: 50px;width: 100%;}
.app-core .top .back{
    height: 35px;float: left;width: 10%;
    padding-top: 10px;
    margin-left: 5%;
     border-right: 1px solid #CECECE;}
.app-core .top .back img{width: 40%;height: 80%;}
.app-core .top .titles{width:67%;float: left;text-align: center;padding-top: 5px}
.app-core .top .titles img{width: 30%;}
.app-core .top .share{
    float:left;
     height: 45px!important;
    right: 0px;
    width: 17.4%!important;
    border-left: 1px solid #CECECE;
    padding:0px;
    }
 .app-core .top .share img{width: 100%!important; height: 40%!important;margin-bottom: 10px;}
.app-core .el-collapse-item__wrap{z-index: 10;position:absolute;}
.app-core .el-col-12{width: 100%!important;height:100%}
.app-core .el-row{z-index: 10;height: 100%}
.app-core .el-submenu__title i{display: none!important;}
.app-core .el-submenu__title{height: 3rem!important;}
/* .el-submenu__title:hover{background-color: #ffffff!important} */
.app-core .el-submenu {font-size: 0.5rem;}
.app-core .el-menu{height: 100%;}

/* 底部 */
.app-core .foot-nav{
    height: 7vh;
    background: #f3f3f3;padding: 10px 0px;
}
.app-core .foot-nav span{
    display: block!important;
    width: 100%;
    text-align: center;
    z-index: 999;
}
.app-core .foot-nav span img{display:block!important;padding-left:47%;}

.app-core .goods-btns{text-align: center;margin-top: 2vh;}
.app-core .goods-btns img{width: 40%}

.app-core .btns{padding: 7px 0px;text-align: center}
.wrapper.app-core .major{
    background: url('../assets/core/major.png') no-repeat;
    background-position: center;
    background-size: cover;
    height: 22vh;
    width: 100%;
}
.wrapper.app-core .hexinBox{
    width: 100%;
    margin: auto;
}
.wrapper.app-core .hexin1{
    background: url('../assets/images/hexin_01.png') no-repeat;
    background-position: center;
    background-size: cover;
    height: 22rem;
    margin-top: 30px;
    position: relative;
}
.wrapper.app-core .hexin .hexin-title .serial{
    display: inline-block;
    width: 4.2vw;
    height: 11vh;
    background: #ef8c26;
    color: #fff;
    font-weight: 600;
    text-align: center;
    line-height: 11vh;
    font-size: 40px
}
.wrapper.app-core  .hexin .hexin-title .title-desc{
    display: inline-block;
    font-size: 23px;
    font-weight: 600;
    margin-left: 20px;
    line-height: 20px;
    color: #111
}
.wrapper.app-core  .hexin .content{
    width: 100%;
    margin:  30px auto;
    position: absolute
}
.wrapper.app-core  .hexin .content .content-items{
    /* display: flex; */
    justify-content: space-between;
    margin-top: 3rem;
}
.wrapper.app-core  .hexin .content .content-items li{
    width: 50%;
    float: left;
    text-align: center;
}
.wrapper.app-core  .hexin .content .content-items .content-item .item-title{
    font-size: 22px;
    font-weight: 600;
    margin: 10px 0;
}
.wrapper.app-core  .hexin .content .content-items .content-item .item-title span{
    font-size: 16px;
    color: #333;
    font-weight: 600
}
.wrapper.app-core  .hexin .content .content-items .content-item ul li{
    color: #666;
    width: 100%;
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 3px;
}
.wrapper.app-core  .hexin2{
    position: relative;
    background: url('../assets/images/hexin_02.png') no-repeat;
    background-position: center;
    background-size: cover;
    height: 22rem;
}
.wrapper.app-core  .hexin.hexin2 .hexin-title .serial,
.wrapper.app-core  .hexin.hexin4 .hexin-title .serial{
    position: absolute;
    right: 0;
    top: 0;
}
.wrapper.app-core  .hexin.hexin2 .hexin-title .title-desc,
.wrapper.app-core  .hexin.hexin4 .hexin-title .title-desc{
    position: absolute;
    top: 6vh;
    right: 8vw;
}
.wrapper.app-core  .hexin3{
    background: url('../assets/images/hexin_03.png') no-repeat;
    /* background-position: center; */
    background-size: cover;
    height: 30rem;
    box-shadow: 0px 3px 8px #ddd;
    /* margin-top: 25px */
    position: relative;
}
.wrapper.app-core  .hexin.hexin3 .content{
    width: 100%;
    height: 100%;
    /* margin: 20px 40px; */
    position: absolute;
}
.wrapper.app-core  .hexin.hexin3 .content .content-items{
    margin-top: 7vh;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-content: space-around;
    height: 86%;
    position: absolute;
}
.wrapper.app-core  .hexin.hexin3 .content .content-items .content-item:nth-child(3){
    width: 52%;
}
.wrapper.app-core  .hexin.hexin3 .content .content-items .content-item{
    width: 49%;
}
.wrapper.app-core  .hexin.hexin3 .content .content-items .content-item:nth-child(1){
    text-indent: 3vw
}
.wrapper.app-core  .hexin.hexin3 .content .content-items .content-item:nth-child(2){
    text-indent: 2vw
}
.wrapper.app-core  .hexin.hexin3 .content .content-items .content-item:nth-last-child(1){
    text-indent: -2vw;
}
.wrapper.app-core  .hexin4{
    /* margin-top: 5vh; */
    position: relative;
    background: url('../assets/images/hexin_02.png') no-repeat;
    background-position: center;
    background-size: cover;
    height: 27rem;
    /* margin-top: 25px; */
    box-shadow: 0px 3px 8px #ddd
}
.wrapper.app-core  .hexin4 .text{
    float: right;
    margin: 6rem 0.1vw 0 1vw;
    font-size: 0.8rem;
    color: #666;
    padding: 0 2%;
    height: 22rem;
    text-align:justify
}
.wrapper.app-core  .hexin4 .text p{
    height: 3vh;
    line-height: 3vh
}
.wrapper.app-core  .hexin4 .text p:nth-child(2){
    text-indent: 1em
}
.wrapper.app-core  .hexin4 .text p:nth-child(3){
    text-indent: 2em
}
.wrapper.app-core  .hexin4 .text p:nth-child(4){
    text-indent: 3em
}
.wrapper.app-core  .hexin4 .text p:nth-child(5){
    text-indent: 4em
}
.wrapper.app-core  .hexin4 .text p:nth-child(6){
    text-indent: 5em
}
.wrapper.app-core  .hexin4 .text p:nth-child(7){
    text-indent: 6em
}
.wrapper.app-core  .hexin4 .text p:nth-child(8){
    text-indent: 7em
}
.wrapper.app-core  .hexin4 .text p:nth-child(9){
    text-indent: 8em
}
.wrapper.app-core  .hexin4 .text p:nth-child(10){
    text-indent: 9em
}
.wrapper.app-core  .hexin4 .text p:nth-child(11){
    text-indent: 10em
}
.wrapper.app-core  .hexin4 .text p:nth-child(12){
    text-indent: 11em
}
.wrapper.app-core  .hexin4 .text p:nth-child(13){
    text-indent: 12em
}
.wrapper.app-core  .hexin4 .text p:nth-child(14){
    text-indent: 13em
}
.wrapper.app-core  .hexin4 .text p:nth-child(15){
    text-indent: 14em
}
.wrapper.app-core  .hexin4::before,
.wrapper.app-core  .hexin4::after{
    display: block;
    content: ''
}
.wrapper.app-core  .hexin4::after{
    clear: both
}
.wrapper.app-core  .hexin5{
    background: url('../assets/images/hexin_02.png') no-repeat;
    background-position: center;
    /* padding: 80px 0; */
    background-size: cover;
    height: 28rem;
    /* margin: 25px 0 60px; */
    box-shadow: 0px 3px 8px #ddd;
    position: relative; 
}
.wrapper.app-core  .hexin5 .text{
    margin: 6rem 0 0 0.1vw;
    font-size: 0.8rem;
    color: #666;
    padding-bottom: 10px ;
    padding: 0 2%;
    height: 22rem;
    text-align:justify;
    position: absolute
}
.wrapper.app-core  .hexin5 .text p{
    height: 3vh;
    line-height: 3vh;
}
.wrapper.app-core  .goods-box{
    width: 100%;
    border-top: 2px solid #ef8c26;
    padding-top: 45px;
}
</style>
<script>
import goods from './goods'
export default {
    methods:{
    back(){
        this.$router.go(-1);//返回上一层
    },
     goWin(){
            this.$router.push({name: 'winapp'})
        }
},
    components: {
        "z-goods": goods
    },
    data(){
        return {
            goodslist: [],
            show: true,
            hexin1Mess: [
                {
                    title: '战略事态思维',
                    serial: '01',
                    mess: [
                        '项目优势分析', '项目劣势思维' ,'项目机遇分析' ,'项目威胁分析'
                    ]
                },
                {
                    title: '目标定位思维',
                    serial: '02',
                    mess: [
                        '项目优势分析', '项目劣势思维' ,'项目机遇分析' ,'项目威胁分析'
                    ]
                },
                {
                    title: '用户体验思维',
                    serial: '03',
                    mess: [
                        '项目优势分析', '项目劣势思维' ,'项目机遇分析' ,'项目威胁分析'
                    ]
                },
                {
                    title: '商业盈利思维',
                    serial: '04',
                    mess: [
                        '项目优势分析', '项目劣势思维' ,'项目机遇分析' ,'项目威胁分析'
                    ]
                }
            ],
            hexin4Mess: '上海瑾汭建筑装饰工程有限公司上海瑾汭建筑装饰工程有限公司（原隶属华东建筑设计科学研究院）康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学术考察。 自2006年以来，先后与康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学术考察。 自2006年以来，先后与精装行业著名品牌，并进行了商标局注册。康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学术考察。 自2006年以来，先后与（原隶属华东建筑设计科学研究院）康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学术考察。 自2006年以来，先后与康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学术考察。 自2006年以来，先后与精装行业著名品牌，并进行了商标局注册。康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学术考察。 自2006年以来，先后与'
        }
    }
}
</script>