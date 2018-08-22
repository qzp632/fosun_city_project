<template>
  <div class="allimgWapper">
    <div class="currCity">
        <span>当前选择</span>
        <span>{{setLampName}}</span>
        <!-- <span>{{city}}</span> -->
        <span :style="{'font-size':'2.88vw','color':'#ccc'}">(根据数量由大到小排序)</span>
        <span class="ril">红灯总量所占比</span>
        <span class="ril cor" :style="{'background':setcolor}"></span>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
    props: {
        setcolor: {
            type: String
        },
        setLampName: {
            type: String
        }
    },
    created() {
        // alert(this.setLampName)
    },
    methods: {

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
    font-size: 3.3vw;
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
.ril {
    float:right;
}
.cor {
    width: 6vw;
    height: 3vw;
    background: red;
    /* display: inline-block; */
    margin-top: .8vw;
    margin-right: 1vw;
}
</style>
