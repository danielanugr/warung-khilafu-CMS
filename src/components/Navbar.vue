<template>
  <a-layout-sider>
    <h5 class="text-light text-center">Ecommerce CMS</h5>
    <a-menu
      theme="dark"
      mode="inline"
      :default-selected-keys="['product']"
      :default-open-keys="['viewProducts']"
    >
      <a-sub-menu key="product">
        <span slot="title"><a-icon type="shop" theme="filled" />Product</span>
        <a-menu-item key="viewProducts">
          <router-link to="/home" />View Products</a-menu-item
        >
        <a-menu-item key="addProduct">
          <router-link to="/products/add" />
          Add Product
        </a-menu-item>
      </a-sub-menu>
      <!-- <a-sub-menu key="category">
        <span slot="title">
          <a-icon type="tags" theme="filled" />Category
        </span>
        <a-menu-item key="viewCategories">
          <router-link to="/categories" />View Categories</a-menu-item
        >
        <a-menu-item key="addCategory">
          <router-link to="/categories/add" />Add Category</a-menu-item
        >
      </a-sub-menu> -->
      <a-sub-menu key="banner">
        <span slot="title"
          ><a-icon type="schedule" theme="filled" />Banner</span
        >
        <a-menu-item key="viewBanners">View Banners</a-menu-item>
        <a-menu-item key="addBanner">
          Add Banner
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="logout" @click="logout"
        ><a-icon type="logout" />Logout</a-menu-item
      >
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
<style>
#Navbar {
  height: 100vh;
}
</style>
