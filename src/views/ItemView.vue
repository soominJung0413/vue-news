<template>
  <div>
    <section>
      <!-- 질문 상세 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${GET_ASKINFO.user}`">
             {{GET_ASKINFO.user}}
          </router-link>
          <div class="time">
            {{GET_ASKINFO.time_ago}}
          </div>
        </div>
      </div>
      <h2>{{GET_ASKINFO.title}}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="GET_ASKINFO.content"></div>
    </section>
  
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ASKINFO',id);
  },
  computed: {
    ...mapGetters(['GET_ASKINFO'])
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>