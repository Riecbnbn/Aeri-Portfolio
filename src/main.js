import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faImage, faEnvelope, faPaintBrush, faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons' // Import these
library.add(faUser, faImage, faEnvelope, faPaintBrush, faBars);
library.add(faChevronLeft, faChevronRight) // Add them to the library
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router).mount('#app');
