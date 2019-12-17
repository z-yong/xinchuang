<template>
    <div class="wrapper">
        <div class="wrapper-foot">
            <div class="foot-nav">
                <ul>
                    <router-link v-for="(item,index) in footNav" :key="index" :to="item.url"   >
                        {{item.name}}
                    </router-link>
                </ul>
            </div>
            <div class="content">
                <div class="left">
                    <p class="one">联系我们</p>
                    <p class="two">Contact Us</p>
                </div>
                <div class="middle">
                    <p class="name">安徽欣创装饰设计有限公司</p>
                    <ul>
                        <!-- <li v-for="(mes,index) in mess" :key="index">
                            <p>{{mes.name}}
                                <span>{{mes.desc}}</span>
                            </p>
                        </li> -->
                        <li>
                            <p>地址
                                <span>{{footMess.address}}</span>
                            </p>
                        </li>
                        <li>
                            <p>邮编
                                <span>{{footMess.code}}</span>
                            </p>
                        </li>
                        <li>
                            <p>电话
                                <span>{{footMess.telephone}}</span>
                            </p>
                        </li>
                        <li>
                            <p>手机
                                <span>{{footMess.phone}}</span>
                            </p>
                        </li>
                        <li>
                            <p>传真
                                <span>{{footMess.fax}}</span>
                            </p>
                        </li>
                        <li>
                            <p>邮箱
                                <span>{{footMess.mail}}</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <img :src="'http://' + footMess.photo" alt="">
                </div>
            </div>
        </div>
        <div class="footer">
            <!-- 版权所有 COPYRIGHT (©)  安徽欣创装饰设计 皖ICP备13012429号-1 -->
            {{footMess.copyright}}
        </div>
    </div>
</template>

<style scoped>
    .wrapper-foot{
        padding: 30px 0 80px;
        margin-top: 50px;
        background: #f3f3f3;
    }
    .foot-nav{
        height: 10vh;
    }
    .foot-nav ul{
        width: 40%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-around
    }
    .foot-nav li{
        color: #9e9e9e;
        font-size: 13px
    }
    .wrapper-foot .content{
        width: 60%;
        display: flex;
        justify-content: space-between;
        margin: 15px auto 0
    }
    .content .left{
        font-size: 18px;
    }
    .left .one{
        font-weight: 600;
        color: #494949
    }
    .left .two{
        color: #9e9e9e;
        margin-top: 10px
    }
    .middle{
        width: 50%;
        color: #9e9e9e;
        padding-top: 6px
    }
    .middle ul{
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .middle ul li{
        width: 40%;
        font-size: 13px;
        padding: 5px 0
    }
    .middle ul li span{
        margin-left: 10px;
    }
    .wrapper-foot .right{
        width: 18%
    }
    .wrapper-foot .right img{
        width: 100%;
        height: auto;
    }
    .wrapper .footer{
        padding: 10px 0 50px;
        text-align: center;
        font-size: 13px;
        color: #b5b5b5
    }
</style>

<script>
export default {
    data(){
        return {
            footNav: [
                {
                    name: '首页',
                    url: '/index'
                },
                {
                    name: '成功案例',
                    url: '/win'
                },
                {
                    name: '核心优势',
                    url: '/core'
                },
                {
                    name: '关于我们',
                    url: '/about'
                },
                {
                    name: '联系我们',
                    url: '/phone'
                }
            ],
            footMess: {}
        }
    },
    created(){
        this.axios.get('/jiekou/contact_api/get_contact.html').then(res =>{
            this.footMess = res.data[0]
        })
    }
}
</script>