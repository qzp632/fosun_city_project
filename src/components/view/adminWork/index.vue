<template>
    <div>
        <toptitle toptitle="管理架构" pathkeys="bscale"></toptitle>
        <tabbar tabs="2"></tabbar>
        <div class="gljgbox">
            <div class="topcon">
                <span class="boss">Boss</span>
                <span class="num">数量100</span>
            </div>
            <div class="yline"></div>
            <div class="box">
                <div class="cline"></div>
            </div>
            <div class="leftbox">
                <span class="boss">健康</span>
                <span class="num">数量100</span>
            </div>
            <div class="centerbox">
                <span class="boss">富足</span>
                <span class="num">数量50</span>
            </div>
            <div class="rightbox">
                <span class="boss">快乐</span>
                <span class="num">数量100</span>
            </div>
            <div class="yline cyline"></div>
            <div class="box cbox">
                <div class="cline"></div>
            </div>
            <div class="leftbox1">
                <span class="boss">投资</span>
                <span class="num num1">(200)</span>
            </div>
            <div class="centerbox1">
                <span class="boss">保险及金融</span>
                <span class="num num1">(50)</span>
            </div>
            <div class="rightbox1">
                <span class="boss">蜂巢地产</span>
                <span class="num num1">(50)</span>
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
import footerBar from '../../commonview/footerBar'
export default {
    methods: {
        ...mapActions([
            'setPathKey'
        ])
    },
    created() {
        this.setPathKey(0)
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
.gljgbox {
    width: 100%;
    position: absolute;
    top:27vw;
}
.topcon {
    width: 34%;
    padding: 2vw;
    text-align: center;
    background: linear-gradient(to right, rgb(235, 151, 151) , rgb(196, 24, 24)); /* 标准的语法 */
    margin-left: 33%;
    margin-top: 15vw;
    color: #ffffff;
    border-radius: 1vw;
}
.boss {
    font-size: 3.6vw;
    display: block
}
.num {
    display: block;
    font-size: 3vw;
}
.yline {
    width: 1px;
    height: 10vw;
    border-left: 1px solid #ccc;
    position: absolute;
    left: 52%;
}
.box {
    width: 60%;
    height: 14vw;
    margin: 0 auto;
    margin-left: 21%;
    margin-top: 10vw;
    border: 1px solid #ccc;
    border-bottom: none;
    position: relative;
}
.box .cline {
    width: 1px;
    height: 14vw;
    border-left: 1px solid #ccc;
    position: absolute;
    left: 51%;
}
.leftbox {
    width: 20vw;
    padding: 2vw 3vw;
    text-align: center;
    background: linear-gradient(to right, rgb(128, 168, 190) , rgb(61, 124, 197)); /* 标准的语法 */
    color: #ffffff;
    border-radius: 1vw;
    position: absolute;
    left: 8vw;
}
.centerbox {
    width: 20vw;
    padding: 2vw 3vw;
    text-align: center;
    background: linear-gradient(to right, rgb(109, 236, 253) , rgb(6, 224, 231)); /* 标准的语法 */
    color: #ffffff;
    border-radius: 1vw;
    position: absolute;
    left: 38vw;
}
.rightbox {
    width: 20vw;
    padding: 2vw 3vw;
    text-align: center;
    background: linear-gradient(to right, rgb(195, 204, 64) , rgb(218, 241, 8)); /* 标准的语法 */
    color: #ffffff;
    border-radius: 1vw;
    position: absolute;
    left: 68vw;
}
.cyline {
    top: 65vw;
    height: 13vw;
}
.cbox {
    height: 12vw;
    top: 13vw;
    width: 48%;
    margin-left: 27.3%;
}
.cbox .cline {
    height: 12vw;
}
.leftbox1 {
    text-align: center;
    position: absolute;
    left: 23vw;
    top: 86vw
}
.centerbox1 {
    text-align: center;
    position: absolute;
    left: 43vw;
    top: 86vw
}
.rightbox1 {
    text-align: center;
    position: absolute;
    left: 68vw;
    top: 86vw
}
.num1 {
    color: aqua;
}
</style>
