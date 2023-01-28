<template>
  <div class="project" :class="{complete: project.complete}">
    <div class="actions">
      <h3 @click="toggleShowDetails">{{ project.title }}</h3>
      <div class="icons">
        <span @click="toggleComplete" class="done-icons tick">done</span>
        <span @click="deleteProject" class="delete-icons">delete</span>
      </div>
      <router-link :to="{ name: 'EditProject', params: {id: project.id}}">
        <span class="edit-icons">edit</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:8080/projects/' + this.project.id
    }
  },
  methods: {
    toggleComplete() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ complete: !this.project.complete })
      })
        .then(() => {
          this.$emit('complete', this.project.id)
        })
        .catch(err => console.log(err))
    },
    deleteProject() {
      fetch(this.uri, { method: 'DELETE' })
        .then(() => this.$emit('delete', this.project.id))
        .catch(err => console.log(err))
    }
  }
}
</script>
