<template>
  <div>
      <p :key="ask.id" v-for="(ask) in this.GET_ASKS" >
        <router-link :to="`/item/${ask.id}`">
           {{ask.title}}
        </router-link>
         
        <small>
          {{ask.time_ago}} By {{ask.user}}
        </small>
      </p>
  </div>
</template>

<script>
import {mapGetters} from "vuex";


export default {
  created() {
    this.$store.dispatch('FETCH_ASKS');
  },
  computed: {
    ...mapGetters(['GET_ASKS'])
  }
}
</script>

<style>

</style>