<template>
    <div class="wrapper app-phone">
         <div class="top" id='phone'>
            <div class="back"><img v-on:click="back" src="../assets/images/back.png" alt=""></div>
            <div class="titles"><img src="../assets/images/hexin_1.png"></div>
            <div class="share"><el-row class="tac">
  <el-col :span="12">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
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
        <div class="bg1"></div>
        <div class="wrapper-about one">
            <div class="about-title">
                <div class="side"></div>
                <p class="title-desc">
                   安徽欣创装饰工程有限公司
                </p>
            </div>
            <div class="form">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                    <el-form-item prop="nickname ">
                    <el-input placeholder="您的称呼" v-model="ruleForm.nickname "></el-input>
                </el-form-item>
                <el-form-item prop="tel">
                    <el-input type="number" placeholder="手机号码" v-model="ruleForm.tel"></el-input>
                </el-form-item>
                <el-form-item prop="area">
                    <el-input placeholder="装修面积m²" v-model="ruleForm.area"></el-input>
                </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                    </el-form-item>
                </el-form>

                <!-- <form @submit.prevent="submit"> 
                    <input type="text" v-model="name"> 
                    <input type="text" v-model="phone"> 
                    <input type="text" v-model="mianji"> 
                    <input type="submit" value="提交"> 
                </form>  -->
        
            </div>
        </div>

        <div class="map">
            <div class="map-top">
                <span><img src="../assets/images/cu.png"></span>
                <span>
                    <p>地址：1、屯溪路店：屯溪路33号恒兴广场A座2402-2403</p>
                    <p> &emsp;&nbsp;2、滨湖万达店：万达文化旅游城 万达茂6号楼</p>
                    <p> 联系电话：0551-63524277</p>
                     </span>
            </div>
            <div calss="map-pic"><img src="../assets/images/map.png" style='width:100%;display:block'></div>

        </div>
         <z-goods :goodsList='goodslist' :show='show'></z-goods>
         <div class="goods-btns" @click="goWin"><img src="../assets/images/more-success.png"></div>
         <div class="foot-nav" >
              <span><a href='#phone'><img src="../assets/images/top.png"></a></span>
              <span><a href='#phone'> 返回顶部</a></span>
         </div>
    </div>
</template>

<style>
/* 底部 */
.app-phone .foot-nav{
        height: 7vh;
          background: #f3f3f3;padding: 10px 0px;
    }
    .app-phone .foot-nav span{
        display: block!important;
        width: 100%;
        text-align: center;
        z-index: 999;
    }
    .app-phone .foot-nav span img{display:block!important;padding-left:47%;}
