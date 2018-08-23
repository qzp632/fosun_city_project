<template>
  <div class="guonei">
    <div id="highmaps" class="container"></div>
    <gnselect :currCity="currCity" :cityFlag=true></gnselect>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import Highcharts from 'highcharts/highstock'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsDrilldown from 'highcharts/modules/drilldown'
import Highcharts3D from 'highcharts/highcharts-3d'
import Highmaps from 'highcharts/modules/map'
import $ from 'jquery'
import { commonTab } from '../../js/tab'
import gnselect from '../../commonview/gnselect'
HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts)
Highcharts3D(Highcharts)
Highmaps(Highcharts)

export default {
    name: "echarts",
    props: ['city'],
    data() {
        return {
            redflag: false,
            currCity: '',
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
    // computed: {
    //     ...mapGetters([
    //         'CityNameList'
    //     ])
    // },
    // created() {
    //     this.getCityNameList()
    // },
    mounted() {
      this.highmaps();
    },
    methods: {
        ...mapActions([
            'getCityNameList'
        ]),
        checkTab(key) {
            commonTab(key,this.currentFlag)
        },
        setRed() {
            this.redflag = !this.redflag;
        },
        highmaps () {
            let self = this
            let map = null
            let geochina = 'https://data.jianshukeji.com/jsonp?filename=geochina/'
            $.getJSON(geochina + 'china.json&callback=?', function (mapdata) {
                var data = []
                // 随机数据
                Highcharts.each(mapdata.features, function (md, index) {
                    var tmp = {
                        name: md.properties.name,
                        value: Math.floor((Math.random() * 100) + 1) // 生成 1 ~ 100 随机值
                    }
                    if (md.properties.drilldown) {
                        tmp.drilldown = md.properties.drilldown
                    }
                    data.push(tmp)
                })
                console.log(data)
                map = new Highcharts.Map('highmaps', {
                    chart: {
                        events: {
                            drilldown: function (e) {
                                self.currCity = e.point.name
                                self.$emit('add', self.currCity);
                                // self.city = e.point.name
                            },
                            drillup: function () {
                                map.setTitle({
                                    text: '中国'
                                })
                            }
                        }
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        // text: '<a href="https://www.hcharts.cn/mapdata">点击查看地图数据及详情</a>'
                    },
                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom'
                        }
                    },
                    colorAxis: {
                        min: 0,
                        minColor: '#fff',
                        // minColor: 'blue',
                        maxColor: '#006cee',
                        // maxColor: 'red',
                        labels: {
                            style: {
                                'color': 'red', 'fontWeight': 'bold'
                            }
                        }
                    },
                    series: [{
                        data: data,
                        mapData: mapdata,
                        joinBy: 'name',
                        name: '中国地图',
                        states: {
                            hover: {
                                color: '#a4edba'
                            }
                        },
                        dataLabels: {
                            enabled: false,
                            formatter: function () {
                                return this.point.name
                            },
                            style: {
                                // color: '#fff',
                                // fontFamily: '宋体',
                                textShadow: false,
                                // 去掉阴影
                                textOutline: 'none'
                            }
                        }
                    }],
                    credits: {
                        // 去掉版权信息
                        enabled: false
                    }
                })
            })
        }
    },
    components: {
        gnselect
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
</style>
