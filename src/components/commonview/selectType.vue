<template>

        <div class="statusWapper">
            <div class="statusbtn">{{typeName}}</div>
            <div class="selectstatus">
                <span v-for="(item, index) in optiontype"  :class="{'current':currentFlag[index].flag}" :key="index" @click="checkTab(index)">{{item}}</span>
                <!-- <span :class="{'current':currentFlag[1].flag}" @click="checkTab(1)">过会</span>
                <span :class="{'current':currentFlag[2].flag}" @click="checkTab(2)">过会前</span> -->
            </div>
        </div>
</template>

<script>
import { commonTab } from '../js/tab'

export default {
    props: {
        typeName: {
            type: String
        },
        optiontype: {
            type: Array
        },
        currentFlag: {
            type: Array
        }
    },
    methods: {
      checkTab(key) {
        commonTab(key,this.currentFlag)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.statusWapper {
    width: 90%;
    margin: 1vw auto 0;
    /* position: absolute; */ 
}
.statusbtn {
    width: 90%;
    font-size: 2.66vw;
    color: #aaa;
    text-align: left;
    padding: 1vw 0 0;
}
.selectstatus {
    width: 100%;
    overflow: hidden;
    padding-bottom: 1vw;
}
.selectstatus span {
    float: left;
    width: 26%;
    border: 1px solid rgb(0, 115, 209);
    padding: 1.5vw 0;
    text-align: center;
    box-sizing: border-box;
    margin-right: 7%;
    border-radius: 1.5vw;
    font-size: 3.2vw;
    color:rgb(0, 115, 209);
    margin-top: 2vw;
}
.selectstatus span:last-child {
    margin-right: 0;
}
.selectstatus .current {
    background: rgb(0, 115, 209);
    color: #ffffff;
}

</style>
