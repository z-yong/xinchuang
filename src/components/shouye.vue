<template>
    <div class="wrapper">
        
        <el-carousel :interval="5000" arrow="always" height="60vh">
            <el-carousel-item v-for="(item,index) in bgImg" :key="index">
                <!-- <router-link :to="'/details/' + item.id" tag="img" :src="item.picture" alt=""></router-link> -->
                <img :src="item.picture" alt="">
            </el-carousel-item>
        </el-carousel>
        <div class="tubiao-box">
            <ul class="tubiao-list">
                <!--    -->
                <li v-for="(item,index) in tubiaoList" :key="index" @mouseenter="getGoodsList(index,item.cid)"
                    @click="getGoodsList(index,item.cid)" :class="currentIndex == index ? 'menu-active' : ''">
                    <img class="tubiao" :src="currentIndex == index ? item.xuan_photo: item.photo">
                    <p class="tubiao-text">{{item.cname}}</p>
                    <div class="arrows" v-if="currentIndex == index">
                        <img src="../assets/shouye/arrows.png" alt="">
                    </div>
                </li>
            </ul>
        </div>
        <div class="goodsbox">
            <z-goods :goodsList='goodslist' :show='show' ref="goods"></z-goods>
            <div class="goods-btn" @click="goWin">MORE ></div>
        </div>
        <div class="youshi">
            <div class="youshi-content">
                <p class="youshi-title">六大优势</p>
                <z-advantage/>
            </div>
        </div>
        <div class="hezuo">
            <div class="hezuo-title">
                <p>合作伙伴</p>
            </div>
        </div>
        <div class="about">
            <div class="about-box">
                <div class="about-title">
                    <p class="title">关于我们</p>
                </div>
                <div class="about-content">
                    <div class="content-left">
                        <p class="left-title">{{contentTitle}}</p>
                        <p class="about-mess" v-for="(item,index) in aboutMess" :key="index">
                            {{item}}
                        </p>
                        <router-link tag="div" to="/about" class="btn">MORE ></router-link>
                    </div>
                    <div class="content-right">
                        <img src="../assets/shouye/about-right.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="dongtai">
            <div class="dontaiMess">
                <ul>
                    <router-link tag="li" :to="'/details/' + messD.id" v-for="(messD,index) in dynamic" :key="index">
                        <div class="mess-time">{{messD.id}}</div>
                        <div class="mess-right">
                            <p class="mess-title">{{messD.title}}</p>
                            <span v-html="messD.content" class="mess-content">{{messD.content}}</span>
                        </div>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<style src='./shouye.css' scoped>

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
            tubiaoList: [],
            goodslist: [],
            show: false,
            currentIndex: 0,
            bgImg: [],
            dynamic: [],
            contentTitle: '安徽欣创装饰设计有限公司',
            aboutMess: [
                '欣创团队介绍：“设计不是一种职业，它是一种生活的态度和流行的观念，一种规划生活空间的个性艺术。”',
                ' 秉承这样的理念，一支有着多年经验的小资装修团队，跳出纷繁复杂的市场。用一颗单纯的爱生活的心期待着您的光临。欣创装饰，愿与您一同打造心之向往的小资生活。'
            ]
        }
    },
    methods: {
        init (id) {
            let map = new AMap.Map(id, {
                center: [116.397428, 39.90923],
                resizeEnable: true,
                zoom: 10
            })
        },
        suspend(index){
            this.currentIndex = index
        },
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
            this.$router.push({name: 'win'})
        }
    },
    created(){
        this.axios.get('/jiekou/column_api/get_column.html').then(res =>{
            const list = res.data;
            list.forEach(ele =>{
                ele.photo = 'http://' + ele.photo;
                ele.xuan_photo = 'http://' + ele.xuan_photo
            })
            const arr = [
                {
                    cname: '全部案例',
                    photo: require('../assets/shouye/a1.png'),
                    xuan_photo: require('../assets/shouye/a.png')
                }
            ]
            this.tubiaoList = arr.concat(list)
            this.$store.dispatch('setMenuList',res.data)
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
