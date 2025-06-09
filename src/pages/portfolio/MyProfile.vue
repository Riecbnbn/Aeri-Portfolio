<template>
  <div class="profile-card">
    <div class="photo-wrapper">
      <img src="@/assets/aeri.jpg" alt="Profile Photo" class="profile-photo" />
    </div>
    <h1>Erika Jane Cabanban</h1>
    <p class="title">Web Developer • Cybersecurity Engineer</p>
    <p class="bio">
            Aspiring Cybersecurity Engineer and QA specialist, passionate about building secure and reliable systems.
          </p>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/erika-jane-cabanban-749a64332/" target="_blank">LinkedIn</a>
      <a href="https://github.com/NaNStopAeri" target="_blank">GitHub</a>
    </div>
  </div>
</template>



<script>
export default {
  name: 'MyProfile'
};
</script>

<style scoped>


.profile-card {
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
  border: 1px solid #ccc;
}



.photo-wrapper {
  width: 150px;
  height: 150px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #778da9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h1 {
  font-size: 1.5rem;
  color: #0d1b2a;
  margin: 0.5rem 0;
}

.title {
  font-size: 0.95rem;
  color: #415a77;
  margin-bottom: 1.2rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-links a {
  color: #1b263b;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #0d1b2a;
}
</style>
