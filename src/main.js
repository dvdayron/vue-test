import { createApp } from 'vue'

// vuex store
import AppStore from './store/app.store'

// PrimeVue config
import PrimeVue from 'primevue/config'

// PrimeVue theme
import 'primevue/resources/themes/fluent-light/theme.css'
import 'primeicons/primeicons.css'

// PrimeVue components
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Badge from 'primevue/badge';
import Rating from 'primevue/rating';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

// common styles
import './style.css'

// app bootstrap
import App from './App.vue'

const app = createApp(App);

// add store
app.use(AppStore)

// load prime vue dependency
app.use(PrimeVue)

// load primevue components
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('InputText', InputText);
app.component('Badge', Badge);
app.component('Rating', Rating);
app.component('Button', Button);
app.component('Divider', Divider);
 
// render main app
app.mount('#app')
