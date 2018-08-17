<template>
  <div class="allimgWapper">
    <toptitle toptitle="全球版图" pathkeys="battleEl"></toptitle>
    <tabbar></tabbar>
    <currcity :city="city"></currcity>
    <guoji v-if="flagVal" @add="addFood"></guoji>
    <guonei v-if="!flagVal" @add="addFood"></guonei>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import toptitle from '../../commonview/toptitle'
import tabbar from '../../commonview/tabbar'
import guonei from './guonei'
import guoji from './guoji'
import currcity from './currcity'
// import { commonTab } from '../../js/tab'
export default {
    name: "echarts",
    data() {
        return {
            city: ''
        }
    },
    computed: {
        ...mapGetters([
            'flagVal'
        ])
    },
    created() {
        this.setPathKey(0)
        this.setFlag(false)
    },
    methods: {
        ...mapActions([
            'setFlag',
            'setPathKey'
        ]),
        addFood(key) {
            if (key) {
               this.city =  key
            }
        }
    },
    components: {
      toptitle,
      tabbar,
      guonei,
      guoji,
      currcity
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    width: 100%;
    height: 80vw;
    top: 38vw;
    position: absolute;
}
.currCity {
    width: 100%;
    position: absolute;
    top: 30vw;
    padding-right: 5%;
    box-sizing: border-box;
}
.guoTab {
    float: right;
    border: 1px solid blue;
    border-radius: 1vw;
}
.guoTab span {
    padding: 1vw;
    font-size: 2.88vw;
    color: blue;
    display: inline-block;
}
.guoTab span.currgj,.guoTab span.currgn {
    background: blue;
    color: #ffffff;
}

</style>
