<template>
    <div class="wrapper">
        <div class="bg1"></div>
        <div class="wrapper-about-box">
            <div class="about-title">
                <div class="side"></div>
                <p class="title-desc">
                    您的位置：<span>首页>联系我们</span>
                </p>
            </div>
        </div>
        <div class="company">
            <p class="com-title">安徽欣创装饰工程有限公司</p>
            <ul class="mess-list">
                <!-- <li v-for="(item,index) in comMess" :key="index">
                    <img :src="item.img" alt="">
                    <span class="desc-name">{{item.name}}：</span>
                    <div class="desc-box">
                        <p class="com-mess" v-for="(desc,index) in item.desc" :key="index">
                            {{desc}}
                        </p>
                    </div>
                </li> -->
                <li>
                    <img src="../assets/phone/ph-tubiao1.png" alt="">
                    <span class="desc-name">服务热线：</span>
                    <div class="desc-box">
                        <p class="com-mess">
                            {{companyMess.telephone}}
                        </p>
                    </div>
                </li>
                <li>
                    <img src="../assets/phone/ph-tubiao2.png" alt="">
                    <span class="desc-name">联系电话：</span>
                    <div class="desc-box">
                        <p class="com-mess">
                            {{companyMess.telephone}}
                        </p>
                    </div>
                </li>
                <li>
                    <img src="../assets/phone/ph-tubiao3.png" alt="">
                    <span class="desc-name">欣创网址：</span>
                    <div class="desc-box">
                        <p class="com-mess">
                            {{companyMess.site}}
                        </p>
                    </div>
                </li>
                <li>
                    <img src="../assets/phone/ph-tubiao4.png" alt="">
                    <span class="desc-name">企业qq：</span>
                    <div class="desc-box">
                        <p class="com-mess">
                            {{companyMess.qq}}
                        </p>
                    </div>
                </li>
                <li>
                    <img src="../assets/phone/ph-tubiao5.png" alt="">
                    <span class="desc-name">E-mail：</span>
                    <div class="desc-box">
                        <p class="com-mess">
                            {{companyMess.mail}}
                        </p>
                    </div>
                </li>
                <li>
                    <img src="../assets/phone/ph-tubiao2.png" alt="">
                    <span class="desc-name">公司地址：</span>
                    <div class="desc-box">
                        <p class="com-mess">
                            {{companyMess.address}}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="join">
            <div class="join-box">
                <p class="join-title">加入我们团队，我们期待与您共创美好明天！</p>
                <p class="join-desc">强烈的社会责任感、广阔的发展平台、快速的提升空间<br>稳定的工作岗位、丰厚的薪酬待遇</p>
                <div class="join-menu-box">
                    <div class="box-menu">
                        <ul>
                            <li class="menu-head">岗位名称：</li>
                            <li v-for="(menu,index) in station" :key="index"
                                :class="currentIndex == index ? 'joinActive menu' : 'menu'"
                                @click="clickJoinMenu(index)">
                                {{menu.name}}
                                <span class="cc" v-if="index != (station.length - 1)">|</span>
                            </li>
                        </ul>
                    </div>
                    <div class="show">
                        <p class="show-title">岗位要求：</p>
                        <ul>
                            <!-- <li v-for="(showItem,index) in joinMess[currentIndex].require" :key="index">
                                {{showItem}}
                            </li> -->
                            <li v-if="station.length != 0" v-html="station[currentIndex].content">{{station[currentIndex].content}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <z-goods :goodsList='goodslist' :show='show'></z-goods>
    </div>
</template>

<style scoped>
    .wrapper .bg1{
        background: url('../assets/phone/phonebg.png') no-repeat;
        background-position: center;
        background-size: cover;
        height: 83vh;
    }
    .wrapper .wrapper-about-box{
        width: 60%;
        margin: auto;
    }
    .wrapper-about-box .about-title{
        padding: 10px 0;
        height: 3vh;
        display: flex;
        align-items: center;
    }
    .wrapper-about-box .about-title .side{
        width: 10px;
        height: 2vh;
        background: #ef8c26;
    }
    .wrapper-about-box .about-title .title-desc{
        font-size: 14px;
        margin-left: 7px
    }
    .wrapper .company{
        width: 60%;
        margin: 60px auto 20px
    }
    .company .com-title{
        font-size: 21px;
        font-weight: 600;
        margin: 20px 0;
    }
    .company .mess-list li{
        padding: 5px 0;
        border-bottom: 1px solid #eee;
        font-size: 14px;
    }
    .company .mess-list li img{
        vertical-align: middle;
        width: 32px
    }
    .company .mess-list li .desc-name{
        vertical-align: middle;
        margin-left: 15px
    }
    .company .mess-list li .desc-box{
        display: inline-block;
        vertical-align: middle
    }
    /* .company .mess-list li:nth-last-child(1){
        margin-top: -15px
    }
    .company .mess-list li:nth-last-child(1) .desc-box{
        margin-top: 20px
    }
    .company .mess-list li:nth-last-child(1) .desc-box p:nth-child(2){
        margin-top: 5px
    } */
    .wrapper .join{
        width: 100%;
        height: 70vh;
        background: url('../assets/phone/ph-bg2.png') no-repeat;
        background-position: center;
        background-size: cover;
        color: #fff;
        padding: 40px 0 10px
    }
    .join .join-box{
        width: 60%;
        margin: auto;
    }
    .join .join-box .join-title{
        font-size: 20px;
        font-weight: 600;
        margin: 20px 0
    }
    .join-box .join-desc{
        font-size: 13px;
    }
    .join .join-menu-box{
        background: #fff;
        color: #666;
        margin: 40px 0 10px;
    }
    .join-box .join-menu-box .box-menu{
        font-size: 0;
        background: #eee;
        padding-left: 15px
    }
    .join-box .join-menu-box .box-menu ul{
        display: flex;
        justify-content: flex-start;
        font-size: 0;
    }
    .join-box .join-menu-box .box-menu ul li{
        font-size: 12px;
        padding: 8px 0;
        text-align: center;
        cursor: pointer;
    }
    .menu .cc{
        margin: 0 6px;
        color: #666 !important
    }
    .join .show{
        font-size: 12px;
        color: #333;
        padding: 20px 0 20px 15px;
    }
    .join .show .show-title{
        margin-left: 40px;
    }
    .join .show ul{
        margin-left: 50px;
        padding-right: 20px
    }
    .show ul li{
        padding: 5px
    }
    .join .box-menu .joinActive{
        color: #ef8c26
    }
    .case2{
         width: 60%;
         margin: 30px auto;
     }
     .case2 .case2-menu{
         display: flex;
         justify-content: space-between;
         align-items: center;
         border-bottom: 1px solid #ddd
     }
     .case2-menu ul{
         width: 90%;
         display: flex;
         justify-content: space-between;
     }
     .case2-menu ul li{
         padding: 10px 0;
         font-size: 14px;
         cursor: pointer;
     }
     .case2-menu ul li:nth-child(1){
         font-size: 16px;
     }
     .case2-menu ul .menu-active2{
         border-bottom: 2px solid #ef8c26;
         color: #ef8c26
     }

</style>

<script>
import goods from './goods'
export default {
    components: {
        "z-goods": goods
    },
    data(){
        return{
            station: [],
            currentIndex: 0,
            goodslist: [],
            show: true ,
            companyMess: {}      
        }
    },
    methods: {
        clickJoinMenu(index){
            this.currentIndex = index;
        }
    },
    beforeCreate(){
        this.axios.get('/jiekou/contact_api/get_contact.html').then(res =>{
            this.companyMess = res.data[0];
        })
        this.axios.get('/jiekou/station_api/get_station.html').then(res =>{
            this.station = res.data;
            console.log(this.station)
        })
    }
}
</script>