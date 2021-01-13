<template>
  <div>
      <ul class="item-list">
      <li :key="item.id" v-for="(item) in listItems" class="post">
        <div class="points">
            <!-- 포인트 영역 -->
            {{item.points || 0}}
        </div>
        <!-- 기타정보 영역 -->
        <div>
          <p class="item-title">
            <template v-if="item.domain">
                <a :href="item.url" target="_blank" >
                {{item.title}}
                </a>
            </template>
            <template v-else>
                <router-link :to="`/item/${item.id}`">
                {{item.title}}
                </router-link>
            </template>
          </p>
          <small class="link-text">
            {{item.time_ago}}
            By
            <router-link
             v-if="item.user"
             :to="`/user/${item.user}`" 
             class="link-text"
             >{{item.user}}</router-link>
             <a 
             :href="item.url" 
             target="blank_"
             v-else
             >
            {{item.domain}}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  created() {
    const name = this.$route.name;

    let actionWord = '';
    if(name === 'news'){ 
        actionWord = 'FETCH_NEWS';
    } else if(name === 'asks') {
        actionWord = 'FETCH_ASKS';
    } else if (name === 'jobs') {
        actionWord = 'FETCH_JOBS';
    }
    this.$store.dispatch(actionWord);
  },
  computed: {
      listItems() {
            const name = this.$route.name;
            if(name === 'news'){ 
                return this.$store.state.News.news;
            } else if(name === 'asks') {
                return this.$store.state.Asks.asks;
            } else if (name === 'jobs') {
                return this.$store.state.Jobs.jobs;
            }
            return null;
      }
  }
}
</script>

<style>
.item-list { 
  margin : 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.item-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>