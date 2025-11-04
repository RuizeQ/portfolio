// ----- DARK MODE TOGGLE -----
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Load saved theme preference
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Toggle dark/light mode
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  }
});

/* ===============================
   CONTACT FORM SUBMISSION (Formspree)
================================= */
const form = document.querySelector('.contact-form');

// Create a container for the success message
const successMessage = document.createElement('div');
successMessage.className = 'success-message';
successMessage.style.display = 'none';
form.parentNode.insertBefore(successMessage, form.nextSibling);

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent page reload

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      successMessage.textContent = '✅ Thank you! Your message has been sent successfully.';
      successMessage.style.display = 'block';
      form.reset();
    } else {
      successMessage.textContent = '❌ Oops! Something went wrong. Please try again later.';
      successMessage.style.display = 'block';
    }
  } catch (error) {
    successMessage.textContent = '❌ Network error. Please try again later.';
    successMessage.style.display = 'block';
  }
});
