<template>
    <div class="wrapper">
        <div class="bg"></div>
        <div class="wrapper-about">
            <div class="about-path">
                <div class="side"></div>
                <p class="path-desc">
                    您的位置：<span>首页>联系我们</span>
                </p>
            </div>
            <div class="about">
                <div class="content-title title">
                    <p class="title-name">关于我们</p>
                    <p class="line"></p>
                    <p class="title-desc">安徽欣创办公室装修设计：帮您赚钱的装修公司！</p>
                    <div class="about-bot-content">
                        <div class="content-text">
                            <div class="text-box">
                                <p class="about-text"><img src="../assets/about/icon.png" alt="">安徽欣创装饰工程有限公司在2011年成立于安徽合肥，是一家集设计、施工、售后服务于一体的创新型企业。拥有家装和工装两大事业部，家装缔造经典空间，工装彰显不凡气质。公司成立至今，坚定不移的立足诚信，从客户的角度出发，用完美的设计、专业的施工、专业的方案呈现给客户一个实用精美的高质量的装饰效果，赢得广大客户的一致好评，更是在装饰业内创下优良的口碑。'</p>
                                <p class="about-text" v-for="(item,index) in aboutContent" :key="index" v-html="item">
                                    {{item}}
                                </p>
                            </div>
                        </div>
                        <div class="content-img">
                            <img src="../assets/about/aboutright.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="develop">
            <div class="develop-title title">
                <p class="title-name">发展历程</p>
                <p class="line"></p>
                <p class="title-desc">我们的点点滴滴成长，感谢一路有您！</p>
            </div>
            <div class="course-box" @mouseenter="stopChange" @mouseleave="startChange">
                <!-- :class="courseFlag ? 'change-active' : ''"  -->
                <div class="changePos" :style="{left:  leftLen + 'px'}">
                    <ul class="course-list">
                        <li v-for="(item,index) in developMess" :key="index" 
                            :class="index%2 == 0 ? 'pos-top' : 'pos-bottom'" :style="{left: index*15 + 10 + 'vw'}">
                            <div class="line-item"></div>
                            <p class="year">{{item.time}}</p>
                            <p class="course-mess">{{item.content}}</p>
                        </li>
                    </ul>
                </div>
                <div class="line" :style="{width: developMess.length*15 + 'vw'}"></div>
                <img class="btn-left" @click="changeLeft" src="../assets/about/left.png" alt="">
                <img class="btn-right" @click="changeRight" src="../assets/about/right.png" alt="">
            </div>
        </div>
        <div class="honor">
            <div class="honor-title title">
                <p class="title-name">荣誉资质</p>
                <p class="line"></p>
                <p class="title-desc">国家建筑装饰设计乙级企业，施工二级单位。</p>
            </div>
            <div class="honor-content" @mouseenter="stopHonorChange" @mouseleave="startHonorChange">
                <div class="honor-left" @click="changeHonorLeft">
                    <img src="../assets/about/left.png" alt="">
                </div>
                <!-- :class="honorFlag ? 'change-active' : ''" -->
                <div class="honor-box">
                    <ul  
                         :style="[{width: honorImg.length*15 + 'vw'},{left: leftHonorLen + 'px'}]">
                        <li v-for="(img,index) in honorImg" :key="index">
                            <img :src="img.picture" alt="">
                        </li>
                    </ul>
                </div>
                 <div class="honor-right" @click="changeHonorRight">
                    <img src="../assets/about/right.png" alt="">
                </div>
            </div>
        </div>
        <div class="case-box">
            <z-goods :goodsList='goodslist' :show='show'></z-goods>
        </div>
        
    </div>
</template>

<style src='./about.css' scoped>
    
</style>

