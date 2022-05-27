/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


// const app = new Vue({
//     el: '#app',
// });



let popup = document.querySelector('#popup')

let btnDelete = document.querySelectorAll('.btn-delete')
let title = document.querySelector('#title')
var currentUrl = window.location.href;
if (currentUrl.includes('/posts?') && popup){
    let form = document.querySelector('#form-delete')
    btnDelete.forEach(button => {
        button.addEventListener('click' , function(){
            let id = this.closest('tr').dataset.id;
            let postTitle = this.closest('tr').dataset.title;
            title.innerHTML = postTitle
            console.log(title.innerHTML.length)
            let rep = form.dataset.base.replace('*****', id);
            form.action = rep;
            popup.classList.remove('d-none');
            popup.classList.add('d-flex');
        })
    })
    let btnSi = document.querySelector('#btn-si').addEventListener('click', function(){
        form.submit()
    })
}

let btnDeleteShow = document.querySelector('.btn-delete-show')

if (btnDeleteShow){
    let form = document.querySelector('#form-delete')
        btnDeleteShow.addEventListener('click' , function(){
            popup.classList.remove('d-none');
            popup.classList.add('d-flex');
    })
    let btnSi = document.querySelector('#btn-si').addEventListener('click', function(){
        form.submit()
    })
}


let slugBtn = document.querySelector('#slug')
if (slugBtn) {
    let slugInput = document.querySelector('#slug-input')
    let titleInput = document.querySelector('#title-input')

    slugBtn.addEventListener('click' , function() {
        let slug = titleInput.value.split(' ').join('-')
        slugInput.value = slug
    })
}
