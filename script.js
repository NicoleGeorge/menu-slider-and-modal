const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// TOGGLE NAV

toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});


