<template>
  <div class="tabWapper">
      <div class="tabbar">
          <div class="tabox" :class="{'current':currentFlag[0].flag}" @click="checkTab(0)">
              <span class="toplink">
                  <img v-if="tabs==='1'" src="../images/tab1.png" alt="">
                  <img v-if="tabs==='2'" src="../images/tabs1.png" alt="">
              </span>
              <span class="bottomlink">{{tabs==='1'?'全球版图':'管理架构'}}</span>
          </div>
          <div class="tabox" :class="{'current':currentFlag[1].flag}" @click="checkTab(1)">
              <span class="toplink">
                  <img v-if="tabs==='1'" src="../images/tab2.png" alt="">
                  <img v-if="tabs==='2'" src="../images/tabs2.png" alt="">
              </span>
              <span class="bottomlink">{{tabs==='1'?'战略标签':'业务规模'}}</span>
          </div>
          <div class="tabox" :class="{'current':currentFlag[2].flag}" @click="checkTab(2)">
              <span class="toplink">
                  <img v-if="tabs==='1'" src="../images/tab3.png" alt="">
                  <img v-if="tabs==='2'" src="../images/tabs3.png" alt="">
              </span>
              <span class="bottomlink">{{tabs==='1'?'行业布局':'业务能力'}}</span>
          </div>
          <div class="tabox" :class="{'current':currentFlag[3].flag}" @click="checkTab(3)">
              <span class="toplink">
                  <img v-if="tabs==='1'" src="../images/tab4.png" alt="">
                  <img v-if="tabs==='2'" src="../images/tabs4.png" alt="">
              </span>
              <span class="bottomlink">{{tabs==='1'?'红绿黄灯':'可持续力'}}</span>
          </div>
          <div class="tabox" :class="{'current':currentFlag[4].flag}" @click="checkTab(4)">
              <span class="toplink">
                  <img v-if="tabs==='1'" src="../images/tab5.png" alt="">
                  <img v-if="tabs==='2'" src="../images/tabs5.png" alt="">
              </span>
              <span class="bottomlink">{{tabs==='1'?'团队贡献':'企业成长'}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { commonTab } from '../js/tab'
export default {
    props: {
        tabs: {
            type: String
        }
    },
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
    computed: {
        ...mapGetters([
            'pathkey'
        ])
    },
    created() {
        this.checkTab(this.pathkey)
    },
    methods: {
        checkTab(key) {
            commonTab(key,this.currentFlag)
            this.tabCheck(key)
        },
        tabCheck(key) {
            switch (key) {
                case 0:
                    if (this.tabs === '1') {
                        this.$router.push(`/allImg`)
                    } else {
                        this.$router.push(`/adminWork`)
                    }
                    break
                case 1:
                    if (this.tabs === '1') {
                        this.$router.push(`/battleEl`)
                    } else {
                        this.$router.push(`/bscale`)
                    }
                    break
                case 2:
                    if (this.tabs === '1') {
                        this.$router.push(`/tradelayout`)
                    } else {
                        this.$router.push(`/capability`)
                    }
                    break
                case 3:
                    if (this.tabs === '1') {
                        this.$router.push(`/lamp`)
                    } else {
                        this.$router.push(`/continued`)
                    }
                    break
                case 4:
                    if (this.tabs === '1') {
                        this.$router.push(`/team`)
                    } else {
                        this.$router.push(`/growUp`)
                    }
                    break
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabbar {
    position: fixed;
    display: flex;
    top: 10.66vw;
    width: 100%;
    height: 16.5vw;
    background: #ffffff;
    font-size: 3vw;
    border-bottom: 1px solid #eee;
    z-index: 8888;
}
.tabox {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1.5vw 0;
    /* text-align: center;
    line-height: 15vw; */
}
span {
    flex: 1;
    text-align: center;
}
img {
    width: 8.53vw;
    height: 8.53vw;
}
.current {
    background: #ccc;
}
/* .toplink {
    height: 8.53vw;
}
.bottomlink {
    height: 5vw;
} */
</style>
