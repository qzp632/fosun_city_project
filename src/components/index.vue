<template>
  <div class="warpper">
    <vdefault></vdefault>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import vdefault from './view/default'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters([
      'indexData'
    ])
  },
  created() {
    this.getIndexData()
  },
  methods: {
    ...mapActions([
      'getIndexData'
    ])
  },
  components: {
    vdefault
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
