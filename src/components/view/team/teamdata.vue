<template>
  <div>
      <div id="main"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
    data() {
        return {
           
        }
    },
    mounted() {
        this.echartsInnit()
    },
    methods: {
        echartsInnit() {
            var myChart = echarts.init(document.getElementById('main'))
            var option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#283b56'
                            }
                        }
                    },
                    itemStyle: {
                        color: 'dodgerblue'
                    },
                    dataZoom: {
                        show: false,
                        start: 0,
                        end: 100
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: true,
                            data: ['1','2','3','4','5','6']
                        },
                        {
                            type: 'category',
                            boundaryGap: true,
                            data: (function (){
                                var res = [];
                                var len = 6;
                                while (len--) {
                                    res.push(6 - len - 1);
                                }
                                return res;
                            })()
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            scale: true,
                            name: '类型/单位',
                            max: 30,
                            min: 0,
                            boundaryGap: [0.2, 0.2]
                        },
                        {
                            type: 'value',
                            scale: true,
                            name: '类型/单位',
                            max: 1200,
                            min: 0,
                            boundaryGap: [0.2, 0.2]
                        }
                    ],
                    series: [
                        {
                            name:'预购队列',
                            type:'bar',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            data:[300,500,1000,400,700,100]
                        },
                        {
                            name:'最新成交价',
                            type:'line',
                            data:(function (){
                                var res = [];
                                var len = 0;
                                while (len < 10) {
                                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
                                    len++;
                                }
                                return res;
                            })()
                        }
                    ]
                };


            myChart.setOption(option);
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tradelayout {
    width: 100%;
    top: 27vw;
    position: absolute;
}
#main {
    width: 100%;
    height: 80vw;
}
</style>
