function showTab(id, btn) {
  document.querySelectorAll('.tab-content').forEach(function (tab) {
    tab.classList.remove('active');
  });

  document.querySelectorAll('.tab-btn').forEach(function (b) {
    b.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
  let current = '';

  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

const submitBtn = document.querySelector('.submit-btn');
if (submitBtn) {
  submitBtn.addEventListener('click', function () {
    const name    = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const email   = document.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Your Message"]').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    alert('Thank you, ' + name + '! Your message has been sent.');
  });
}

const cvBtn = document.querySelector('.btn-accent');
if (cvBtn) {
  cvBtn.addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'ganesh_cs.pdf';
    link.download = 'ganesh_cs.pdf';
    link.click();
  });
}
