<template>
  <div>
    <Navbar />
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
.content {
  padding-top: 20vh; /* Adjust for the height of your navbar */
  overflow-y: auto; /* Allow vertical scrolling within main */
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
}

main::-webkit-scrollbar {
  display: none; /* Hide scrollbar in Webkit-based browsers */
}

.content-item {
  padding: 20px;
  border-bottom: 1px solid #ddd;
}
</style>
