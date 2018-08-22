<template>
    <div>
        <toptitle toptitle="可持续力" pathkeys="growUp"></toptitle>
        <tabbar tabs="2"></tabbar>
        <div class="ywgmbox">
            <div class="fooBox">
                <img src="../../images/zsr.png" altms="">
                <span>收入100亿</span>
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
                </div>
            </div>
            <div class="qybox">
                <proList></proList>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

// import { commonTab } from '../js/tab'
import toptitle from '../../commonview/toptitle'
import tabbar from '../../commonview/tabbar'
import selecttype from '../../commonview/selectType'
import proList from '../../commonview/proList'
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
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335},
                                {value:310},
                                {value:234}
                            ]
                        }
                    ]
                };
                myChart.setOption(option);
        }
    },
    created() {
        this.setPathKey(3)
    },
    components: {
        toptitle,
        tabbar,
        selecttype,
        proList
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
    float:left;
    padding-top: 10vw;
    font-size: 3vw;
}
.rs{
    font-size: 3vw;
    margin-top: 3vw;
    /* padding-right: 5%; */
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
</style>