<script>
import { setInterval, clearInterval } from 'timers';
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
                '欣创装饰有一支高水准洋溢热情的高端设计团队，设计理念时尚、设计思维鲜活，不拘泥于传统，用不拘一格的设计风格引领装饰风尚。在设计方面，他们追求实用功能和美观度完美兼顾的高端品位设计，坚信设计可以让生活变得更加美好。',
                '欣创装饰以企业展厅和智能化装修为企业核心竞争力，同时也承接大量的精装修样板房、别墅家居、酒店餐饮、办公空间等设计工程。在设计和施工上欣创装饰竭力将绿色装饰与高科技智能化装饰完美结合，统筹环保、健康、时尚发展统一。打造一个有社会责任感的企业。',
                '欣创装饰积极跟进时代发展，纵览全局，抓住时机进行企业转型，运用网络新媒体优势不断开拓进取，与时俱进地把握市场潮流。欣创装饰以其独特的魅力吸引了大量的优秀人才共创装饰盛景，发挥“工匠精神”，通过精湛工艺、精细施工、完善服务和高效的职业精神来更好地为新老客户全心服务。同时以精湛、负责、协同、创新的新理念，打造行业新模式，努力让欣创成为安徽装饰行业的标杆企业。',
                '在今后，欣创装饰将坚持不懈的提高企业经营管理和完善服务水平，扩大品牌影响力，励志将欣创装饰打造成国内一流的装饰公司。'
            ]
        }
    },
    methods: {
        changeLeft(){
            console.log(this.flag)
            if(!this.flag || this.leftLen >= this.developMess.length*30){
                return
            }else{
                this.flag = false;
                const len = this.leftLen + 100;           
                this.timer1 = setInterval(() =>{
                    this.leftLen += 1;
                    if(this.leftLen >= len){
                        clearInterval(this.timer1);
                        this.flag = true
                    }
                },3)
            }
        },
        changeRight(){
            if(!this.flag || this.leftLen <= -this.developMess.length*3){
                return
            }else{
                this.flag = false;
                const len = this.leftLen - 150; 
                this.timer1 = setInterval(() =>{
                    this.leftLen -= 1;
                    if(this.leftLen <= len){
                        clearInterval(this.timer1);
                        this.flag = true
                    }
                },3)
            }
        },
        changeHonorLeft(){ 
            if(!this.flag || this.leftHonorLen >= this.honorImg.length*30){
               return
            }else{
                this.flag = false;
                const len = this.leftHonorLen + 120;              
                this.timer2 = setInterval(() =>{
                    this.leftHonorLen += 2;
                    if(this.leftHonorLen >= len){
                        clearInterval(this.timer2);
                        this.flag = true
                    }
                },5)
            }
        },
        changeHonorRight(){
            if(!this.flag || this.leftHonorLen <= -this.honorImg.length*30){
                return
            }else{
                this.flag = false;
                const len = this.leftHonorLen - 150;
                this.timer2 = setInterval(() =>{
                    this.leftHonorLen -= 2;
                    if(this.leftHonorLen <= len){
                        clearInterval(this.timer2);
                        this.flag = true
                    }
                },5)
            }
        },
        stopChange(){
            // this.courseFlag = false
            clearInterval(this.timer1)
        },
        startChange(){
            // this.courseFlag = true
            if(this.flag){
                this.timer1 = setInterval(this._selfDevelop,15);
            }
        },
        stopHonorChange(){
            // this.honorFlag = false
            clearInterval(this.timer2)
        },
        startHonorChange(){
            // this.honorFlag = true
             if(this.flag){
                 this.timer2 = setInterval(this._selfHonor,15);
             }
        },
        // 自动移动发展历程
        _selfDevelop(){
            this.leftLen += this.speed;
            if(this.leftLen >= 100){
                this.speed = -1
                if(this.leftLen >= 500){
                    this.speed = -8
                }
            }else if(this.leftLen <= -100){
                this.speed = 1;
                if(this.leftLen <= -500){
                    this.speed = 8
                }
            }
        },
        // // 自动移动证书
        _selfHonor(){
            this.leftHonorLen += this.speed;
            if(this.leftHonorLen >= 100){
                this.speed = -1
                if(this.leftHonorLen >= 300){
                    this.speed = -8
                }
            }else if(this.leftHonorLen <= -100){
                this.speed = 1;
                if(this.leftHonorLen <= -300){
                    this.speed = 8
                }
            }
        }
    },
    created(){
        this.timer1 = setInterval(this._selfDevelop,15);
        this.timer2 = setInterval(this._selfHonor,15);
        this.axios.get('/jiekou/progress_api/get_progress.html').then(res =>{
            this.developMess = res.data
        },err =>{
            console.log(err)
        })
        this.axios.get('/jiekou/honor_api/get_honor.html').then(res =>{
            res.data.forEach((ele) =>{
                ele.picture = 'http://' + ele.picture;
            })
            this.honorImg = res.data
        })
    }
}
</script>