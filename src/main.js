import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { ref } from 'vue'


const app = createApp(App)

const projects = ref([]) //por defecto un array vacio

// Provide projects globally
app.provide('projects', projects)

// Load projects
fetch('/projects.json')
  .then(response => response.json())
  .then(data => {
    projects.value = data.projects
    console.log(projects.value)
  })
  .catch(error => console.error('Error loading projects:', error))

app.use(router).mount('#app')