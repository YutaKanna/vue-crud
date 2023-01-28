<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SingleProject
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'

export default {
  name: 'HomeHoge',
  components: { SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: 'all', //ここでcurrentをトラッキングする
      uri: 'http://localhost:8080/projects/'
    }
  },
  computed: {
    filteredProjects() {
      if (this.current === 'completed') {
        return this.projects.filter(project => project.complete)
      }
      if (this.current === 'ongoing') {
        return this.projects.filter(project => !project.complete)
      }
      return this.projects //すべて表示
    }
  },
  mounted() {    
    fetch(this.uri)
      .then(res => {
        return res.json();
      }).then(data => {
        this.projects = data;
      }).catch(function () {
      });
  },
  methods: {
    handleComplete(id) {
      let p = this.projects.find(project => {
        return project.id === id //渡されるidとprojectのidがマッチしたら返す
      })
      p.complete = !p.complete
    }
  }
}
</script>
