<template>
  <div class="catalogWapper">
      <ul>
          <li v-for="(item, index) in tilteList" :key="index">
              <span class="tilteleft" @click="toPath(item.left)">{{item.left}}</span>
              <span class="tilteright" @click="toPath(item.right)">{{item.right}}</span>
          </li>
      </ul>
      <footerBar></footerBar>
  </div>
</template>

<script>
// import footerBar from '../commonview/footerBar'
export default {
  name: 'HelloWorld',
  data() {
      return {
          tilteList: [
              {
                  left: "首页",
                  right: ""
              },
              {
                  left: "",
                  right: ""
              },
              {
                  left: "投资价值-全球版图",
                  right: "投资价值-战略标签"
              },
              {
                  left: "投资价值-行业布局",
                  right: "投资价值-红黄绿灯"
              },
              {
                  left: "投资价值-团队贡献",
                  right: ""
              },
              {
                  left: "",
                  right: ""
              },
              {
                  left: "产品运营",
                  right: "产品运营-管理架构",
              },
              {
                  left: "产品运营-业务规模",
                  right: "产品运营-业务能力"
              },
              {
                  left: "产品运营-可持续力",
                  right: "产品运营-企业成长"
              },
              {
                  left: "",
                  right: ""
              },
              {
                  left: "人员足迹",
                  right: "C2M"
              },
              {
                  left: "C端能力-客户数量",
                  right: "LINK"
              },
              {
                  left: "M端能力",
                  right: ""
              }
          ]
      }
    },
    methods: {
        toPath(key) {
            switch (key)
            {
                case '首页':
                    this.$router.push('/')
                    break
                case '投资价值-全球版图':
                    this.$router.push('/allImg')
                    break
                case '投资价值-战略标签':
                    this.$router.push('/battleEl')
                    break
                case '投资价值-行业布局':
                    this.$router.push('/tradelayout')
                    break
                case '投资价值-红黄绿灯':
                    this.$router.push('/lamp')
                    break
                case '产品运营':
                    this.$router.push('/cpoperate')
                    break
                case '产品运营-管理架构':
                    this.$router.push('/adminWork')
                    break
                case '产品运营-业务规模':
                    this.$router.push('/bscale')
                    break
                case '产品运营-业务能力':
                    this.$router.push('/capability')
                    break
                case '产品运营-可持续力':
                    this.$router.push('/continued')
                    break
                case '产品运营-企业成长':
                    this.$router.push('/growUp')
                    break
                case '人员足迹':
                    this.$router.push('/footprints')
                    break
                    
            }
        }
    },
    components: {
        // footerBar
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.catalogWapper {
    background: #000;
    width: 100%;
    height: 100%;
    color: #fff;
    padding-top: 20vw;
    box-sizing: border-box;
}
ul {
    width: 75%;
    margin: auto;
}
li {
    font-size: 3.73vw;
    height: 10vw;
    line-height: 10vw;
    border-bottom: 1px solid #222;
}
.tilteleft {
    float: left;
}
.tilteright {
    float: right;
    width: 32vw;
    text-align: left;
}
</style>
