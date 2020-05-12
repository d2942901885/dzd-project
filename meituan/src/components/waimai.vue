<template>
  <div class="waimai">
   <!-- <h1>{{ msg }}</h1> -->
	<h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  name: 'waimai',
  data () {
    return {
      // msg: '打样了',
			name:this.$route.params.name,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

