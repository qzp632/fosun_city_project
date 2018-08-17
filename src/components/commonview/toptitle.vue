<template>
  <div class="toptitleWapper">
      <div class="toptitle" @click="toPath(pathkeys)">
          <span>{{toptitle}}</span>
          <span class="icon">
              <img src="../images/tabdown.png" alt="">
          </span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        toptitle: {
            type: String
        },
        pathkeys: {
            type: String
        }
    },
    methods: {
        toPath(key) {
            this.$router.push(`/${key}`)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toptitle {
    position: fixed;
    top: 0;
    width: 100%;
    height: 10.66vw;
    padding-left: 5%;
    line-height: 10.66vw;
    box-sizing: border-box;
    background: #000;
    color: #ffffff;
    z-index: 8888;
}
.icon {
    width: 4.26vw;
    height: 2.13vw;
    display: inline-block;
    position: absolute;
    left: 50%;
    margin-left: -2.13vw;
    top: 50%;
    margin-top: -1.065vw;
}
img {
    width: 100%;
    height: 100%;
    display: block;
}
</style>
