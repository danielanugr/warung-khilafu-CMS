<template>
  <a-layout id="Navbar">
    <Navbar />
    <a-layout-content>
      <a-form-model
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        @submit.prevent="editProduct"
      >
        <hr />
        <h1>Edit Product</h1>
        <hr />
        <a-form-model-item ref="name" label="Product Name" prop="name">
          <a-input v-model="inputEditName"></a-input>
        </a-form-model-item>
        <a-form-model-item ref="imageUrl" label="Image URL" prop="imageUrl">
          <a-input v-model="inputEditUrl" placeholder="Image URL here" />
        </a-form-model-item>
        <a-form-model-item ref="price" label="Price" prop="price">
          <a-input-number
            v-model="inputEditPrice"
            :min="1"
            style="width:100%;"
          />
        </a-form-model-item>
        <a-form-model-item ref="stocks" label="Stocks" prop="stocks">
          <a-input-number
            v-model="inputEditStock"
            :min="0"
            style="width:100%;"
          />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" html-type="submit">
            Edit Product
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-layout-content>
  </a-layout>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'EditForm',
  components: {
    Navbar
  },
  data () {
    return {
      id: this.$store.state.editProductData.id,
      inputEditName: this.$store.state.editProductData.name,
      inputEditUrl: this.$store.state.editProductData.image_url,
      inputEditPrice: this.$store.state.editProductData.price,
      inputEditStock: this.$store.state.editProductData.stock
    }
  },
  methods: {
    editProduct () {
      const payload = {
        name: this.inputEditName,
        image_url: this.inputEditUrl,
        price: this.inputEditPrice,
        stock: this.inputEditStock
      }
      this.$store.dispatch('editProduct', { id: this.id, editedData: payload })
    }
  }
}
</script>

<style></style>
