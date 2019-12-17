<template>
    <div class="wrapper">
        <div class="major"></div>
        <div class="hexinBox">
            <div class="hexin1 hexin">
                <div class="hexin-title">
                    <div class="serial">01</div>
                    <p class="title-desc">专业设计思维</p>
                </div>
                <div class="content">
                    <ul class="content-items">
                        <li class="content-item" v-for="(item,index) in hexin1Mess" :key="index">
                            <p class="item-title">{{item.serial}}.<span>{{item.title}}</span></p>
                            <ul>
                                <li v-for="(miniItem,i) in item.mess" :key="i">{{i+1 + '、' + miniItem}}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hexin2 hexin">
                <div class="hexin-title">
                    <div class="serial">02</div>
                    <p class="title-desc">专业设计思维</p>
                </div>
                <div class="content">
                    <ul class="content-items">
                        <li class="content-item" v-for="(item,index) in hexin1Mess" :key="index">
                            <p class="item-title">{{item.serial}}.<span>{{item.title}}</span></p>
                            <ul>
                                <li v-for="(miniItem,i) in item.mess" :key="i">{{i+1 + '、' + miniItem}}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hexin3 hexin">
                <div class="hexin-title">
                    <div class="serial">03</div>
                    <p class="title-desc">绿色健康装修</p>
                </div>
                <div class="content">
                    <ul class="content-items">
                        <li class="content-item" v-for="(item,index) in hexin1Mess" :key="index">
                            <p class="item-title">{{item.serial}}.<span>{{item.title}}</span></p>
                            <ul>
                                <li v-for="(miniItem,i) in item.mess" :key="i">{{i+1 + '、' + miniItem}}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hexin4 hexin">
                <div class="hexin-title">
                    <div class="serial">04</div>
                    <p class="title-desc">客户眼里的欣创</p>
                </div>
                <div class="hexin4-content">
                    <div class="null"></div>
                    <div class="text">
                        <p>上海瑾汭建筑装饰工程有限公司上海瑾汭建筑装饰工程有限公司（原隶属华东建筑</p>
                        <p>设计科学研究院）康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多</p>
                        <p>国际专家前来培训交流，组设计人员出国学术考察。 自2006年年以来，先后</p>
                        <p>与（原隶属华东建筑设计科学研究院）康蓝设计院注重以国际化设计思维</p>
                        <p>的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学</p>
                        <p>术考察。 自2006年以来，先后与（原隶属华东建筑设计科学研究院</p>
                        <p>）康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国</p>
                        <p>际专家前来培训交流，组设计人员出国学术考察。自2006年以来</p>
                        <p>，先后与康蓝设计院注重以国际化设计思维的团队建设，常年</p>
                        <p>邀请众多国际专家前来培训交流，组设计人员出国学术考察</p>
                        <p>。 自2006年以来，先后与精装行业著名品牌，并进行了</p>
                        <p>商标局注册。康蓝设计院注重以国际化设计思维的团队</p>
                        <p>建设，常年邀请众多国际专家前来培训交流，组织设</p>
                        <p>计人员出国学术考察。自2006年以来，先后与（原</p>
                        <p>隶属华东建筑设计科学研究院）康蓝设计院</p>
                        <!-- <p>{{hexin4Mess.slice(0,35)}}</p>
                        <p>{{hexin4Mess.slice(35,74)}}</p>
                        <p>{{hexin4Mess.slice(74,112)}}</p>
                        <p>{{hexin4Mess.slice(112,149)}}</p>
                        <p>{{hexin4Mess.slice(149,185)}}</p>
                        <p>{{hexin4Mess.slice(185,220)}}</p>
                        <p>{{hexin4Mess.slice(220,254)}}</p>
                        <p>{{hexin4Mess.slice(254,287)}}</p>
                        <p>{{hexin4Mess.slice(287,319)}}</p>
                        <p>{{hexin4Mess.slice(319,350)}}</p>
                        <p>{{hexin4Mess.slice(350,380)}}</p>
                        <p>{{hexin4Mess.slice(380,409)}}</p>
                        <p>{{hexin4Mess.slice(409,437)}}</p>
                        <p>{{hexin4Mess.slice(437,464)}}</p>
                        <p>{{hexin4Mess.slice(464)}}</p> -->
                    </div>
                </div>
            </div>
            <div class="hexin5 hexin">
                <div class="hexin-title">
                    <div class="serial">05</div>
                    <p class="title-desc">完善的售后服务</p>
                </div>
                <div class="text-box">
                    <div class="text">
                       <p>上海瑾汭建筑装饰工程有限公司上海瑾汭建筑装饰工程有限公司（原隶属华东建筑</p>
                        <p>设计科学研究院）康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多</p>
                        <p>国际专家前来培训交流，组设计人员出国学术考察。 自2006年年以来，先后</p>
                        <p>与（原隶属华东建筑设计科学研究院）康蓝设计院注重以国际化设计思维</p>
                        <p>的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学</p>
                        <p>术考察。 自2006年以来，先后与（原隶属华东建筑设计科学研究院</p>
                        <p>）康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国</p>
                        <p>际专家前来培训交流，组设计人员出国学术考察。自2006年以来</p>
                        <p>，先后与康蓝设计院注重以国际化设计思维的团队建设，常年</p>
                        <p>邀请众多国际专家前来培训交流，组设计人员出国学术考察</p>
                        <p>。 自2006年以来，先后与精装行业著名品牌，并进行了</p>
                        <p>商标局注册。康蓝设计院注重以国际化设计思维的团队</p>
                        <p>建设，常年邀请众多国际专家前来培训交流，组织设</p>
                        <p>计人员出国学术考察。自2006年以来，先后与（原</p>
                        <p>隶属华东建筑设计科学研究院）康蓝设计院</p>
                        <!-- <p>{{hexin4Mess.slice(0,35)}}</p>
                        <p>{{hexin4Mess.slice(35,74)}}</p>
                        <p>{{hexin4Mess.slice(74,112)}}</p>
                        <p>{{hexin4Mess.slice(112,149)}}</p>
                        <p>{{hexin4Mess.slice(149,185)}}</p>
                        <p>{{hexin4Mess.slice(185,220)}}</p>
                        <p>{{hexin4Mess.slice(220,254)}}</p>
                        <p>{{hexin4Mess.slice(254,287)}}</p>
                        <p>{{hexin4Mess.slice(287,319)}}</p>
                        <p>{{hexin4Mess.slice(319,350)}}</p>
                        <p>{{hexin4Mess.slice(350,380)}}</p>
                        <p>{{hexin4Mess.slice(380,409)}}</p>
                        <p>{{hexin4Mess.slice(409,437)}}</p>
                        <p>{{hexin4Mess.slice(437,464)}}</p>
                        <p>{{hexin4Mess.slice(464)}}</p> -->
                    </div>
                    <div class="null"></div>
                </div>
            </div>
        </div>
        <div class="goods-box">
            <z-goods :goodsList='goodslist' :show='show'></z-goods>
        </div>
    </div>
