<template>
    <div class="prolist">
        <ul>
            <li v-for="(i,index) in 9" :key="index" :style="{'float':i%2 === 0?'right':'left'}">
                <img src="../images/prodata.png" alt="">
                <div>
                    <span>项目名称</span>
                    <span>已投金额1000万</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>


export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


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
