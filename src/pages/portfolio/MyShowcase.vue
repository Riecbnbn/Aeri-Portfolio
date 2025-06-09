<template>
  <div class="showcase-page">
    <h2>Portfolio Showcase</h2>
    <div class="projects">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card"
        :class="{ selected: selectedProject === project.id }"
        @click="selectProject(project.id)"
      >
        <img :src="project.image" alt="Project image" />
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyShowcase',
  data() {
    return {
      selectedProject: null,
      projects: [
        {
          id: 1,
          title: 'Certification',
          description: 'Computer Systems Servicing National Certificate Level II (NC II)',
          image: require('@/assets/nc2.jpg')
        },
        {
          id: 2,
          title: 'Design Project in PUP ITECH',
          description: 'HYDRAE: Monitoring and Balancing System with Dosing and Sensors',
          image: require('@/assets/thesis.jpg')
        },
        {
          id: 3,
          title: 'Experience',
          description: 'LexMeet Front End Developer Intern',
          image: require('@/assets/lexmeet.png')
        },
        {
          id: 4,
          title: 'StartUp 2025 Seminar',
          description: 'Documentation team',
          image: require('@/assets/docu.jpg')
        },
        {
          id: 5,
          title: 'Diploma',
          description: 'ITECH - Computer Engineering Technology batch 2023',
          image: require('@/assets/aeri.jpg')
        },
        {
          id: 6,
          title: 'IBM Badges',
          description: 'Badges from Internship',
          image: require('@/assets/certs.png')
        }
      ]
    }
  },
  methods: {
    selectProject(id) {
      this.selectedProject = this.selectedProject === id ? null : id
    }
  }
}
</script>

<style scoped>
.showcase-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
}

h2 {
  margin: 0;
  font-size: 1.8rem;
  padding-bottom: 0.5rem;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 1000px;
  height: calc(100vh - 5rem); /* Subtract h2 + padding */
  box-sizing: border-box;
}

.project-card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 12px;
  text-align: center;
  padding: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}


.project-card img {
  width: 100%;
  height: 100px; /* Reduced to save space */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.project-card h3 {
  margin: 0.25rem 0;
  font-size: 0.95rem;
}

.project-card p {
  font-size: 0.8rem;
  color: #444;
}

.showcase-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;
  overflow: hidden;
}

h2 {
  margin: 0;
  font-size: 1.8rem;
  padding-bottom: 0.5rem;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  height: calc(100vh - 4rem); /* Ensures the grid fits below header */
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
  padding: 0.5rem;
}

.project-card {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 12px;
  text-align: center;
  padding: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.project-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;
}

.project-card h3 {
  margin: 0.25rem 0;
  font-size: 1rem;
}

.project-card p {
  font-size: 0.85rem;
  color: #444;
}

/* Hover effect */
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Click effect */
.project-card.selected {
  transform: scale(1.05);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

</style>
