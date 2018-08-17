<template>
  <div class="allimgWapper">
    <div class="currCity">
        <span>当前选择</span>
        <span>{{gname}}</span>
        <span>{{city}}</span>
        <span :style="{'font-size':'2.88vw','color':'#ccc'}">(地区分布图可点击)</span>
        <div class="guoTab">
            <span class="gj" :class="{currgj:gcurrent}" @click="setGuo(1)">国际</span><span class="gn" :class="{currgn:!gcurrent}" @click="setGuo(2)">国内</span>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "echarts",
    props: {
        city: {
            type: String
        }
    },
    data() {
        return {
            gname: '国内',
            gcurrent: false
        }
    },
    methods: {
        ...mapActions([
            'setFlag'
        ]),
        setGuo(key) {
            if (key === 1) {
                this.gcurrent = true
                this.setFlag(this.gcurrent)
                // this.$emit('setFlag', this.gcurrent);
                this.gname = '国际'
            } else {
                this.gcurrent = false
                this.setFlag(this.gcurrent)
                // this.$emit('setFlag', this.gcurrent);
                this.gname = '国内'
            }
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.currCity {
    width: 90%;
    position: absolute;
    top: 30vw;
    left: 5%;
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
