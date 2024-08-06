<template>
  <div class="home-container">
    <h1>Hai</h1>
    <!-- Add more content here to enable scrolling -->
    <div v-for="n in 50" :key="n" class="content-item">
      Content item {{ n }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* Remove scrollbars */
}

.home-container
{   
    overflow: hidden;
}
.content-item {
  padding: 20px;
}
</style>
