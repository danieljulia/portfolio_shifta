<template>

    
    <main>
        <section class="hero">
            <h2>Welcome to My Portfolio!</h2>
            <p>Here are some of my recent projects</p>
        </section>
        
        <section class="projects-grid" id="projects-container">
            <Project v-for="project in projects" :key="project.id" :project="project" />
        </section>
    </main>
    

</template>


<script>
import { inject } from 'vue'
import Project from './Project.vue'

export default {
    components: {
        Project
    },
    setup() {
        const projects = inject('projects')
        return {
            projects
        }
    }
}
</script>