<template>
  <div v-show="posts.length > 0">
    <h3> Users List</h3>
    <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" />
  </div>
  <h3 v-show="posts.length <= 0" style="color:rgb(75, 234, 22)">
    The list of users is empty
  </h3>
</template>

<script>
import PostItem from "@/components/PostItem.vue"
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
h3 {
  margin-bottom: 10px;
  font-size: 30px;
  font-style: italic;
  font-weight: 700;
}
</style>