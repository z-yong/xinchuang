<template>
    <div class="wrapper">
        <div class="bg"></div>
        <!-- <div class="menu-wrapper">
            <div class="menu-box">
                <div class="menu-left" @click='goIndex'>
                    <img src="../assets/details/back.png" alt="">
                    <span>返回首页</span>
                </div>
                <div class="menu-right">
                    <ul>
                        <li v-for="(item,index) in menuList" :key="index"
                            @click="clickMenu(index)" :class="currentIndex == index ? 'menu-active' : ''">
                            {{item.cname}}
                        </li>
                    </ul>
                </div>
            </div>
        </div> -->
        <div class="design">
            <div class="design-title">
                <p class="title-text">{{detailsMess.title}}</p>
                <img src="../assets/details/title.png" alt="">
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
            <z-goods :goodsList='goodslist' :show='show' @changeGoods='getChangeGoods($event)'></z-goods>
        </div>
    </div>
</template>

<style scoped>
    .wrapper .bg{
        background: url('../assets/details/bg11.png') no-repeat;
        background-position: center;
        background-size: cover;
        height: 28vh;
    }
    .wrapper .menu-wrapper{
        width: 100%;
        border-bottom: 2px solid #ccc;
    }
    .wrapper .menu-box{
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
    }
    .menu-box .menu-left{
        cursor: pointer;
        user-select: none;
    }
    .menu-box .menu-left span{
        color: #ef8c26;
        margin-left: 5px;
    }
    .menu-box .menu-right ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu-box .menu-right ul li{
        padding: 10px;
        cursor: pointer;
        user-select: none;
    }
    .menu-box .menu-right ul .menu-active{
        background: #ef8c26;
        color: #fff
    }
    .design{
        width: 60%;
        margin: 40px auto;
    }
    .design .design-title{
        width: 100%;
        text-align: center
    }
    .design .design-title .title-text{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .design .design-title img{
        width: 100%
    }
    .design .title-desc{
        margin: 20px 0;
    }
    .design .title-desc p{
        font-size: 15px;
        font-weight: 600;
        line-height: 22px
    }
    .design .title-desc p span{
        display: inline-block;
        margin-left: 40px;
        text-align: left;
        color: #666;
        font-weight: normal;
        font-size: 14px;

    }
    .design .img-box{
        margin: 30px 0 20px
    }
    .design .img-box,
    .design .img-box ul{
        width: 100%;
    }
    .design .img-box ul li{
        width: 80%;
        margin: 10px auto
    }
    .design .img-box ul li img{
        width: 100%;
        height: auto;
    }
    .wrapper .goods-box{
        width: 100%;
        border-top: 2px solid #ef8c26
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
            detailsMess: {},
            currentIndex: 0,
            show: true,
            goodslist: []
        }
    },
    methods: {
        clickMenu(index){
            this.currentIndex = index
        },
        getChangeGoods(event){
            this._getGoods(event)
        },
        goIndex(){
            this.$router.push('/index')
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