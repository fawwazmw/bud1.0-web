<template>
  <section id="features" class="features-container">
    <div class="features-header">
      <h2 class="section-title">Complete Solution in One Hand</h2>
      <p class="section-subtitle">
        From real-time device monitoring to historical data analysis on the web, BUD 1.0 provides a fully integrated ecosystem.
      </p>
    </div>
    <div class="features-grid">
      <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
        <div class="feature-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h- situazione a vapore;-4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6l-4-2Z"/><path d="M14 2v4h-4"/><path d="M4 10h16"/><path d="M8 14h2"/><path d="M8 18h2"/><path d="m14 14 2 2 2-2"/><path d="m14 18 2 2 2-2"/></svg>
        </div>
        <h3 class="feature-card__title">Monitoring Real-time</h3>
        <p class="feature-card__description">
          Monitor Temperature, Humidity (DHT22), and Air Quality (MQ-135) in real time to provide comprehensive environmental awareness.
        </p>
      </div>

      <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
        <div class="feature-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <h3 class="feature-card__title">Interactive OLED Display</h3>
        <p class="feature-card__description">
          The 0.96-inch display has a unique dual-mode, switching between actual data and animated 'eyes' that give your device personality.
        </p>
      </div>

      <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
        <div class="feature-card__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
        </div>
        <h3 class="feature-card__title">Web Analytics Dashboard</h3>
        <p class="feature-card__description">
          Access historical data through Laravel & Filament dashboards. Analyze CO2 trends with dynamic graphs that can be filtered by time.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Tidak ada logic script yang dibutuhkan
</script>

<style scoped>
.features-container {
  padding: 6rem 8%;
  background-color: var(--white-color);
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--dark-blue);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--text-color-light);
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: #fff;
  border: 1px solid #eef2f7;
  border-radius: var(--border-radius);
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 123, 255, 0.1);
  border-color: var(--primary-blue);
}

.feature-card__icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--secondary-blue);
  color: var(--primary-blue);
  margin-bottom: 1.5rem;
}

.feature-card__title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--dark-blue);
  margin-bottom: 0.75rem;
}

.feature-card__description {
  font-size: 1rem;
  color: var(--text-color-light);
  line-height: 1.6;
}
</style>
