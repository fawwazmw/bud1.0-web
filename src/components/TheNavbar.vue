// src/components/TheNavbar.vue

<template>
  <header class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-container">
      <a href="#" class="navbar-logo">BUD 1.0</a>

      <nav :class="['nav-links', { 'active': isMenuOpen }]">
        <a href="#features" @click="closeMenu">Features</a>
        <a href="#how-it-works" @click="closeMenu">How It Works</a>
        <a href="#contact" @click="closeMenu">Contact</a>
      </nav>

      <div class="hamburger" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Base Navbar Style */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.2rem 8%;
  z-index: 1000;
  transition: background-color 0.4s ease, box-shadow 0.4s ease;
  background-color: transparent;
  box-sizing: border-box; /* Penting untuk perhitungan padding */
}

/* Scrolled State */
.navbar.scrolled {
  background-color: var(--white-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}

.navbar-logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--dark-blue);
  text-decoration: none;
  /* Mencegah logo memakan tempat terlalu banyak */
  flex-shrink: 0;
}

/* Desktop Navigation Links */
.nav-links {
  display: flex;
  align-items: center;
  /* MENGGUNAKAN 'gap' BUKAN 'margin' PADA ANAKNYA. INI SOLUSI UTAMA */
  gap: 2.5rem;
}

.nav-links a {
  text-decoration: none;
  font-weight: 600;
  color: var(--text-color);
  position: relative;
  transition: color 0.3s ease;
  white-space: nowrap; /* Mencegah teks seperti 'Cara Kerja' turun baris */
}

.nav-links a:hover {
  color: var(--primary-blue);
}

.nav-links a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-blue);
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

/* Hamburger Icon (hidden on desktop) */
.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background-color: var(--dark-blue);
  border-radius: 2px;
}

/* --- Responsive Styles for Mobile (max-width: 768px) --- */
@media (max-width: 768px) {
  .hamburger {
    display: block;
    z-index: 1001;
  }

  /* Sembunyikan nav-links versi desktop */
  .nav-links {
    /* Atur ulang semua properti untuk mobile */
    display: flex;
    position: fixed;
    right: -100%;
    top: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    padding-top: 6rem;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;
    background-color: var(--white-color);
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1);
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links a {
    font-size: 1.2rem;
    color: var(--dark-blue);
    width: 100%;
    text-align: center;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
