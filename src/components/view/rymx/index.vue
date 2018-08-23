<template>
  <div class="wrapper">
    <header>
        <span @click="goBack">&lt;</span>
        <span>人员明细</span>
    </header>
    <div class='one'>
        <div class="menuWrapper" ref="menuWrapper">
          <ul>
              <li v-for="(item,index) in 30" :key="index" class="food-list-hook" @click="selectMenu(index)">
                <div class="ctop">
                    <span class="ctopTou">
                        <img src="../../images/tou.png" alt="">
                    </span>
                    <span class="ctopjs">
                        <span>姓名</span>
                        <span>项目名称</span>
                    </span>
                </div>
                <div class="cbottom">
                    <span class="c1">
                        <span class="cf">出发</span>
                        <span>2018-07.01</span>
                        <span>上海</span>
                    </span>
                    <span class="c2">
                        <span class="dd">到达</span>
                        <span>2018-07.01</span>
                        <span>北京</span>
                    </span>
                </div>
              </li>
          </ul>
        </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import footerBar from '../../commonview/footerBar'
export default{
    created() {
        this.$nextTick(() => {
          this._initScroll();
        })
    },
    methods: {
       _initScroll() {
            this.meunScroll = new BScroll(this.$refs.menuWrapper, {
                click: true,
                probeType: 3
            })
        },
        goBack() {
            this.$router.go(-1)
        } 
    },
    components: {
        footerBar
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
    background: #eeeeee;
    height: 100%;
}
.one {
  width: 90%;
  position:absolute;
  top: 10vw;
  left: 5%;
  bottom: 0;
  overflow: hidden;
}
header {
    width: 90%;
    margin: 0 auto;
    font-size: 4.5vw;
    padding: 2vw 0;
}
.menuWrapper {
  width: 100%;
  height: 100%;
}
.one li {
  width: 100%;
  background: #ffffff;
  margin-bottom:5vw;
  padding: 2vw;
}
.one li .ctop {
    padding: 0 0 2vw 0;
    border-bottom: 1px solid #ccc;
}

.one li .ctop .ctopTou {
    width: 11vw;
    height: 11vw;
    background: #ccc;
    display: inline-block;
}
.one li .ctop .ctopTou img{
    display: block;
    width: 100%;
    height: 100%;
}
.one li .ctop .ctopjs {
    display: inline-block;
    vertical-align: super;
    font-size: 3.4vw;
    line-height: 5.5vw;
    padding-left: 2vw;
}
.one li .ctop .ctopjs span{
    display: block;
}
.one li .cbottom {
    padding-top: 2vw;
    overflow: hidden;
    font-size: 3.6vw;
    /* padding: 2vw 0 0 0; */
}
.one li .cbottom .c1 {
    float: left;
} 
.one li .cbottom .c2 {
    float: right;
    padding-right: 5vw;
}
.one li .cbottom .cf {
    padding: .5vw 2vw;
    background: rgb(6, 233, 55);
    border-radius: 1vw;
} 
.one li .cbottom .dd {
    padding: .5vw 2vw;
    background: rgb(233, 6, 6);
    border-radius: 1vw;
} 
</style>

