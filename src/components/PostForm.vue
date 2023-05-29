<template>
  <form @submit.prevent>
    <h3 class="title"> Create Post</h3>
    <input v-model="post.title" class="input" type="text" placeholder="Post title">
    <input v-model="post.body" class="input" type="text" placeholder="Description post">
    <button class="btn" @click="createPost()">
      CREATE
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: Date.now(),
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      if (this.post.body !== '' && this.post.title !== '') {
        this.id = Date.now()
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
      else
        this.post = {
        title: '',
        body: ''
      }
    }
  },
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 2px solid rgb(47, 46, 48);
  padding: 15px;
  margin-top: 10px;
  border-radius: 8px;
  outline: none;
  font-size: 18px;
  background-color: rgba(235, 229, 229, 0.147);
}
.input::placeholder{
  color: rgb(40, 38, 38);
  font-style: italic;
  font-size: 14px;
}
form {
  display: flex;
  flex-direction: column;
}

.btn {
  background-color: grey;
  color: rgb(12, 12, 12);
  margin: 20px 0;
  font-size: 20px;
  text-transform: uppercase;
  transition: all 0.5s;
  border: transparent;
  cursor: pointer;
  align-self: flex-end;
  padding: 20px;
  border-radius: 8px;
}

.btn:hover {
  color: #ede9e9;
  background-color: #100e0eaf;
}
.title{
  font-size: 30px;
  color: rgb(38, 36, 36);
  font-weight: 900;
}
</style>