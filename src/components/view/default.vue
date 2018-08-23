<template>
  <div class="default">
    <div>
      <router-link tag="li" to="/allImg">
        <img src="../images/Investment.png" alt="">
      </router-link>
    </div>
    <div>
      <router-link tag="li" to="/adminWork">
        <img src="../images/operation.png" alt="">
      </router-link>
    </div>
    <div>
      <router-link tag="li" to="/">
        <img src="../images/createnew.png" alt="">
      </router-link>
    </div>
    <div>
      <router-link tag="li" to="/">
        <img src="../images/c2m.png" alt="">
      </router-link>
    </div>
    <toptitle toptitle="首页" pathkeys="catalog"></toptitle>
    <footerBar></footerBar>
  </div>
</template>

<script>
import toptitle from '../commonview/toptitle'
import footerBar from '../commonview/footerBar'
export default {
  name: 'HelloWorld',
  components: {
    toptitle,
    footerBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.default {
  margin-bottom: 10vw;
  margin-top: 10vw;
}
h2 {
  font-weight: normal;
  padding-left: 5vw;
  padding-top: 5vw;
}
img {
  display: block;
  height: 45.86vw;
}
</style>
