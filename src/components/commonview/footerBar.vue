<template>
  <div class="footerBarWarpper">
      <ul>
          <li>
              <span class="icon-home2" @click="getRoutes"></span>
          </li>
          <li>
              <span class="icon-backward2" @click="goBack"></span>
          </li>
          <li>
              <span class="icon-forward3"></span>
          </li>
          <li>
              <span class="icon-menu"></span>
          </li>>
      </ul>
  </div>
</template>

<script>
export default {
    methods: {
        getRoutes() {
            this.$router.push('/')
        },
        goBack() {
            this.$router.go(-1)
        } 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../font/style.css'; 
.footerBarWarpper {
    width: 100%;
    height: 12vw;
    background: rgba(0, 0, 0, .7);
    position: fixed;
    bottom: 0;
}
.footerBarWarpper ul {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.footerBarWarpper ul li {
    float: left;
    width: 25%;
    text-align: center;
    line-height: 12vw;
}
.icon-home2,.icon-backward2,.icon-forward3,.icon-menu {
    font-size: 5vw;
}
</style>
