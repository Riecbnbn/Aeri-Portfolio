<template>
  <div class="login-wrapper">
    <div class="login-page">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    handleLogin() {
      const hardcodedUsername = 'admin';
      const hardcodedPassword = '1234';
      if (this.username === hardcodedUsername && this.password === hardcodedPassword) {
        this.$router.push('/portfolio/myprofile'); // ✅ Redirect to dashboard
      } else {
        this.error = 'Invalid credentials. Try admin / 1234.';
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  

  max-width: 320px;
  margin: 5rem auto;
  padding: 2rem;
  text-align: center;

  background: rgba(255, 255, 255, 0.15); /* translucent white */
  border-radius: 15px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #0d1b2a;
  font-weight: 500;

}

input {
  display: block;
  margin: 0.5rem auto;
  padding: 0.6rem;
  width: 80%;
  border: 1px solid rgba(255, 255, 255, 0.4); /* makes the box outline visible */
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.35); /* slightly more opaque for clarity */
  color: #415a77;
  font-size: 1rem;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* adds subtle outer shadow */
  transition: background 0.3s ease, border 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
  border: 1px solid #e0e1dd;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 8px rgba(224, 225, 221, 0.6); /* soft glow on focus */
}


input::placeholder {
  color: #415a77;
}

input:focus {
  background: rgba(255, 255, 255, 0.4);
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  border: none;
  border-radius: 10px;
  background: #1b263b;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
  transition: background 0.3s ease;
}

button:hover {
  background: #0d1b2a;
}

.error {
  color: #ff6b6b;
  margin-top: 0.5rem;
  font-weight: 600;
}
.login-wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('@/assets/login.jpg') center/cover no-repeat;
}

</style>