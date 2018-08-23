<template>
    <div>
        <toptitle toptitle="业务能力" pathkeys="continued"></toptitle>
        <tabbar tabs="2"></tabbar>
        <div class="ywgmbox">
            <div class="fooBox">
                <img src="../../images/zsr.png" altms="">
                <span>总利润1000亿</span>
            </div>
            <selecttype typeName="选择板块" :optiontype="teamtypedata" :currentFlag="teamTypeFlag"></selecttype>
            <div class="imgWapper">
                <div id="main"></div>
                <div class="rdata">
                    <ul>
                        <li class="rs">
                            <span class="ion ion1"></span>
                            <span>健康</span>
                            <span>310万</span>
                            <div style="text-align: center;">利润率40%</div>
                        </li>
                        <li class="rs">
                            <span class="ion ion2"></span>
                            <span>快乐</span>
                            <span>310万</span>
                            <div style="text-align: center;">利润率40%</div>
                        </li>
                        <li class="rs">
                            <span class="ion ion3"></span>
                            <span>富足</span>
                            <span>310万</span>
                            <div style="text-align: center;">利润率40%</div>
                        </li>
                    </ul>
                    <ul>
                        <li class="rs">
                            <span class="ion ionc ion4"></span>
                            <span>综合收益率</span>
                            <span>5000</span>
                        </li>
                        <li class="rs">
                            <span class="ion ionc ion5"></span>
                            <span>净利率</span>
                            <span>1000</span>
                        </li>
                        <li class="rs">
                            <span class="ion ionc ion6"></span>
                            <span>税后净值</span>
                            <span>1000</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="textline">
                <span class="st s1">
                    <img class="sim" src="../../images/kl.png" alt="">
                    <span>快乐 ￥1000</span>
                </span>
                <span class="st s2">
                    <img class="sim" src="../../images/lr.png" alt="">
                    <span>利润率 20%</span>
                </span>
            </div>
            <div class="qybox">
                <proList></proList>
            </div>
        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

// import { commonTab } from '../js/tab'
import toptitle from '../../commonview/toptitle'
import tabbar from '../../commonview/tabbar'
import selecttype from '../../commonview/selectType'
import proList from '../../commonview/proList'
import footerBar from '../../commonview/footerBar'
import echarts from 'echarts';
export default {
    data() {
        return {
            teamtypedata: [
               '健康',
               '快乐',
               '富足'
            ],
            teamTypeFlag: [
                {
                    flag: true
                },
                {
                    flag: false
                },
                {
                    flag: false
                }   
           ]
        }
    },
    mounted() {
        this.echartsInnit()
    },
    methods: {
        ...mapActions([
            'setPathKey'
        ]),
        echartsInnit() {
                var myChart = echarts.init(document.getElementById('main'))
                var option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            selectedMode: 'single',
                            radius: ['0', '35%'],

                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: true
                                }
                            },
                            data:[
                                {value:335, name:''},
                                {value:679, name:''},
                                {value:1548, name:''}
                            ]
                        },
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            data:[
                                {value:335, name:'健康'},
                                {value:310, name:'快乐'},
                                {value:234, name:'富足'}
                            ]
                        }
                    ]
                };
                myChart.setOption(option);
        }
    },
    created() {
        this.setPathKey(2)
    },
    components: {
        toptitle,
        tabbar,
        selecttype,
        proList,
        footerBar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ywgmbox {
    width: 100%;
    position: absolute;
    top:27vw;
}
.fooBox {
    width: 90%;
    margin: 0 auto;
    background: #000;
    margin-top: 5vw;
    padding: 2vw 0;
    text-align: center;
    border-radius: 1vw;
}
.fooBox img {
    width: 5.6vw;
    height: 3.6vw;
}
.fooBox span {
    font-size: 2.66vw;
    color: #ffffff;
    vertical-align: text-top;
}

.qybox {
    width: 90%;
    margin: 0 auto;
}
.qybox .qyName {
    padding: 2vw  0;
}
.imgWapper {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
}
#main {
    width: 68vw;
    height:53.33vw;
    padding: 1vw 0;
    float: left;
}
.rdata {
    float:right;
    padding-top: 5vw;
    font-size: 3vw;
}
.rs{
    font-size: 3vw;
    margin-top: 1vw;
    padding-right: 1vw;
}
.rs .ion{
    display: inline-block;
    width: 3vw;
    height: 3vw;
    border-radius: 1vw;
    background: blue;
    vertical-align: bottom;
}
.rs .ion2 {
    background: red;
}
.rs .ion3 {
    background: yellow;
}
.rs .ionc {
    vertical-align: text-top
}
.rs .ion4 {
    background: #aaa;
}
.rs .ion5 {
    background: #bbb;
}
.rs .ion6 {
    background: #ccc;
}
.textline {
    width: 90%;
    margin: 0 auto;
    padding: 2vw 0;
    background: blue;
    border-radius: 1vw;
    margin-bottom: 3vw;
}
.textline .st {
    display: inline-block;
    width: 49%;
    text-align: center;
    color: #ffffff;
    font-size: 3vw;
    
}
.textline .st:first-child {
    border-right: 1px solid #ccc;
}
.textline .st span {
    display: inline-block;
}
.sim {
    width: 4.53vw;
    height: 4.53vw;
    display: inline-block;
    vertical-align: middle;
}
</style>
