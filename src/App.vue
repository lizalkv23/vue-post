<template>
  <div class="app">
    <div class="container">
      <post-form @create="createPost">
      </post-form>
      <post-list :posts="posts" @remove='removePost' />
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import result from "@/views/api.js"

export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      posts: [
      ],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
  },
  mounted() {
    this.posts = result
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  overflow: hidden;
  min-height: 100vh;
  background: linear-gradient(45deg, #000 10%, #fff 80%);
}

.container {
  max-width: 1110px;
  padding: 20px 15px;
  margin: 0 auto;
}
</style>