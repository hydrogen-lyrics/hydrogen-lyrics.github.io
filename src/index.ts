import { createApp } from 'vue';

// Global stylesheets
import '@/index.css';

// Vue plugins
import router from '@/router';

// Root component
import App from '@/App.vue';

// Create application
createApp(App).use(router).mount('#root');
