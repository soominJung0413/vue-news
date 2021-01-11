<template>
  <div>
    <p>
      name : {{GET_USERINFO.id}}
    </p>
    <p>
      karma : {{GET_USERINFO.karma}}
    </p>
    <p>
      created : {{GET_USERINFO.created}}
    </p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USERINFO',userName);
  },
  computed: {
    ...mapGetters(['GET_USERINFO'])
  }
}
</script>

<style>

</style>