<template>

    
    <main>
        <section class="hero">
            <h2>Bienvenido a mi portafolio!</h2>
            <p>Estos son algunos de mis proyectos más recientes.</p>
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