/*头部*/
.app-phone .goods-btns{text-align: center}
.app-phone .goods-btns img{width: 40%}
.app-phone .top{height: 50px;width: 100%;}
.app-phone .top .back{
     height: 35px;float: left;width: 10%;
    padding-top: 10px;
    margin-left: 5%;
     border-right: 1px solid #CECECE;}
.app-phone .top .back img{width: 40%;height: 80%;}
.app-phone .top .titles{width:67%;float: left;text-align: center;padding-top: 5px}
.app-phone .top .titles img{width: 30%;}
.app-phone .top .share{
    float:left;
     height: 45px!important;
    right: 0px;
    width: 17.4%!important;
    border-left: 1px solid #CECECE;
    padding:0px;
    }
.app-phone .top .share img{width: 100%!important; height: 40%!important;margin-bottom: 10px;}
.app-phone .el-collapse-item__wrap{z-index: 10;position:absolute;}
.app-phone .el-col-12{width: 100%!important;height:100%}
.app-phone .el-row{z-index: 10;height: 100%}
.app-phone .el-submenu__title i{display: none!important;}
.app-phone .el-submenu__title{height: 3rem!important;}
.app-phone .el-submenu {font-size: 0.5rem;}
.app-phone .el-menu{height: 100%;}

.app-phone .btns{padding: 7px 0px;text-align: center}
    .wrapper.app-phone  .bg1{
        background: url('../assets/phone/phonebg.png') no-repeat;
        background-position: center;
        background-size: cover;
        height: 23vh;
    }
    .wrapper.app-phone  .wrapper-about.one{
        width: 98%;
        margin: auto;
        height: 16rem;
        position: relative;
    }
    .app-phone .wrapper-about .about-title{
        padding: 10px 0;
        height: 3vh;
        display: flex;
        align-items: center;
    }
    .app-phone .wrapper-about .about-title .side{
        width: 10px;
        height: 2vh;
        background: #ef8c26;
    }
    .app-phone .wrapper-about .about-title .title-desc{
        font-size: 14px;
        margin-left: 7px
    }
    .wrapper.app-phone  .company{
        width: 60%;
        margin: 60px auto 20px
    }
    .app-phone .company .com-title{
        font-size: 21px;
        font-weight: 600;
        margin: 20px 0;
    }
    .app-phone .company .mess-list li{
        padding: 5px 0;
        border-bottom: 1px solid #eee;
        font-size: 14px;
    }
    .app-phone .company .mess-list li img{
        vertical-align: middle;
        width: 32px
    }
    .app-phone .company .mess-list li .desc-name{
        vertical-align: middle;
        margin-left: 15px
    }
    .app-phone .company .mess-list li .desc-box{
        display: inline-block;
        vertical-align: middle
    }

    .wrapper.app-phone  .join{
        width: 100%;
        height: 70vh;
        background: url('../assets/phone/ph-bg2.png') no-repeat;
        background-position: center;
        background-size: cover;
        color: #fff;
        padding: 40px 0 10px
    }
    .app-phone .join .join-box{
        width: 60%;
        margin: auto;
    }
    .app-phone .join .join-box .join-title{
        font-size: 20px;
        font-weight: 600;
        margin: 20px 0
    }
    .app-phone .join-box .join-desc{
        font-size: 13px;
    }
    .app-phone .join .join-menu-box{
        background: #fff;
        color: #666;
        margin: 40px 0 10px;
    }
    .app-phone .join-box .join-menu-box .box-menu{
        font-size: 0;
        background: #eee;
        padding-left: 15px
    }
    .app-phone .join-box .join-menu-box .box-menu ul{
        display: flex;
        justify-content: flex-start;
        font-size: 0;
    }
    .app-phone .join-box .join-menu-box .box-menu ul li{
        font-size: 12px;
        padding: 8px 0;
        text-align: center;
        cursor: pointer;
    }
    .app-phone .menu .cc{
        margin: 0 6px;
        color: #666 !important
    }
    .app-phone .join .show{
        font-size: 12px;
        color: #333;
        padding: 20px 0 20px 15px;
    }
    .app-phone .join .show .show-title{
        margin-left: 40px;
    }
    .app-phone .join .show ul{
        margin-left: 50px;
        padding-right: 20px
    }
    .app-phone .show ul li{
        padding: 5px
    }
    .app-phone .join .box-menu .joinActive{
        color: #ef8c26
    }
    .app-phone .case2{
         width: 60%;
         margin: 30px auto;
     }
     .app-phone .case2 .case2-menu{
         display: flex;
         justify-content: space-between;
         align-items: center;
         border-bottom: 1px solid #ddd
     }
     .app-phone .case2-menu ul{
         width: 90%;
         display: flex;
         justify-content: space-between;
     }
     .app-phone .case2-menu ul li{
         padding: 10px 0;
         font-size: 14px;
         cursor: pointer;
     }
     .app-phone .case2-menu ul li:nth-child(1){
         font-size: 16px;
     }
     .app-phone .case2-menu ul .menu-active2{
         border-bottom: 2px solid #ef8c26;
         color: #ef8c26
     }

     /* 提交 */
     .app-phone .el-button--primary{
          background-color: #888888;
          border-color: #888888;
           width: 100%;
     }
     .app-phone .el-form-item{
         margin-bottom: 8px!important;
     }
    .app-phone .el-input  input.el-input__inner{
         height:36px!important;
         line-height: 36px!important;
     }
      .el-message-box{width: 100%!important;}
     .app-phone .el-form-item__content{
         margin-top:6px;
     }
     .app-phone .el-form-item__content .el-form-item__error{
       
         z-index: 9;
     }
     .el-message-box__wrapper{
         top:15rem!important;
         width:60%;
         left:20%!important;

     }
    
     .app-phone .form{
         width:94%;
         padding: 0 3%;
        
     }
    
     
     /* 地图 */
     .app-phone .map{
         height: 20rem;
         margin-top: 2vh;
         position: relative;
         margin-bottom: 0;
     }
     .app-phone .map-top{
         text-align: center;
     }
     .app-phone .map-top span:first-child{
         display: block;
         height: 2rem;
     }
.app-phone .map-top p{font-size: 0.8rem}
.app-phone .map .map-pic{
    width: 100%;
    height: 15rem;
}
.app-phone .map .map-pic img{
    width:100%;

}
</style>
<script>
import goods from './goods'

export default {
    
    components: {
        "z-goods": goods
    },
    // el:".form",
    data(){
       
        return{
            station: [],
            currentIndex: 0,
            goodslist: [],
            show: true ,
            companyMess: {},
             ruleForm: {
                    nickname :'',
                    tel:'',
                    area:'' 
             },
            rules: {
                nickname: [
                    { required: true, message: '请填写您的称呼', trigger: 'blur' },
                    { min: 1, max: 20, message: '长度在 1 到20个字符', trigger: 'blur' }
                ],
                tel: [
                    { required: true, message: '请填写手机号码', trigger: 'blur' },
                    { message: '手机号必须为数字值', trigger: 'blur'}
                ],
                area: [
                    { required:true, message: '请填写装修面积m²', trigger: 'blur' },
                    { min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur' }
                ]
            }
        };
       
    },
    methods: {
        handleOpen(){},
        handleClose(){},

        submitForm(formName) {
            const _this = this
        this.$refs[formName].validate((valid) => {
            let data = {};
            data = {
                nickname: _this.ruleForm.nickname,
                tel:_this.ruleForm.tel,
                area: _this.ruleForm.area
            }
            console.log(data)
          if (valid) {
            this.axios.get(`/jiekou/Lian_api/get_lian?nickname=${data.nickname}&tel=${data.tel}&area=${data.area}`).then(res =>{
                // this.axios.get(`/jiekou/Lian_api/get_lian`,data).then(res =>{
                    this.$alert("提交成功", '提交结果', {
                                confirmButtonText: '确定',
                                type: 'success',
                                // callback: action => {
                                // },
                            });
                console.log(res)
                        // if(res.body==1){
                        //     this.$alert("提交成功", '提交结果', {
                        //         confirmButtonText: '确定',
                        //         type: 'success',
                        //         // callback: action => {
                        //         // },
                        //     });
                        // }
                        // else{
                        //     this.$alert("提交失败", '提交结果', {
                        //         confirmButtonText: '确定',
                        //         type: 'warning',
                        //         // callback: action => {
                        //         // },
                        //     });
                        // }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    
        // submitForm(formName) {
        //     this.$refs[formName].validate((valid) => {
        //         if (valid) {
		// 	this.axios.get('/jiekou/Lian_api/get_lian').then(res =>{
        //                 if(res.body==1){
        //                     this.$alert("提交成功", '提交结果', {
        //                         confirmButtonText: '确定',
        //                         type: 'success',
        //                         callback: action => {
        //                         },
        //                     });
        //                 }
        //                 else{
        //                     this.$alert("提交失败", '提交结果', {
        //                         confirmButtonText: '确定',
        //                         type: 'warning',
        //                         callback: action => {
        //                         },
        //                     });
        //                 }
        //             })
        //         } else {
        //             console.log('error submit!!');
        //             return false;
        //         }
        //     });
        // },

        back(){
        this.$router.go(-1);//返回上一层
        },
        clickJoinMenu(index){
            this.currentIndex = index;
        },
         goWin(){
            this.$router.push({name: 'winapp'})
        }
    },

    beforeCreate(){
        this.axios.get('/jiekou/contact_api/get_contact.html').then(res =>{
            this.companyMess = res.data[0];
        })
        this.axios.get('/jiekou/station_api/get_station.html').then(res =>{
            this.station = res.data;
        })
    }
    
}
</script>