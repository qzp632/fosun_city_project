<template>
  <div class="wrapper">
    <header>
        <span @click="goBack">&lt;</span>
        <span>项目数据</span>
    </header>
    <div class='one'>
        <div class="menuWrapper" ref="menuWrapper">
          <ul>
              <li v-for="(item,index) in 30" :key="index" class="food-list-hook" @click="selectMenu(index)">
                <div class="ctop">
                    <div class="ctopTou">
                        <img src="../../images/prodata.png" alt="">
                    </div>
                    <div class="ctopjs">
                        <span class="cts">
                            <span class="ctname">名称</span>
                            <span class="ctstatus">状态</span>
                        </span>
                        <span class="cts">团队</span>
                    </div>
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
@import '../../font/style.css'; 
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
  margin-bottom:3vw;
  padding: 2vw;
}

.one li .ctop .ctopTou {
    width: 11vw;
    height: 11vw;
    background: #ccc;
    float: left;
    margin-right: 2vw;
    /* display: inline-block; */
}


.one li .ctop .ctopTou img{
    display: block;
    width: 100%;
    height: 100%;
}
.one li .ctop .ctopjs {
    /* display: inline-block; */
    /* vertical-align: super; */
    font-size: 3.4vw;
    line-height: 5.5vw;
    /* padding-left: 4vw; */
}
.one li .ctop .ctopjs .cts{
    display: block;
    width: 100%;
}
.one li .ctop .ctopjs .cts .ctstatus {
    float: right;
    padding-right: 10vw;
}

</style>

