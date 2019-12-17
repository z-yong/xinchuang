<template>
    <div class="wrapper">
        <el-row :gutter="8">
            <el-col :span="8"><div class="grid-content bg-purple">
                <div class="img">
                    <img src="../assets/win/zhiliang.png" alt="">
                </div>
                <p class="you-title">无外包 零风险</p>
                <span>恪守不转包、不挂靠；依托自有设计、施工、维护服务中心，向各行业客户提供专业的、一站式的高品质服务</span>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
                <div class="img">
                    <img src="../assets/win/zuanshi.png" alt="">
                </div>
                <p class="you-title">九年经验 行业领先</p>
                <span>专注高端商业办公环境和星级酒店等公共建筑装饰领域十余年，是一家在行业内综合实力领先的深圳装饰公司</span>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
                <div class="img">
                    <img src="../assets/win/muzhi.png" alt="">
                </div>
                <p class="you-title">过万客户的鉴证口碑</p>
                <span>践行全过程、全方位、一体化的专业服务，现已获得包括世界500强在内的3000多家行业知名客户的共同见证</span>
            </div></el-col>
        </el-row>
        <el-row :gutter="8">
            <el-col :span="8"><div class="grid-content bg-purple">
                <div class="img">
                    <img src="../assets/win/jiantou.png" alt="">
                </div>
                <p class="you-title">绿色环保 环境舒适</p>
                <span>致力绿色装修，践行低碳环保，结合高端绿色材料和科学施工管理，用心创造绿色多元、健康美好的空间环境</span>    
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
                <div class="img">
                    <img src="../assets/win/qiandai.png" alt="">
                </div>
                <p class="you-title">设计空间的商业价值</p>
                <span>结合建筑、结构、工艺、材料、灯光、家具与配饰等来实现商业项目所要传达的内容与意义，实现艺术与商业价值的完美结合</span>    
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
                <div class="img">
                    <img src="../assets/win/kefu.png" alt="">
                </div>
                <p class="you-title">24小时售后 品质保证</p>
                <span>遵照国家质量标准，遵循科学施工工艺，精心把关每一个环节，快速响应客户的需求，为每一项使命倾献专业</span>    
            </div></el-col>
        </el-row>
    </div>
</template>
<style scoped>
     .wrapper .el-col{
        text-align: center
    }
    .wrapper .grid-content{
        width: 65%;
        display: inline-block;
        margin: 10px 0;
        padding: 3vh 3vw 3vh;
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
    .wrapper .grid-content.bg-purple:hover{
        background: #ef8c26;
        color: #fff
    }
     .wrapper .grid-content.bg-purple:hover span{
         color: #fff
     }
</style>