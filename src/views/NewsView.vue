<template>
  <div>
    <ul class="news-list">
      <li :key="news.id" v-for="(news) in this.GET_NEWS" class="post">
         <a :href="news.url" target="_blank" >
          {{news.title}}
        </a>
        <small>
          {{news.time_ago}} By 
          <router-link :to="`/user/${news.user}`">{{news.user}}</router-link>
        </small>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS')
  },
  computed: {
    ...mapGetters(['GET_NEWS'])
  }
}
</script>

<style scoped>
.news-list { 
  margin : 0;
  padding: 0;
}
.post {
  
}
</style>