// qty.js — Quantity selector (+ / - buttons)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.qty-wrap').forEach(wrap => {
    const input = wrap.querySelector('.qty-input');
    wrap.querySelector('.qty-minus').addEventListener('click', () => {
      if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
    });
    wrap.querySelector('.qty-plus').addEventListener('click', () => {
      input.value = parseInt(input.value) + 1;
    });
  });
});
