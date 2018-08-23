<template>
  <div>
    <toptitle toptitle="战略标签" pathkeys="tradelayout"></toptitle>
    <tabbar tabs="1"></tabbar>
    <div class="battleEl">
      <div class="proWapper">
        <div class="pornum">
          <span>项目数量</span>
          <div class="proicon proicon1">
            <span>独角兽</span>
            <span>￥1000万</span>
            <span>(20)</span>
          </div>
          <div class="proicon proicon2">
            <span>健康</span>
            <span>￥1000万</span>
            <span>(20)</span>
          </div>
          <div class="proicon proicon3">
            <span>快乐</span>
            <span>￥1000万</span>
            <span>(20)</span>
          </div>
          <div class="proicon proicon4">
            <span>富足</span>
            <span>￥1000万</span>
            <span>(20)</span>
          </div>
          <div class="proicon proicon5">
            <span>配置</span>
            <span>￥1000万</span>
            <span>(5)</span>
          </div>
          <div class="proicon proicon6">
            <span>C2M</span>
            <span>￥1000万</span>
            <span>(5)</span>
          </div>
          <div class="proicon proicon7">
            <span>大项目</span>
            <span>￥1000万</span>
            <span>(10)</span>
          </div>
          <div class="proicon proicon8">
            <span>资管平台</span>
            <span>￥1000万</span>
            <span>(10)</span>
          </div>
          <div class="proicon proicon9">
            <span>产业补强</span>
            <span>￥1000万</span>
            <span>(20)</span>
          </div>
        </div>

        <div class="pormes">
          <span>项目信息<span class="mes" :style="{'font-size':'2.66vw','color':'#999'}">(根据项目数量由大到小排序)</span></span>
          <ul class="protab">
              <li>标签</li>
              <li>已读</li>
              <li>过会</li>
              <li>过会前</li>
          </ul>
          <div class="mesWapper">
              <ul>
                <li>
                  <span class="mesbgc">独角兽</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                </li>
                <li>
                  <span class="mesbgc">健康</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                </li>                  
                <li>
                  <span class="mesbgc">快乐</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                </li>
                <li>
                  <span class="mesbgc">富足</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                </li>
                <li>
                  <span class="mesbgc">配置</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                </li>
                <li>
                  <span class="mesbgc">C2M</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                </li>
                <li>
                  <span class="mesbgc">大项目</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                </li>
                <li>
                  <span class="mesbgc">资管平台</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                </li>
                <li>
                  <span class="mesbgc">产业补强</span>
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import toptitle from '../../commonview/toptitle'
import tabbar from '../../commonview/tabbar'
import footerBar from '../../commonview/footerBar'
export default {

    data() {
        return {

        }
    },
    methods: {
      ...mapActions([
          'setPathKey'
      ]),
    },
    created() {
        this.setPathKey(1)
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
.battleEl {
    width: 100%;
    top: 27vw;
    position: absolute;
    background:linear-gradient(top, #ccc, #fff);
    /* background: #ccc; */
}
.battleEl .proWapper {
  padding: 3vw 0;
}
.pornum,.pormes {
  width: 90%;
  margin: 0 auto;
  padding: 2vw 0;
}
.proicon {
  width: 20vw;
  height: 16vw;
  background:rgba(8, 102, 196, 0.5);
  border-radius: 50%;
  font-size: 2.66vw;
  text-align: center;
  padding-top: 4vw;
  color: #fff;

  /* position: absolute; */
}
.proicon span {
  vertical-align: middle;
  display: block;
}
.proicon1 {
  margin: 2vw;
}
.proicon2 {
  margin: -22vw 0 -2vw 28vw;
}
.proicon3 {
  margin: -20vw 0 -2vw 55vw;
}
.proicon4 {
  margin: 5vw 0 -2vw 10vw;
}
.proicon5 {
  margin: -20vw 0 -2vw 35vw;
}
.proicon6 {
  margin: -20vw 0 -2vw 63vw;
}
.proicon7 {
  margin: 6vw 0 -2vw 2vw;
}
.proicon8 {
  margin: -19vw 0 -2vw 30vw;
}
.proicon9 {
  margin: -20vw 0 -2vw 60vw;
}

.protab {
  width: 100%;
  margin: 0 auto;
  display: flex;
  background: #000;
  color: #fff;
  border-radius: 1vw;
  margin-top: 1vw;
}
.protab li {
  flex: 1;
  text-align: center;
  padding: 1vw 0;
  font-size: 3.2vw;
}
.mesWapper {
  /* display: flex; */
  margin-top: 2vw;
}
.mesWapper ul {
  /* flex: 1; */
  /* background: cadetblue; */
  border-radius: 1vw;
}
.mesWapper ul li {
  font-size: 3.5vw;
  text-align: center;
  display: flex;
}
.mesWapper ul li span {
  flex: 1;
  padding: 1.5vw 0;
  background: #ccc;
  color: cadetblue;
}
.mesWapper ul li .mesbgc {
  background: #000;
  color: #fff;
}
</style>
