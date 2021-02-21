<template>
  <a-layout id="Navbar">
    <Navbar />
    <a-layout-content style="overflow: auto">
      <hr />
      <h2 class="">List of Products</h2>
      <hr />
      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            v-for="(product, count) in products"
            :key="product.id"
            :product="product"
            :count="count"
          >
          </TableRow>
        </tbody>
      </table>
    </a-layout-content>
  </a-layout>
</template>

<script>
import Navbar from '../components/Navbar'
import TableRow from '../components/TableRowProducts'

export default {
  name: 'Home',
  components: {
    Navbar,
    TableRow
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
#Navbar {
  height: 100vh;
}
</style>
