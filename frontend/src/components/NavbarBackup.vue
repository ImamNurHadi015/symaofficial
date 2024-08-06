<template>
  <div class="navbar">
    <div class="navbar-brand">SYMA</div>
    <ul>
      <li><router-link class="nav-link home" to="/">HOME</router-link></li>
      <li><router-link class="nav-link catalogue" to="/catalogue">CATALOGUE</router-link></li>
      <li><router-link class="nav-link favorites" to="/favorites">FAVORITES</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const brand = document.querySelector('.navbar-brand');
      const navbar = document.querySelector('.navbar');
      if (scrollPosition > 50) {
        brand.style.fontSize = '20px'; // Smaller size when scrolling
        navbar.style.height = '17vh'; // Smaller height when scrolling
      } else {
        brand.style.fontSize = '30px'; // Original size
        navbar.style.height = '20vh'; // Original height
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #F6F5F2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2% 2vh; /* Space on sides and bottom */
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  min-height: 17vh; /* Ensure a minimum height */
  max-height: 20vh;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
  transition: height 0.3s;
}

.navbar-brand {
  color: #201E43;
  margin-top: 2%;
  font-size: 6vh; /* Initial font size */
  transition: font-size 0.3s; /* Smooth transition for font size */
  margin-bottom: 10px; /* Space between brand and nav items */
}

.navbar ul {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
}

.navbar ul li {
  margin: 0 15px; /* Space out the nav items */
  display: flex;
  align-items: center; /* Center vertically */
}

.nav-link {
  color: #201E43;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 15px; /* Curved corners */
  transition: background-color 0.3s, color 0.3s; /* Smooth transition */
  display: inline-block; /* Ensures padding is applied correctly */
  margin: 0; /* Remove default margin */
}

.nav-link:hover {
  color: #fff; /* Text color on hover */
}

.nav-link.home:hover {
  background-color: #4CAF50; /* Green */
}

.nav-link.catalogue:hover {
  background-color: #2196F3; /* Blue */
}

.nav-link.favorites:hover {
  background-color: #f44336; /* Red */
}

/* Responsive design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    height: auto; /* Adjust height to fit content */
  }

  .navbar ul {
    flex-direction: column;
    align-items: center;
  }

  .navbar ul li {
    margin: 10px 0; /* Add margin between nav items */
  }

  .nav-link {
    padding: 10px 15px;
  }

  .navbar-brand {
    font-size: 4vh; /* Smaller font size for mobile */
  }
}

@media (max-width: 480px) {
  .navbar-brand {
    font-size: 3vh; /* Even smaller font size for very small screens */
  }

  .nav-link {
    padding: 8px 10px;
  }
}
</style>
