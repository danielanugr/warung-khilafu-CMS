import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    products: [],
    editProductData: []
  },
  mutations: {
    LOGIN (state) {
      state.isLoggedIn = true
    },
    LOGOUT (state) {
      state.isLoggedIn = false
    },
    FETCH_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_EDITPRODUCTDATA (state, data) {
      state.editProductData = data
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      axios
        .post('/login', {
          email,
          password
        })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          context.commit('LOGIN')
          router.push('/home')
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout (context) {
      localStorage.clear()
      context.commit('LOGOUT')
      router.push('/')
    },
    fetchProducts (context) {
      axios
        .get('/products', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          this.commit('FETCH_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios
        .post('/products', payload, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
          router.push('/home')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      const { id, editedData } = payload
      axios
        .put(`/products/${id}`, editedData, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
          router.push('/home')
        })
    },
    showEditForm () {
      router.push('/products/edit')
    },
    deleteProduct (context, payload) {
      axios
        .delete(`/products/${payload}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
        })
    }
  },
  modules: {}
})
