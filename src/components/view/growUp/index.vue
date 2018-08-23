<template>
    <div>
        <toptitle toptitle="企业成长" pathkeys=""></toptitle>
        <tabbar tabs="2"></tabbar>
        <div class="ywgmbox">
            <div class="fooBox">
                <img src="../../images/zsr.png" altms="">
                <span>员工总人数 18万</span>
            </div>
            <div class="countWapper">
                <span class="ms">板块/万元</span>
                <div>
                    <div class="imsbox">
                        <span class="text">健康</span>
                        <span class="ims ims1"></span>
                        <span class="rs">
                            <span class="ion"></span>
                            <span>健康</span>
                            <span>275万</span>
                        </span>
                    </div>
                    <div class="imsbox">
                        <span class="text">快乐</span>
                        <span class="ims ims2"></span>
                        <span class="rs">
                            <span class="ion ion2"></span>
                            <span>快乐</span>
                            <span>400万</span>
                        </span>
                    </div>
                    <div class="imsbox">
                        <span class="text">富足</span>
                        <span class="ims ims3"></span>
                        <span class="rs">
                            <span class="ion ion3"></span>
                            <span>富足</span>
                            <span>310万</span>
                        </span>
                    </div>
                </div>
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
import proList from '../../commonview/proList'
import footerBar from '../../commonview/footerBar'
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
    methods: {
        ...mapActions([
            'setPathKey'
        ]),
    },
    created() {
        this.setPathKey(4)
    },
    components: {
        toptitle,
        tabbar,
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
.countWapper {
    width: 90%;
    margin: 0 auto;
}
.countWapper .imsbox {
    margin-top: 2vw;
}
.countWapper .imsbox .rs{
    float: right;
    font-size: 3vw;
}
.countWapper .imsbox .rs .ion{
    display: inline-block;
    width: 3vw;
    height: 3vw;
    border-radius: 1vw;
    background: blue;
}
.countWapper .imsbox .rs .ion2{
    background: red;
}
.countWapper .imsbox .rs .ion3{
    background: yellow;
}
.countWapper .ms {
    font-size: 2.66vw;
    /* margin-bottom: 1vw; */
    display: block;
    padding: 1vw 
}
.countWapper .text {
    font-size: 3.6vw;
}
.countWapper .ims {
    display: inline-block;
    width: 22vw;
    height: 5vw;
    background:blue;
    vertical-align: middle;
}
.countWapper .ims2 {
    width: 45vw;
    background:red;
}
.countWapper .ims3 {
    width: 38vw;
    background:yellow;
}
.qybox {
    width: 90%;
    margin: 0 auto;
}
.qybox .qyName {
    padding: 2vw  0;
}
</style>
