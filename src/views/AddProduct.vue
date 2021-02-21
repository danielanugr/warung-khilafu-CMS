<template>
  <a-layout id="Navbar">
    <Navbar />
    <a-layout-content>
      <a-form-model
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        @submit.prevent="addProduct"
      >
        <h1>Add Product</h1>
        <a-form-model-item ref="name" label="Product Name" prop="name">
          <a-input v-model="inputAddName"></a-input>
        </a-form-model-item>
        <a-form-model-item ref="imageUrl" label="Image URL" prop="imageUrl">
          <a-input v-model="inputAddUrl" placeholder="Image URL here" />
        </a-form-model-item>
        <a-form-model-item ref="price" label="Price" prop="price">
          <a-input-number
            v-model="inputAddPrice"
            :min="1"
            style="width:100%;"
          />
        </a-form-model-item>
        <a-form-model-item ref="stocks" label="Stocks" prop="stocks">
          <a-input-number
            v-model="inputAddStock"
            :min="0"
            style="width:100%;"
          />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" html-type="submit">
            Add Product
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-layout-content>
  </a-layout>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'AddProduct',
  components: {
    Navbar
  },
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      inputAddName: '',
      inputAddUrl: '',
      inputAddPrice: '',
      inputAddStock: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.inputAddName,
        image_url: this.inputAddUrl,
        price: +this.inputAddPrice,
        stock: +this.inputAddStock
      }
      console.log(payload)
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style></style>
