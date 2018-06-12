import Vue from 'vue/dist/vue.esm'
import Router from 'vue-router'
import store from '../store'
import Login from '../pages/login'
import Main from '../components/main'

function route (path, name, file, authMethod) {
  return {
    path,
    name,
    component: file,
    beforeEnter: authMethod
  }
}

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.state.auth) {
    next()
    return
  }
  next('/dashboard')
}

const ifAuthenticated = (to, from, next) => {
  if (store.state.auth) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  routes: [
    route('/login', 'Login', Login, ifNotAuthenticated),
    route('/dashboard', 'Dashboard', Main, ifAuthenticated),
  ]
})
