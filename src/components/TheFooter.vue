<template>
  <footer class="footer-container">
    <div class="footer-content">
      <div class="footer-copyright">
        © {{ new Date().getFullYear() }} BUD 1.0. Made with ❤ by
        <a href="https://www.instagram.com/fwzmwrdy" target="_blank" rel="noopener noreferrer">
          <strong>Fawwaz Mufid Wardaya</strong>
        </a> &
        <a href="https://www.instagram.com/adarmaen_" target="_blank" rel="noopener noreferrer">
          <strong>Ardi Darma Eko Nugroho</strong>
        </a>.
      </div>
      <div class="footer-socials">
        <a href="https://github.com/fawwazmw" target="_blank" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/fawwaz-mufid-wardaya/" target="_blank" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  padding: 2rem 8%;
  background-color: var(--dark-blue);
  color: #a9b3c2;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-copyright {
  font-size: 0.9rem;
}

.footer-copyright strong {
  color: var(--white-color);
}

.footer-socials {
  display: flex;
  gap: 1rem;
}

.footer-socials a {
  color: #a9b3c2;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-socials a:hover {
  color: var(--primary-blue);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
