<template>
  <section id="contact" class="cta-container">
    <div class="cta-content" data-aos="zoom-in">
      <h2 class="cta-title">See BUD 1.0 in Action.</h2>
      <p class="cta-subtitle">
        Ready to take control of your indoor environment? Watch our demo video or contact us for more information.
      </p>
      <div class="cta-buttons">
        <a href="https://youtu.be/RyWNthagPSo?si=m3dvXUCS89iTGeSy" target="_blank" class="btn btn-light">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="btn-icon"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          Watch Demo Video
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-container {
  padding: 6rem 8%;
  background-color: var(--primary-blue);
  /* Anda bisa menggunakan gradient untuk tampilan lebih dinamis */
  /* background: linear-gradient(45deg, var(--dark-blue), var(--primary-blue)); */
  text-align: center;
  color: var(--white-color);
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-light {
  background-color: var(--white-color);
  color: var(--primary-blue);
}

.btn-light:hover {
  background-color: var(--secondary-blue);
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-icon {
  width: 20px;
  height: 20px;
}
</style>
