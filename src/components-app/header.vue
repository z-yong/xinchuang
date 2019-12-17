<template>
    <div class="wrapper">
        <div class="box">
            <div class="head-left">
                <img src="../assets/shouye/logo.png" alt="">
            </div>
            <div class="head-right">
                <ul class="menu-list">
                    <router-link tag="li" to="/indexapp" exact>首页</router-link>
                    <router-link tag="li" to="/winapp" exact>成功案例</router-link>
                    <router-link tag="li" to="/coreapp" exact>核心优势</router-link>
                    <router-link tag="li" to="/aboutapp" exact>关于我们</router-link>
                    <router-link tag="li" to="/phoneapp" exact>联系我们</router-link>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .wrapper{
        width: 100%;
        height: 10vh;
        background: #fff;
    }
    .wrapper .box{
        width: 60%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .head-left{
        width: 300px;
        height: auto;
    }
    .head-left image{
        width: 100%;
        height: auto;
    }
    .head-right{
        width: 70%;
        height: 100%;
    }
    .head-right .menu-list{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        text-align: center;
    }
    .menu-list li{
        width: 13%;
        height: 100%;
        line-height: 10vh;
        cursor: pointer;
        padding: 0 10px
    }

    .menu-list .router-link-active{
        background: #ef8c26;
        color: #fff;
    }
</style>