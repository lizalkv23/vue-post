<template>
  <div class="post">
    <div>
      <div>
        <strong> Title </strong> {{ post.title }}
      </div>
      <div>
        <strong> Description </strong> {{ post.body }}
      </div>
    </div>
    <div class="post__btns">
      <button @click="$emit('remove', post)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 200px;
  background-color: rgba(98, 228, 118, 0.837);
  font-size: 20px;
  border-radius: 20px;
  padding: 1.25rem;
}

.post:not(:last-child) {
  margin-bottom: 20px;
}

button {
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  background-color: black;
  color: #fff;
  font-size: 16px;
  border: transparent;
  letter-spacing: 0.1em;
  border-radius: 8px;
}
</style>
