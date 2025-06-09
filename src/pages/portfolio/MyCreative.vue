<template>
  <div class="creative-page-container">
    <div class="creative-header">
      <h2>My Creative Corner</h2>
      <p>Here’s a mini blog where I share my thoughts and hobbies.</p>
    </div>

    <div class="carousel-wrapper">
      <div class="carousel-inner">
        <transition name="fade" mode="out-in">
          <img :src="currentImage.src" :alt="currentImage.alt" :key="currentImageIndex" class="carousel-image">
        </transition>
        <div class="image-caption">{{ currentImage.alt }}</div>
      </div>

      <div class="carousel-controls">
        <div class="carousel-indicators">
          <span v-for="(image, index) in images" :key="index"
                :class="{ 'indicator-dot': true, 'active': index === currentImageIndex }"
                @click="goToImage(index)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCreative',
  data() {
    return {
      currentImageIndex: 0,
      images: [
       
        { src: require('@/assets/photog.jpg'), alt: 'Likes to take pictures' }, 
        { src: require('@/assets/hydrae.jpg'), alt: 'Academic Research' }, 
        { src: require('@/assets/collection.jpg'), alt: 'Sumikko Gurashi Collector' },
        { src: require('@/assets/bowling.jpg'), alt: 'Likes bowling' },
        { src: require('@/assets/kalimba.jpg'), alt: 'Plays Kalimba' },
        { src: require('@/assets/pic.jpg'), alt: 'Documentation and Writing' }
       
      ],
      autoplayInterval: null,
      autoplayDelay: 4000 // Image changes every 4 seconds
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex];
    },
    hasPrev() {
      return this.currentImageIndex > 0;
    },
    hasNext() {
      return this.currentImageIndex < this.images.length - 1;
    }
  },
  mounted() {
    this.startAutoplay();
  },
  beforeUnmount() {
    this.stopAutoplay();
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    goToImage(index) {
      this.stopAutoplay();
      this.currentImageIndex = index;
      this.startAutoplay();
    },
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextImage();
      }, this.autoplayDelay);
    },
    stopAutoplay() {
      if (this.autoplayInterval) {
        clearInterval(this.autoplayInterval);
        this.autoplayInterval = null;
      }
    }
  }
}
</script>

<style scoped>
.creative-page-container {
  max-width: 650px;
  margin: 2rem auto;
  padding: 1.5rem; 
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
}

.creative-header h2 {
  color: #0d1b2a;
  margin-bottom: 0.5rem;
  font-size: 2em;
}

.creative-header p {
  color: #1b263b;
  margin-bottom: 1.5rem;
  font-size: 1.1em;
}

.carousel-wrapper {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.15); /* Translucent white background */
  border-radius: 16px; /* Larger border-radius */
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); /* Stronger shadow */
  backdrop-filter: blur(8px); 
  -webkit-backdrop-filter: blur(8px); 
  border: 1px solid rgba(255, 255, 255, 0.18); /* Light, semi-transparent border */
  
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 16px; 
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Slightly more transparent caption background */
  color: #ffffff;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  text-align: center;
  box-sizing: border-box;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  background-color: rgba(119, 141, 169, 0.6);
  backdrop-filter: blur(4px); 
  -webkit-backdrop-filter: blur(4px);
  border-top: 1px solid rgba(255, 255, 255, 0.1); 
  border-bottom-left-radius: 16px; 
  border-bottom-right-radius: 16px; 
}

.carousel-indicators {
  display: flex;
  gap: 0.75rem;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.indicator-dot.active {
  background-color: #ffffff;
  transform: scale(1.2);
}

.indicator-dot:hover {
  background-color: #ffffff;
}

/* Fade Transition Styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .creative-page-container {
    padding: 1rem;
    margin: 1rem auto;
    max-width: 95%;
  }

  .carousel-inner {
    height: 250px;
  }

  .image-caption {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
}
</style>