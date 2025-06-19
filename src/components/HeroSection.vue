<template>
  <section class="hero-container">
    <div class="hero-content">
      <h1 class="hero-title" data-aos="fade-up">
        BUD 1.0 <span class="hero-subtitle-brand">(Bot Unit for Detection)</span>
      </h1>
      <p class="hero-tagline" data-aos="fade-up" data-aos-delay="200">
        Smart Room Monitoring System with Real-time Display & Web Dashboard
      </p>
      <p class="hero-description" data-aos="fade-up" data-aos-delay="400">
        Transform abstract environmental data into actionable insights. BUD 1.0 empowers you to create healthier, more comfortable, and more productive indoor environments.
      </p>
      <div class="hero-cta-buttons" data-aos="fade-up" data-aos-delay="600">
        <a href="#features" class="btn btn-primary">See Features</a>
        <a href="#contact" class="btn btn-secondary">Contact Us</a>
      </div>
    </div>
    <div class="hero-visual" data-aos="fade-left" data-aos-delay="300">
      <img
        src="../assets/images/bud1.0.png"
        alt="Gambar Produk BUD 1.0"
        class="product-image"
      >
    </div>
  </section>
</template>

<script setup>
// Tidak ada logic script yang dibutuhkan untuk komponen statis ini
</script>

<style scoped>
.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 90vh;
  padding: 2rem 8%;
  background-color: var(--secondary-blue); /* Biru muda sebagai latar */
  gap: 2rem;
  overflow: hidden;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--dark-blue);
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.hero-subtitle-brand {
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--primary-blue);
  display: block;
}

.hero-tagline {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-blue);
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-color-light);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-visual .product-image {
  width: 100%;
  max-width: 500px; /* Atur lebar maksimal gambar di desktop */
  height: auto; /* Tinggi akan menyesuaikan secara otomatis */
  object-fit: contain; /* Memastikan seluruh gambar terlihat tanpa distorsi */
  filter: drop-shadow(0 10px 20px rgba(0, 86, 179, 0.2)); /* Shadow yang lebih halus */

  /* Menambahkan animasi mengambang */
  animation: float-animation 4s ease-in-out infinite;
}

.hero-cta-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn-primary {
  background-color: var(--primary-blue);
  color: var(--white-color);
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}

.btn-secondary {
  background-color: var(--white-color);
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
}

.btn-secondary:hover {
  background-color: var(--secondary-blue);
  transform: translateY(-3px);
}

.hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Keyframes untuk animasi mengambang */
@keyframes float-animation {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Responsive */
@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
    padding-top: 5rem;
  }

  .hero-cta-buttons {
    justify-content: center;
  }

  .hero-visual .product-image {
    max-width: 300px;
    margin-top: 2rem;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .hero-tagline {
    font-size: 1.2rem;
  }
}
</style>
