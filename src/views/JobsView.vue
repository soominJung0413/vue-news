<template>
<div>
  <p :key="jobs.id" v-for="(jobs) in this.GET_JOBS" >
        <a :href="jobs.url" target="_blank" >
          {{jobs.title}}
        </a>
        <small>
          {{jobs.time_ago}} , {{jobs.domain}}
        </small>
  </p>
</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  created() {
    this.$store.dispatch('FETCH_JOBS')
  },
  computed: {
    ...mapGetters(['GET_JOBS'])
  }
}
</script>

<style>

</style>