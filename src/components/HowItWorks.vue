<template>
  <section id="how-it-works" class="how-it-works-container">
    <div class="how-it-works-header">
      <h2 class="section-title">How does it work?</h2>
      <p class="section-subtitle">
        A seamless process in four simple steps, from raw data to valuable insights.
      </p>
    </div>
    <div class="steps-timeline">
      <div class="step-item" data-aos="fade-right">
        <div class="step-visual">
          <div class="step-number">01</div>
          <div class="step-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12s2.545-5 7-5c4.455 0 7 5 7 5s-2.545 5-7 5c-4.455 0-7-5-7-5z"/><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5"/><path d="M3 16.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.5"/></svg>
          </div>
        </div>
        <div class="step-content">
          <h3 class="step-title">Sensor Detection</h3>
          <p class="step-description">
            The device actively monitors and records temperature, humidity and air quality data around you continuously.
          </p>
        </div>
      </div>

      <div class="step-item" data-aos="fade-right" data-aos-delay="200">
        <div class="step-visual">
          <div class="step-number">02</div>
          <div class="step-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10v-4a5 5 0 0 1 10 0v4"/></svg>
          </div>
        </div>
        <div class="step-content">
          <h3 class="step-title">Instant Data View</h3>
          <p class="step-description">
            The recorded data is instantly displayed on the OLED screen, giving you instant information and interactive visuals.
          </p>
        </div>
      </div>

      <div class="step-item" data-aos="fade-right" data-aos-delay="400">
        <div class="step-visual">
          <div class="step-number">03</div>
          <div class="step-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V16c0-1.1-.9-2-2-2h-1.5v-1.5c0-.8-.7-1.5-1.5-1.5H12V9H9.5c-.8 0-1.5.7-1.5 1.5V12H3.5c-.8 0-1.5.7-1.5 1.5V18c0 1.1.9 2 2 2h12.5v2Z"/><path d="M22 10.5V9c0-1.1-.9-2-2-2h-3.5v1.5c0 .8.7 1.5 1.5 1.5H20c1.1 0 2 .9 2 2v1.5Z"/><path d="M16 4.5V3c0-1.1-.9-2-2-2h-3.5v1.5c0 .8.7 1.5 1.5 1.5H14c1.1 0 2 .9 2 2v1.5Z"/></svg>
          </div>
        </div>
        <div class="step-content">
          <h3 class="step-title">Transmission to Cloud</h3>
          <p class="step-description">
            Every 30 seconds, data is sent and stored securely in a central backend for historical logging and analysis.
          </p>
        </div>
      </div>

      <div class="step-item" data-aos="fade-right" data-aos-delay="600">
        <div class="step-visual">
          <div class="step-number">04</div>
          <div class="step-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          </div>
        </div>
        <div class="step-content">
          <h3 class="step-title">Analysis on Dashboard</h3>
          <p class="step-description">
            Open the web dashboard to view trends, filter data by time, and gain in-depth insights from historical data.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-it-works-container {
  padding: 6rem 8%;
  background-color: var(--secondary-blue);
}

.how-it-works-header {
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

.steps-timeline {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.steps-timeline::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 5%;
  right: 5%;
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    var(--primary-blue),
    var(--primary-blue) 6px,
    transparent 6px,
    transparent 12px
  );
  z-index: 1;
}

.step-item {
  position: relative;
  background-color: #fff;
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
  flex: 1;
  z-index: 2;
  border: 1px solid #eef2f7;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.step-number {
  position: absolute;
  top: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--white-color);
  color: var(--primary-blue);
  font-weight: 700;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  border: 2px solid var(--secondary-blue);
}

.step-icon {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-blue);
}

.step-title {
  font-size: 1.25rem;
  color: var(--dark-blue);
  margin-bottom: 0.5rem;
}

.step-description {
  font-size: 0.95rem;
  color: var(--text-color-light);
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 992px) {
  .steps-timeline {
    flex-direction: column;
    position: relative;
    padding-left: 20px;
  }

  .steps-timeline::before {
    top: 2rem;
    bottom: 2rem;
    left: 10px;
    width: 2px;
    height: auto;
    right: auto;
  }

  .step-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
    text-align: left;
    padding: 1rem 0;
    background: transparent; /* Hapus background putih di mobile agar menyatu */
    border: none; /* Hapus border di mobile */
    box-shadow: none; /* Hapus shadow di mobile */
  }

  .step-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 60px;
  }

  .step-number {
    position: static;
    transform: none;
    margin-bottom: 0.5rem;
    padding: 0.25rem 0.75rem; /* Sedikit kecilkan padding */
    font-size: 1.2rem; /* Sedikit kecilkan font */
  }

  .step-icon {
    position: static;
    transform: none;
    margin: 0;
  }

  .step-content {
    flex-grow: 1;
  }

  .step-title, .step-description {
    padding-left: 0;
  }
}
</style>
