<template>
  <div class="gnselect">
    <div class="cityName" v-if="cityFlag">
        <ul v-for="(city, index) in CityNameList" :key="index">
            <li v-for="(item, index) in city.cityList" :key="index" :class="{'citycolor': index != 0}">
                {{item.name}}
            </li>
        </ul>
    </div>
    <div class="statusWapper" :style="{'top':cityFlag?'175vw':''}">
        <div class="statusbtn">选择状态</div>
        <div class="selectstatus">
            <span :class="{'current':currentFlag[0].flag}" @click="checkTab(0)">已投</span>
            <span :class="{'current':currentFlag[1].flag}" @click="checkTab(1)">过会</span>
            <span :class="{'current':currentFlag[2].flag}" @click="checkTab(2)">过会前</span>
        </div>
        <div class="statusbtn">是否为红灯项目</div>
        <div class="selectstatus">
            <span :class="{'current':redflag}" @click="setRed()">红灯</span>
        </div>
        <div class="cityProject">
            <span class="proname">{{currCity}}项目<span class="prolen">(20)</span></span>
            <proList></proList>
            <!-- <div class="prolist">
                <ul>
                    <li v-for="(i,index) in 4" :key="index" :style="{'float':i%2 !== 0?'right':'left'}">
                        <img src="../images/prodata.png" alt="">
                        <div>
                            <span>项目名称</span>
                            <span>企业资产1000万</span>
                        </div>
                    </li>
                </ul>
            </div> -->
        </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { commonTab } from '../js/tab'
import proList from './proList'
export default {
    props: ['currCity','cityFlag'],
    data() {
        return {
            redflag: false,
            currentFlag: [
                {
                    flag: true
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
            'CityNameList'
        ])
    },
    // created() {
    //     this.getCityNameList()
    // },
    methods: {
        // ...mapActions([
        //     'getCityNameList'
        // ]),
        checkTab(key) {
            commonTab(key,this.currentFlag)
        },
        setRed() {
            this.redflag = !this.redflag;
        }
    },
    components: {
        proList
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cityName {
    width: 100%;
    position: absolute;
    top: 120vw;
}
.cityName ul {
    width: 90%;
    margin: 0 auto;
    overflow: hidden;
    /* display: flex; */
}
.cityName ul li {
    float: left;
    padding: 1vw 1.5vw;
    font-size: 3.6vw;
    /* flex: 1 */
}
.citycolor {
    color: darkcyan;
}
.statusWapper {
    width: 90%;
    left: 5%;
    position: absolute;
    margin-bottom: 10vw;    
}
.statusbtn {
    width: 90%;
    font-size: 2.66vw;
    color: #aaa;
    text-align: left;
    padding: 1vw 0;
}
.selectstatus {
    width: 100%;
    overflow: hidden;
    padding-bottom: 1vw;
}
.selectstatus span {
    float: left;
    width: 28%;
    border: 1px solid rgb(0, 115, 209);
    padding: 1.5vw 0;
    text-align: center;
    box-sizing: border-box;
    margin-right: 7%;
    border-radius: 1.5vw;
    font-size: 3.2vw;
    color:rgb(0, 115, 209)
}
.selectstatus span:last-child {
    margin-right: 0;
}
.selectstatus .current {
    background: rgb(0, 115, 209);
    color: #ffffff;
}
.cityProject {
    margin-top: 2vw;
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
</style>
