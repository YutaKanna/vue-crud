<template>
  <!-- defaultでページ遷移が発生するのでpreventをつける -->
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      details: '',
      uri: 'http://localhost:8080/projects/'
    }
  },
  methods: {
    handleSubmit() {
      let project = {
        // idはJsonデータが作ってくれる
        title: this.title, //v-model="title"と紐づく
        details: this.details, //v-model="details"と紐づく
        complete: false
      }
      fetch(this.uri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
      }).then(() => {
        this.$router.push('/')
      }).catch((err) => console.log(err))
    }
  }
}
</script>
