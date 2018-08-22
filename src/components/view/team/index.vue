<template>
  <div>
    <toptitle toptitle="团队贡献" pathkeys=""></toptitle>
    <tabbar tabs="1"></tabbar>
    <div class="teamWapper">
        <selecttype typeName="团队类型" :optiontype="teamtypedata" :currentFlag="teamTypeFlag"></selecttype>
        <selecttype typeName="选择编码" :optiontype="ucodetypedata" :currentFlag="ucodeFlag"></selecttype>
        <div class="Profit">
            <span class="floatProfit1">收益类</span>
            <span class="floatProfit2">
                <span class="rigthIcon"></span><span style="vertical-align: sub;">人均收益</span>
            </span>
            <span class="floatProfit3">
                <span class="leftIcon"></span><span> 总收益</span>
            </span>
        </div>
        <teamdata></teamdata>
        <teamdata1></teamdata1>
        <div class="topName">
            <div>综合排名</div>
            <div class="topBox">
                <ul class="topUl">
                    <li class="currborderx">
                        <span class="topicon currtop">1</span>
                        <span>团队名称</span>
                        <span class="topCount">100</span>
                    </li>
                    <li>
                        <span class="topicon currtop">1</span>
                        <span>团队名称</span>
                        <span class="topCount">100</span>
                    </li>
                    <li>
                        <span class="topicon currtop">1</span>
                        <span>团队名称</span>
                        <span class="topCount">100</span>
                    </li>
                    <li>
                        <span class="topicon">1</span>
                        <span>团队名称</span>
                        <span class="topCount">100</span>
                    </li>
                    <li>
                        <span class="topicon">1</span>
                        <span>团队名称</span>
                        <span class="topCount">100</span>
                    </li>
                </ul>
                <ul class="topUl">
                    <li class="currborderx">
                        <span class="topicon">1</span>
                        <span>团队名称</span>
                        <span class="topCount">100</span>
                    </li>
                    <li>
                        <span class="topicon">1</span>
                        <span>团队名称</span>
                        <span class="topCount">100</span>
                    </li>
                    <li>
                        <span class="topicon">1</span>
                        <span>团队名称</span>
                        <span class="topCount">100</span>
                    </li>
                    <li>
                        <span class="topicon">1</span>
                        <span>团队名称</span>
                        <span class="topCount">100</span>
                    </li>
                    <li>
                        <span class="topicon">1</span>
                        <span>团队名称</span>
                        <span class="topCount">100</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { commonTab } from '../../js/tab'
import toptitle from '../../commonview/toptitle'
import tabbar from '../../commonview/tabbar'
import selecttype from '../../commonview/selectType'
import teamdata from './teamdata'
import teamdata1 from './teamdata1'
export default {
    data() {
        return {
            teamtypedata: [
               '收益类',
               '投资类'
            ],
            ucodetypedata: [
               '1-10',
               '11-20',
               '21-30',
               '31-40',
               '41-50'
           ],
           ucodeFlag: [
                {
                    flag: true
                },
                {
                    flag: false
                },
                {
                    flag: false
                },
                {
                    flag: false
                },
                {
                    flag: false
                }
           ],
           teamTypeFlag: [
                {
                    flag: true
                },
                {
                    flag: false
                }   
           ]
        }
    },
    methods: {
      ...mapActions([
          'setPathKey'
      ]),
      checkTab(key) {
        commonTab(key,this.currentFlag)
      }
    },
    created() {
        this.setPathKey(4) 
    },
    components: {
      toptitle,
      tabbar,
      selecttype,
      teamdata,
      teamdata1
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.teamWapper {
    width: 100%;
    top: 27vw;
    position: absolute;
}
.Profit {
    width: 90%;
    margin: 0 auto;
    padding-top: 5vw;
    font-size: 3.6vw;
    overflow: hidden;
    /* margin-top: -1vw; */
    position: relative;
    top: 5vw;
}
.floatProfit1 {
    float: left;
}
.floatProfit2,.floatProfit3 {
    float: right;
    margin-right: 3vw;
}

.leftIcon {
    width: 10vw;
    height: 3vw;
    display: inline-block;
    background: rgb(0, 115, 209);
    vertical-align: middle;
}

.rigthIcon {
    width: 3vw;
    height: 3vw;
    display: inline-block;
    border-radius: 50%;
    border:.2vw solid rgb(0, 115, 209);
    vertical-align: middle;
}
.topName {
    width: 90%;
    margin: 0 auto;
}
.topBox {
    width: 100%;
}
.topUl {
    width: 50%;
    overflow: hidden;
    margin-top: 2vw;
    float: left;
}
.topUl li {
    width: 100%;
    padding: 2vw 1vw;
    border-bottom: 1px solid #aaa;
    border-right: 1px solid #aaa;
    border-left: 1px solid #aaa;
    font-size: 3vw;
    overflow: hidden;
    text-align: center;
    box-sizing: border-box;
}
.topUl li:first-child {
    border-top: 1px solid #aaa;
}

/* .topUl .currborderx {
    border-top: 1px solid red;
}
.topUl .currbordery {
    border-right: 1px solid red;
} */
.topUl li span {
    display: inline-block;

}
.topicon {
    width: 5vw;
    height: 5vw;
    line-height: 5vw;
    text-align: center;
    background: #ccc;
    border-radius: 50%;
    float: left;
}
.topCount {
    float: right;
}
.topUl li .currtop {
    background: rgb(9, 80, 128);
    color: antiquewhite;
}
</style>
