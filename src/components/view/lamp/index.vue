<template>
  <div>
    <toptitle toptitle="红绿黄灯" pathkeys="team"></toptitle>
    <tabbar tabs="1"></tabbar>
    <div class="lamp">
      <div class="selectLamp">
        <div class="lampWapper">
          <span>请选择红黄绿灯</span>
          <ul class="lampBox">
            <li @click="setLamp('red')">
              <span class="rigthIcon">></span>
              <div>
                <span class="red" :style="{'background':'red'}"></span>
                <span>红灯项目</span>
              </div>
              <div>
                <span>占比50%</span>
              </div>
              <div>
                <span>总额300</span>
              </div>
            </li>
            <li @click="setLamp('blue')">
              <span class="rigthIcon">></span>
              <div>
                <span class="red" :style="{'background':'blue'}"></span>
                <span>绿灯项目</span>
              </div>
              <div>
                <span>占比50%</span>
              </div>
              <div>
                <span>总额300</span>
              </div>
            </li>
            <li @click="setLamp('yellow')">
              <span class="rigthIcon">></span>
              <div>
                <span class="red" :style="{'background':'yellow'}"></span>
                <span>黄灯项目</span>
              </div>
              <div>
                <span>占比50%</span>
              </div>
              <div>
                <span>总额300</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <currlamp :setcolor="setcolor" :setLampName="setLampName"></currlamp>
      <div class="cityProject">
          <div class="prolist" v-show="proFlag">
              <ul>
                  <li v-for="(i,index) in 8" :key="index" :style="{'float':i%2 !== 0?'right':'left'}" @click="getPro">
                      <!-- <img src="../images/prodata.png" alt=""> -->
                      <div>
                          <span>团队名称</span>
                          <span>
                            <span class="jindu"></span>
                            <span class="jincount">30%</span>
                          </span>
                          <span>红灯项目数量20 ></span>
                      </div>
                  </li>
              </ul>
          </div>
          <proList v-show="!proFlag"></proList>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import toptitle from '../../commonview/toptitle'
import tabbar from '../../commonview/tabbar'
import proList from '../../commonview/proList'
import currlamp from './currlamp'
export default {

    data() {
        return {
          proFlag: true,
          setcolor: 'red',
          setLampName: '红灯'
        }
    },
    methods: {
      ...mapActions([
          'setPathKey'
      ]),
      getPro() {
        this.proFlag = false
      },
      setLamp(item) {
        switch (item) {
          case 'red':
            this.setcolor = 'red'
            this.setLampName = '红灯'
            break
          case 'blue':
            this.setcolor = 'blue'
            this.setLampName = '绿灯'
            break
          case 'yellow':
            this.setcolor = 'yellow'
            this.setLampName = '黄灯'
            break
        }
      }
    },
    created() {
        this.setPathKey(3)
    },
    components: {
      toptitle,
      tabbar,
      currlamp,
      proList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lamp {
    width: 100%;
    top: 27vw;
    position: absolute;
}
.selectLamp {
  width: 100%;
  padding: 2vw 0;
  margin: 0 auto;
  color: #ffffff;
  background: #000;
}
.lampWapper {
  width: 90%;
  margin: 0 auto;
}
.lampWapper span {
  font-size: 3.6vw;
}
.lampBox {
  width: 100%;
  overflow: hidden;
  margin-top: 1vw;
}
.lampBox li {
    float: left;
    width: 28%;
    border: 1px solid rgb(55, 57, 58);
    padding: 1.5vw 0;
    text-align: center;
    box-sizing: border-box;
    margin-right: 7%;
    font-size: 3vw;
    color: #ffffff;
    position: relative;
}

.lampBox li:last-child {
    margin-right: 0;
}
.lampBox li .red {
  width: 3vw;
  height: 3vw;
  display: inline-block;
  background: red;
  border-radius: 50%;
  margin-left: -3vw;
}
.lampBox  .rigthIcon {
    position: absolute;
    right: 1vw;
    top: 50%;
    transform: translateY(-50%)
}
.cityProject {
    overflow: hidden;
    width: 90%;
    margin: 0 auto;
    margin-top: 9vw
}
.proname {
    font-size: 4vw;
}
.prolen {
    font-size: 3.2vw;
    color: #aaa;
}
.prolist {
    width: 100%;
}
.prolist li {
    width: 45%;
    background:#eee;
    padding: 2vw;
    margin-bottom: 2vw;
    box-sizing: border-box;
}
.prolist li img {
    width: 10.13vw;
    height: 10.13vw;
    vertical-align: bottom;
}
.prolist li div {
    font-size: 3vw;
    display: inline-block
}
.prolist li div span{
    font-size: 3vw;
    display: block;
    color: #555;
}
.prolist li div .jindu {
  display: inline-block;
  width: 25vw;
  height: 4vw;
  background: red;
}
.prolist li div .jincount {
  display: inline-block
}
</style>
