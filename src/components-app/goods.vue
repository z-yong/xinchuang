<template>
    <div class="wrapper">
        <!-- <div class="case2" v-if="show">
            <div class="case2-menu">
                <ul>
                    <li v-for="(caseItem,index) in menuList" :key="index"
                        @mouseenter="changeMenuColor(index),getGoodsList(index,caseItem.cid)" @click="getGoodsList(index,caseItem.cid)" :class="currentIndex == index ? 'menu-active2' : ''">
                        {{caseItem.cname}}
                    </li>
                </ul>
                <div class="right-btn" @click="goWinPage">
                    <span>MORE </span>
                    <img src="../assets/win/minijian.png" alt="">
                </div>
            </div>
        </div> -->
        <div class="goodsbox-top">
                <span style="font-size: 1rem">成功案例</span>
                <span><img src="../assets/images/s.png"></span>
                <span><img src="../assets/images/jx.png"> </span>
            </div>
        <ul class="goods-list">
            <router-link tag="li" :to='"/detailsapp/"+ goods.id' v-for="(goods,index) in mygoodsList" :key="index" 
                        @mouseenter.native="imgBig(index)" @mouseleave.native="imgSmall(index)" @click.native="addEvent(goods.id)">
                <div class="img-box">
                    <div :class="['img',{enter: isBig&&currentIn == index}]">
                        <img :src="goods.picture" alt="">
                    </div>
                </div>
                <div class="bottom">
                    <p class="bot-title">{{goods.title}}</p>
                    <span class="describe">{{goods.content}}</span>
                    <div class="bot-right">
                        <img class="icon" src="../assets/shouye/eye.png">
                        <span class="num">{{goods.views}}</span>
                    </div>
                </div>
            </router-link>
        </ul>
        <!-- <div class="goods-btn" @click="goWin"><img src="../assets/images/more.png"></div> -->
    </div>
</template>
<style scoped>

.goodsbox-top{height: 4rem;text-align: center;background-color: #F2F2F2;}
.goodsbox-top span:first-child,.good-top span:first-child{height: 2rem;display: block;line-height:2rem;width: 100%}
.goodsbox-top span:nth-child(2),.good-top span:nth-child(2){height: 1rem;display: block;line-height: 1rem;width: 100%}
/* .goodsbox-top span:nth-child(2),.good-top span:nth-child(2) img{height: 60%} */
.goodsbox-top span:nth-child(3),.good-top span:nth-child(3){height: 1rem;display: block;line-height: 1rem;width: 100%}
.goodsbox-top span:nth-child(3) img,.good-top span:nth-child(3) img{height:15%}
    .wrapper .goods-list{
        width: 100%;
        position: relative;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between
    }
    .goods-list li{
        width: 49.5%;
        overflow: hidden;
    }
    
    .goods-list li .img-box{
        perspective:150px;
        perspective-origin: 50%;
        -webkit-perspective:150px;	/* Safari 和 Chrome */
        -webkit-perspective-origin: 50%;
        transform-style: preserve-3d;
    }
    .goods-list li .img{
        width: 100%;
        margin: auto;
        font-size: 0;
        transition: transform 1.5s ease 0s
    }
    /* 鼠标移入放大 */
    /* .goods-list li .img.enter{
        transform: translateZ(40px)
    } */
    .goods-list li .img img{
        width: 100%;
        font-size: 0;
    }
    .goods-list .bottom{
        height: 2.8rem;
        position: relative;
        background: #f2f2f2;
        margin: auto;
        padding: 8px 5px 5px 8px;
        color: #000;
    }
    .goods-list .bottom .describe,
    .goods-list .bottom .num{
        color: #808080;
        font-size: 12px
    }
    .goods-list .bottom .describe{
        width: 62%;
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .goods-list .bottom .num{
        margin-left: 10px
    }
    .goods-list .bottom .bot-title{
        margin-bottom: 6px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
    }
    .goods-list .bot-right{
        /* display: inline-block; */
        float: right; 
        margin-right:3vw;
        box-sizing: border-box;
    }
    /* 鼠标移入商品详情 */
    /* .goods-list li:hover .bot-right{
        position: absolute;
        right: 0;
        top: 0;
        width: 20%;
        height: 100%;
        background: #ffc080
    } */
    /* .goods-list li:hover .img{
        transform: translateZ(50px);
    } */
    /* .goods-list li:hover .bot-right::before{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        content: '>';
        color: #fff;
        font-size: 30px;
    } */
    /* .goods-list li:hover .bottom{
        background: #ef8c26;
        color: #fff
    } */
     /* .goods-list li:hover .describe{
         color: #fff
     } */
    /* .goods-list li:hover .bot-right .num,
    .goods-list li:hover .bot-right .icon{
        display: none
    } */


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
         user-select: none;
     }
     .case2-menu ul li:nth-child(1){
         font-size: 16px;
     }
     .case2-menu ul .menu-active2{
         border-bottom: 2px solid #ef8c26;
         color: #ef8c26
     }
     .case2 .right-btn{
         cursor: pointer;
         user-select: none;
     }
</style>

<script>
export default {
    props: {
       goodsList: {
            type: Array,
            required: true
       },
       show: {
           type: Boolean,
           required: true
       }
    },
    data(){
        return{
            currentIndex: 0,
            currentIn: 0,
            isBig: false,
            goodsLists: [],
            mygoodsList: this.goodsList
        }
    },
    computed: {
        menuList(){
            const list = this.$store.getters.menuList;
            const arrMenu = [
                {
                    cname: '案例类型',
                    cid: 0
                }
            ]
            arrMenu.push(...list)
            return arrMenu
        }
    },
    methods: {
        getGoodsList(index,id){
            this.currentIndex = index;
            if(id != 0 ){
                this._getGoodsList(id)
            }
        },
        changeMenuColor(index){
            this.currentIndex = index;
        },
        imgBig(index){
            this.isBig = true;
            this.currentIn = index;
        },
        imgSmall(index){
            this.isBig = false;
            this.currentIn = index;
        },
        goWinPage(){
            const path = this.$route.path
            if(path != '/winapp'){
                this.$router.push('/winapp');
            }else{
                window.scrollTo(0,0)
            }
        },
        _getGoodsList(id){
            this.axios.get('/jiekou/Article_api/get_article.html?cid='+ id).then(res =>{
                this._sliceGoodsList(res.data[1])
            },err =>{
                console.log(err)
            })
        },
        _sliceGoodsList(data){
            data.forEach(ele =>{
                ele.picture = 'http://'+ ele.picture
            })
            this.goodsLists = data;
            this.goodsLists.forEach(ele =>{
                if(ele.content.length >= 15){
                    ele.content = ele.content.slice(0,15) + '...'
                }
            })
            if(!this.show){
                this.mygoodsList = this.goodsLists.slice(0,6)
            }else{
                this.mygoodsList = this.goodsLists.slice(0,3)
            }
            
        },
        // 自定义事件
        addEvent(id){
            this.$emit('changeGoods',id)
        }
    },
    created(){
        this.axios.get('/jiekou/Article_api/get_article.html').then(res =>{
            this._sliceGoodsList(res.data[0])
        },err =>{
            console.log(err)
        });
    }
}
</script>