<template>
  <div class="contact-container">
    <div class="contact-info-section">
      <h3>Let's Chat</h3>
      <p>Have a question or want to work together? Feel free to reach out!</p>
      <div class="social-links">
        <font-awesome-icon icon="linkedin" class="social-icon" />
        <font-awesome-icon icon="github" class="social-icon" />
      </div>
    </div>

    <div class="contact-form-section">
      <h2>Contact Me</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" placeholder="Enter your name" required aria-describedby="name-error" :aria-invalid="!!errors.name"/>
          <p v-if="errors.name" class="error-message" id="name-error">{{ errors.name }}</p>
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" placeholder="your@gmail.com" required aria-describedby="email-error" :aria-invalid="!!errors.email"/>
          <p v-if="errors.email" class="error-message" id="email-error">{{ errors.email }}</p>
        </div>

        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="message" placeholder="Please type your message here.." required rows="5" aria-describedby="message-error" :aria-invalid="!!errors.message"></textarea>
          <p v-if="errors.message" class="error-message" id="message-error">{{ errors.message }}</p>
        </div>

        <button type="submit" :disabled="isSubmitting">
          <span v-if="isSubmitting">Sending...</span>
          <span v-else>Send Message</span>
        </button>

        <p v-if="successMessage" class="success-message" role="status">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error-message" role="alert">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MyContact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      isSubmitting: false,
      successMessage: '',
      errorMessage: '',
      errors: {} // To store validation errors
    }
  },
  methods: {
    validateForm() {
      this.errors = {}; // Clear previous errors
      let isValid = true;

      if (!this.name.trim()) {
        this.errors.name = 'Name is required.';
        isValid = false;
      }

      if (!this.email.trim()) {
        this.errors.email = 'Email is required.';
        isValid = false;
      } else if (!this.isValidEmail(this.email)) {
        this.errors.email = 'Please enter a valid email address.';
        isValid = false;
      }

      if (!this.message.trim()) {
        this.errors.message = 'Message is required.';
        isValid = false;
      } else if (this.message.trim().length < 10) {
        this.errors.message = 'Message must be at least 10 characters long.';
        isValid = false;
      }

      return isValid;
    },
    isValidEmail(email) {
      // Basic email regex validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    async submitForm() {
      // Clear any previous messages
      this.successMessage = '';
      this.errorMessage = '';

      if (!this.validateForm()) {
        this.errorMessage = 'Please correct the errors in the form.';
        return; // Stop submission if validation fails
      }

      this.isSubmitting = true;

      try {
        // Simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    
        this.successMessage = 'Your message has been sent successfully!';
        // Clear the form
        this.name = '';
        this.email = '';
        this.message = '';
        this.errors = {}; // Clear errors after successful submission

      } catch (error) {
        // Handle actual API errors here
        this.errorMessage = 'There was an error sending your message. Please try again later.';
        console.error('Submission error:', error);
      } finally {
        this.isSubmitting = false;
        // Optionally clear messages after a delay
        setTimeout(() => {
          this.successMessage = '';
          this.errorMessage = '';
        }, 5000);
      }
    }
  }
}
</script>

<style scoped>

.contact-container {
  display: flex;
  max-width: 800px;
  margin: 2rem auto;
  /* Glassmorphism effects */
  background-color: rgba(255, 255, 255, 0.15); /* Slightly transparent white */
  border-radius: 16px; /* Larger border-radius for glassmorphism */
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); /* Stronger, stylized shadow */
  backdrop-filter: blur(8px); /* The frosted glass effect */
  -webkit-backdrop-filter: blur(8px); /* For Safari compatibility */
  border: 1px solid rgba(255, 255, 255, 0.18); /* Light, semi-transparent border */
  overflow: hidden; /* Ensures border-radius applies to children */
  /* If you want a background behind the glass card for the effect to show,
     you'd typically apply a gradient or image to the body/html in App.vue.
     For now, it will look like a translucent card on whatever background is there. */
}

/* Left Section Styles */
.contact-info-section {
  flex: 1;
  /* Use a slightly darker, but still transparent, version of your theme color */
  background-color: rgba(65, 90, 119, 0.7); /* #415a77 with 70% opacity */
  color: #e0e1dd;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* Remove individual border-radius, as container handles it */
  border-top-left-radius: 15px; /* Adjust to match container or keep square */
  border-bottom-left-radius: 15px; /* Adjust to match container or keep square */
  box-shadow: inset -2px 0 5px rgba(0, 0, 0, 0.1); /* Subtle inner shadow for separation */
}

.contact-info-section h3 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.contact-info-section p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 300px;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  font-size: 2rem;
  color: #e0e1dd;
  cursor: pointer;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: #ffffff;
}


/* Right Section Styles (the form) */
.contact-form-section {
  flex: 1.5;
  padding: 2.5rem;
  /* Use a transparent version of your lightest theme color */
  background-color: rgba(224, 225, 221, 0.7); /* #e0e1dd with 70% opacity */
  /* Remove individual border-radius, as container handles it */
  border-top-right-radius: 15px; /* Adjust to match container or keep square */
  border-bottom-right-radius: 15px; /* Adjust to match container or keep square */
}

.contact-form-section h2 {
  text-align: center;
  color: #0d1b2a;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #1b263b;
}

input[type="text"],
input[type="email"],
textarea {
  display: block;
  width: calc(100% - 1.6rem);
  padding: 0.8rem;
  /* Adjust input borders for glassmorphism */
  background-color: rgba(255, 255, 255, 0.2); /* Slight transparency */
  border: 1px solid rgba(255, 255, 255, 0.4); /* Lighter, more subtle border */
  border-radius: 4px;
  font-size: 1rem;
  color: #0d1b2a; /* Ensure text is readable */
  transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  border-color: #415a77;
  outline: none;
  box-shadow: 0 0 0 3px rgba(65, 90, 119, 0.25);
  background-color: rgba(255, 255, 255, 0.4); /* Slightly more transparent on focus */
}

input.error, textarea.error {
  border-color: #dc3545;
}

button {
  display: block;
  width: 100%;
  padding: 0.8rem 1.5rem;
  margin-top: 1.5rem;
  background-color: #415a77; /* Keep solid for button, or make rgba if desired */
  color: #ffffff;
  border: none;
  border-radius: 25px; /* Keep rounder button */
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, opacity 0.2s ease-in-out;
}

button:hover:not(:disabled) {
  background-color: #1b263b;
}

button:disabled {
  background-color: #778da9;
  cursor: not-allowed;
  opacity: 0.7;
}

.success-message {
  color: #28a745;
  margin-top: 1rem;
  text-align: center;
  font-weight: bold;
}

.error-message {
  color: #dc3545;
  margin-top: 0.25rem;
  font-size: 0.875rem;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    max-width: 90%;
    /* Re-apply border-radius for column stacking on container */
    border-radius: 16px;
  }

  .contact-info-section, .contact-form-section {
    padding: 1.5rem;
    flex: none;
    width: 100%;
    /* Ensure individual section border-radius for rounded top/bottom */
  }

  .contact-info-section {
    border-bottom-left-radius: 0; 
    border-bottom-right-radius: 0;
    border-top-left-radius: 15px; 
    border-top-right-radius: 15px; 
  }

  .contact-form-section {
    border-top-left-radius: 0; 
    border-top-right-radius: 0; 
    border-bottom-left-radius: 15px; 
    border-bottom-right-radius: 15px; 
  }
}
</style>