</template>

<style src='./core.css' scoped>
</style>
<script>
import goods from './goods'
export default {
    components: {
        "z-goods": goods
    },
    data(){
        return {
            goodslist: [],
            show: true,
            hexin1Mess: [
                {
                    title: '战略事态思维',
                    serial: '01',
                    mess: [
                        '项目优势分析', '项目劣势思维' ,'项目机遇分析' ,'项目威胁分析'
                    ]
                },
                {
                    title: '目标定位思维',
                    serial: '02',
                    mess: [
                        '项目优势分析', '项目劣势思维' ,'项目机遇分析' ,'项目威胁分析'
                    ]
                },
                {
                    title: '用户体验思维',
                    serial: '03',
                    mess: [
                        '项目优势分析', '项目劣势思维' ,'项目机遇分析' ,'项目威胁分析'
                    ]
                },
                {
                    title: '商业盈利思维',
                    serial: '04',
                    mess: [
                        '项目优势分析', '项目劣势思维' ,'项目机遇分析' ,'项目威胁分析'
                    ]
                }
            ],
            hexin4Mess: '上海瑾汭建筑装饰工程有限公司上海瑾汭建筑装饰工程有限公司（原隶属华东建筑设计科学研究院）康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学术考察。 自2006年以来，先后与康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学术考察。 自2006年以来，先后与精装行业著名品牌，并进行了商标局注册。康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学术考察。 自2006年以来，先后与（原隶属华东建筑设计科学研究院）康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学术考察。 自2006年以来，先后与康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学术考察。 自2006年以来，先后与精装行业著名品牌，并进行了商标局注册。康蓝设计院注重以国际化设计思维的团队建设，常年邀请众多国际专家前来培训交流，组设计人员出国学术考察。 自2006年以来，先后与'
        }
    }
}
</script>