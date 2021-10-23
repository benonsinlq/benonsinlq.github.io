
var routes = [{
    path: '/',
    name: 'app',
    component: httpVueLoader('./components/App.vue'),
}];
var router = new VueRouter({
    routes
});
const app = new Vue({
    router
}).$mount('#app');
