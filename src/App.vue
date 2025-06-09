<template>
  <div id="app">
    <div class="app-wrapper" v-if="!isLoginPage">
      <MySidebar :is-collapsed="isSidebarCollapsed" @toggle="toggleSidebar" />
      <div class="content-wrapper">
        <router-view class="main-content" />
        <MyFooter />
      </div>
    </div>

    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import MySidebar from './components/MySidebar.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  name: 'AppRoot',
  components: {
    MySidebar,
    MyFooter,
  },
  setup() {
    const route = useRoute();
    const isLoginPage = computed(() => route.path === '/');
    // Change this line from 'false' to 'true'
    const isSidebarCollapsed = ref(true); // Changed to true for collapsed by default

    const toggleSidebar = () => {
      isSidebarCollapsed.value = !isSidebarCollapsed.value;
    };

    return { isLoginPage, isSidebarCollapsed, toggleSidebar };
  },
};
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.app-wrapper {
  display: flex;
  height: 100vh;
}

.app-wrapper > *:first-child {
  transition: width 0.3s;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
}
</style>