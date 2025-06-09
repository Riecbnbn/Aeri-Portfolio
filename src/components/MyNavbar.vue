<template>
  <nav class="navbar">
    <div class="nav-title">Welcome to my Portfolio!</div>

    <div class="user-menu" @click="toggleDropdown">
      <img src="@/assets/logo.jpg" alt="User" class="user-icon" />
      <div v-if="showDropdown" class="dropdown">
        <button @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MyNavbar',
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      this.showDropdown = false;
      // Clear auth/session data if needed
      localStorage.removeItem('user'); // optional
      this.$router.push('/'); // this goes to LoginPage
    }
  }
};
</script>




<style scoped>
.navbar {
  height: 60px;
  background-color: #1b263b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between; /* Title on left, user icon on right */
  padding: 0 20px;
  font-weight: bold;
  font-size: 1.2rem;
  position: relative;
}

.nav-title {
  flex-grow: 1;
}

.user-menu {
  position: relative;
  cursor: pointer;
}

.user-icon {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ffffff33;
}

.dropdown {
  position: absolute;
  top: 55px;
  right: 0;
  background-color: #415a77;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  padding: 0.25rem 0;
  z-index: 1000;
  width: auto;
  min-width: auto;
  white-space: nowrap;
}

.dropdown button {
  background: none;
  border: none;
  color: white;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: left;
  width: 100%;
}

.dropdown button:hover {
  background-color: #1b263b;
}

</style>
