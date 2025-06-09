<template>
  <div class="dashboard-layout">
    <MyNavbar />

    <div class="main-content-wrapper">
      <MySidebar />

      <main class="main-content">
        <router-view />
      </main>
    </div>

    <MyFooter />
  </div>
</template>

<script>
import MyNavbar from './MyNavbar.vue';



export default {
  name: 'DashboardLayout',
  components: {
    MyNavbar,
   
  },
  
};
</script>

<style scoped>
/* Reset margins and paddings, fill full height */
.dashboard-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Remove any default margin/padding from body/html if affecting */
:global(html, body) {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
}

.main-content-wrapper {
  display: flex;
  flex: 1;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

main.main-content {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  background-color: #f9f9f9;
  margin: 0;
}

/* Optional: If navbar or sidebar have margins/padding, remove or adjust them */
</style>
