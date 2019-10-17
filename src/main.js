import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';


Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBtDf0M4d6DCLLXsZ7BRlc4hzQHHI0kGZc",
    authDomain: "vuetify-calendar.firebaseapp.com",
    databaseURL: "https://vuetify-calendar.firebaseio.com",
    projectId: "vuetify-calendar",
    storageBucket: "vuetify-calendar.appspot.com",
    messagingSenderId: "205712808747",
    appId: "1:205712808747:web:d2ef315814ebaa966a036e"
})

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
