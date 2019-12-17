<template>
    <div class="wrapper">
        <div class="bg">
        </div>
        <div class="case">
            <div class="case-title">
                <p class="title-left">成功案例</p>
                <p class="title-right">当前位置： 主页 > 成功案例</p>
            </div>
            <div class="case-menu">
                <ul>
                    <li v-for="(item,index) in menuList" :key="index" @mouseenter="getGoodsList(index,item.cid)" :class="currentIndex == index ? 'menu-active' : ''">
                        {{item.cname}}
                    </li>
                </ul>
            </div>
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
         <z-goods :goodsList='goodslist2' :show='!show'></z-goods>
    </div>
</template>
<style scoped>
    .wrapper .bg{
        background: url('../assets/win/bg11.png') no-repeat;
        background-position: center;
        background-size: cover;
        height: 28vh;
    }
    .case{
        width: 60%;
        margin: auto;
        padding: 20px 0 10px;
    }
    .case .case-title{
        display: flex;
        justify-content: space-between
    }
    .case-title .title-left{
        font-size: 18px;
        font-weight: 600;
    }
    .case-title .title-right{
        font-size: 14px;
        color: #676767
    }
    .case-menu{
        width: 100%;
        height: 5vh;
        margin: 15px 0 10px;
        border: 2px solid #ccc;
        box-sizing: border-box;
    }
    .case-menu ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around
    }
    .case-menu ul li{
        height: 100%;
        width: 11%;
        text-align: center;
        font-size: 14px;
        line-height: 5vh;
        user-select: none;
    }
    .case-menu ul li:hover,
    .wrapper .case-menu .menu-active{
        background: #ef8c26;
    }
    .wrapper .pages{
        position: relative;
        width: 32%;
        margin: auto;
        margin-top: 40px;
        text-align: center
    }
    .el-pagination{
        display: inline-block;
    }
    .pages .start,
    .pages .end{
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);
        font-size: 14px;
        color: #666;
        padding: 5px 15px;
        background: #f4f4f5;
        cursor: pointer;
        user-select: none;
    }
    .pages .start{
        left: 10px;
    }
    .pages .end{
        right: 10px
    }
    .wrapper .youshiBox{
        border-bottom: 1px solid #ddd;
        padding: 5vh 0;
    }
    .wrapper .youshi-content{
        width: 60%;
        margin: 25px auto 0;
    }

    .wrapper .el-col{
        text-align: center
    }
    .wrapper .grid-content{
        width: 55%;
        display: inline-block;
        margin: 10px 0;
        padding: 5vh 2vw 5vh;
        text-align: left;
    }
    .wrapper .grid-content.bg-purple .img,
    .wrapper .grid-content.bg-purple .you-title{
        text-align: center
    }
    .grid-content .you-title{
        font-size: 18px;
        font-weight: 600;
        margin: 10px 0 20px;
    }
    .wrapper .grid-content span{
        font-size: 13px;
        color: #676767;
        text-align: right;
    }
    .wrapper .youshi-content .grid-content.bg-purple:hover{
        background: #ef8c26;
        color: #fff
    }
     .wrapper .youshi-content .grid-content.bg-purple:hover span{
         color: #fff
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