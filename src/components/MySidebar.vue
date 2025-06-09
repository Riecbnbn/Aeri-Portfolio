<template>
  <aside :class="['sidebar', { collapsed: isCollapsed }]">
    <div class="burger" @click="$emit('toggle')">
      <font-awesome-icon icon="bars" :style="{ fontSize: '35px' }" />
    </div>

    <router-link to="/portfolio/myprofile" class="nav-item">
      <font-awesome-icon icon="user" />
      <span v-if="!isCollapsed">Profile</span>
    </router-link>

    <router-link to="/portfolio/myshowcase" class="nav-item">
      <font-awesome-icon icon="image" />
      <span v-if="!isCollapsed">Showcase</span>
    </router-link>

    <router-link to="/portfolio/mycontact" class="nav-item">
      <font-awesome-icon icon="envelope" />
      <span v-if="!isCollapsed">Contact</span>
    </router-link>

    <router-link to="/portfolio/mycreative" class="nav-item">
      <font-awesome-icon icon="paint-brush" />
      <span v-if="!isCollapsed">Creative</span>
    </router-link>
  </aside>
</template>

<script>
export default {
  name: 'MySidebar',
  props: {
    isCollapsed: Boolean
  }
};
</script>

<style scoped>
.sidebar {
  width: 160px; /* Previously 220px */
  background-color: #778da9;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease, padding 0.3s ease;
  overflow: hidden;
  box-sizing: border-box;
}

.sidebar.collapsed {
  width: 48px; /* Previously 60px */
  padding: 0.75rem 0.3rem;
}

.burger {
  font-size: 1.25rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  user-select: none;
  color: white;
  display: flex;
  justify-content: flex-start; /* <-- force alignment to left */
  padding-left: 0.25rem;       /* <-- small spacing from the edge */
}


.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #0d1b2a;
  text-decoration: none;
  padding: 0.4rem;
  border-radius: 6px;
  transition: background-color 0.3s, color 0.3s;
  font-size: 1rem;
}

.nav-item:hover {
  background-color: #1b263b;
  color: #ffffff;
}

.router-link-active {
  font-weight: bold;
  background-color: #415a77;
  color: #ffffff;
}

</style>
