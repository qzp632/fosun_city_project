<template>
  <div>
    <toptitle toptitle="行业布局" pathkeys="lamp"></toptitle>
    <tabbar tabs="1"></tabbar>
    <div class="tradelayout">
        <div class="statusWapper">
            <div class="statusbtn">选择状态</div>
            <div class="selectstatus">
                <span :class="{'current':currentFlag[0].flag}" @click="checkTab(0)">投后</span>
                <span :class="{'current':currentFlag[1].flag}" @click="checkTab(1)">过会</span>
                <span :class="{'current':currentFlag[2].flag}" @click="checkTab(2)">过会前</span>
            </div>
        </div>
        <div class="projd">项目阶段</div>
        <div id="main"></div>
        <div class="prozb">
            <div>项目占比</div>
            <div class="probl">
                <span>
                    <span class="zt"></span>
                    <span>投后(35%)</span>
                </span>
                <span>
                    <span class="zt"></span>
                    <span>过会(20%)</span>
                </span>
                <span>
                    <span class="zt"></span>
                    <span>过会前(45%)</span>
                </span>
            </div>
        </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { commonTab } from '../../js/tab'
import toptitle from '../../commonview/toptitle'
import tabbar from '../../commonview/tabbar'
import footerBar from '../../commonview/footerBar'
import echarts from 'echarts';

export default {
    data() {
        return {
           currentFlag: [
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
      checkTab(key) {
        commonTab(key,this.currentFlag)
      },
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
                        radius: ['50%', '30%'],
                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        }
                    },
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '80%'],
                        data:[
                            {value:335, name:'直达'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1048, name:'百度'},
                            {value:251, name:'谷歌'},
                            {value:147, name:'必应'},
                            {value:102, name:'其他'}
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
      footerBar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tradelayout {
    width: 100%;
    top: 27vw;
    position: absolute;
}
.projd {
    width: 90%;
    margin: 0 auto;
    font-size: 4.2vw;
}
#main {
    width: 80vw;
    height:53.33vw;
    margin: 0 auto;
    padding: 1vw 0;
}
.statusWapper {
    width: 90%;
    margin: 2vw auto;
    /* position: absolute; */ 
}
.statusbtn {
    width: 90%;
    font-size: 2.66vw;
    color: #aaa;
    text-align: left;
    padding: 1vw 0;
}
.selectstatus {
    width: 100%;
    overflow: hidden;
    padding-bottom: 1vw;
}
.selectstatus span {
    float: left;
    width: 28%;
    border: 1px solid rgb(0, 115, 209);
    padding: 1.5vw 0;
    text-align: center;
    box-sizing: border-box;
    margin-right: 7%;
    border-radius: 1.5vw;
    font-size: 3.2vw;
    color:rgb(0, 115, 209)
}
.selectstatus span:last-child {
    margin-right: 0;
}
.selectstatus .current {
    background: rgb(0, 115, 209);
    color: #ffffff;
}
.prozb {
    width: 70%;
    margin: 10vw auto 0;
    text-align: center
}
.probl  {
    width: 100%;
    padding: 2vw 0;
    display: flex;
}
.probl span {
    flex: 1;
    font-size: 3.2vw;
    vertical-align: -webkit-baseline-middle;
}
.probl .zt {
    display: inline-block;
    width: 3vw;
    height: 3vw;
    border-radius: .3vw;
    background: rebeccapurple;
}
</style>
