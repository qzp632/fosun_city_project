<template>
    <div>
        <div class="headerBox">
            <h1>智造植树中国的</h1>
            <h1>全球幸福生态系统</h1>
        </div>
        <div class="operateWapper">
            <h3>产品运营</h3>
            <div class="topIcon">
                <div class="iconBox">
                    <span class="imgs">
                        <img src="../../images/tabs2.png" alt="">
                    </span>
                    <span class="ywname">业务规模</span>
                    <span class="ms">收入</span>
                </div>
                <div class="iconBox">
                    <span class="imgs">
                        <img src="../../images/tabs3.png" alt="">
                    </span>
                    <span class="ywname">业务能力</span>
                    <span class="ms">利润</span>
                </div>
            </div>
            <div class="bottomIcon">
                <div class="iconBox">
                    <span class="imgs">
                        <img src="../../images/tabs4.png" alt="">
                    </span>
                    <span class="ywname">可持续力</span>
                    <span class="ms">资产</span>
                </div>
                <div class="iconBox">
                    <span class="imgs">
                        <img src="../../images/tabs5.png" alt="">
                    </span>
                    <span class="ywname">企业成长</span>
                    <span class="ms">员工数量</span>
                </div>
            </div>
        </div>
        <div class="fooBox">
            <img src="../../images/zsr.png" alt="">
            <span>收入100亿</span>
        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>
import footerBar from '../../commonview/footerBar'
export default {
    components: {
        footerBar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerBox {
    padding: 10vw 7vw;
    background: #333;
    color: #ffffff;
}
.headerBox h1 {
    font-weight: 200;
    font-size: 7vw;
}
.operateWapper {
    width: 80%;
    margin: 0 auto;
}
.operateWapper h3 {
    text-align: center;
    padding: 2vw 0;
}
.operateWapper .topIcon,.operateWapper .bottomIcon {
    width: 100%;
    overflow: hidden;
}
.operateWapper .topIcon .iconBox,.operateWapper .bottomIcon .iconBox {
    width: 50%;
    float: left;
    text-align: center;
    margin-top: 5vw;
}
.operateWapper .topIcon .iconBox .imgs,.operateWapper .bottomIcon .iconBox .imgs{
    padding: 4vw;
    display:inline-block;
    width: 10vw;
    height: 10vw;
    border: 1px solid #ccc;
    border-radius: 50%;
    box-shadow: 0 0 1vw #888888;
    
}
.operateWapper .topIcon .iconBox img,.operateWapper .bottomIcon .iconBox img{
    width: 9.33vw;
    height: 9.33vw;
}
.operateWapper .topIcon .iconBox .ywname,.operateWapper .bottomIcon .iconBox .ywname{
    display: block;
    font-size: 4vw;
    padding: 1vw 0;
}
.operateWapper .topIcon .iconBox .ms,.operateWapper .bottomIcon .iconBox .ms{
    display: block;
    font-size: 3vw;
    color: cadetblue;
}
.fooBox {
    width: 80%;
    margin: 0 auto;
    background: #000;
    margin-top: 10vw;
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
</style>
