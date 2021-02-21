<template>
  <tr>
    <th scope="row">{{ count + 1 }}</th>
    <td><img :src="product.image_url" width="150px" alt="" /></td>
    <td>{{ product.name }}</td>
    <td>{{ price }}</td>
    <td>{{ product.stock }}</td>
    <td>
      <button class="btn btn-outline-info mr-2" @click="editProduct">
        Edit
      </button>
      <a-popconfirm
        title="Are you sure delete this product?"
        ok-text="Yes"
        cancel-text="No"
        @confirm="deleteProduct(product.id)"
        @cancel="cancel"
      >
        <button class="btn btn-outline-danger">
          Delete
        </button>
      </a-popconfirm>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TableRowProducts',
  props: ['product', 'count'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
      this.$message.success('Product deleted')
    },
    editProduct () {
      const payload = {
        id: this.product.id,
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock
      }
      this.$store.commit('SET_EDITPRODUCTDATA', payload)
      this.$store.dispatch('showEditForm')
    },
    cancel () {
      this.$message.error('Delete Cancelled')
    }
  },
  computed: {
    price () {
      var rupiah = ''
      var int = this.product.price
        .toString()
        .split('')
        .reverse()
        .join('')
      for (var i = 0; i < int.length; i++) {
        if (i % 3 === 0) rupiah += int.substr(i, 3) + '.'
      }
      return (
        'Rp. ' +
        rupiah
          .split('', rupiah.length - 1)
          .reverse()
          .join('')
      )
    }
  }
}
</script>

<style></style>
