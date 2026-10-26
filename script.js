const counterValue = document.getElementById('counter-value');
const increaseBtn = document.getElementById('increase-btn');
const resetBtn = document.getElementById('reset-btn');

let count = 0;

function render() {
  counterValue.textContent = count;
}

increaseBtn.addEventListener('click', () => {
  count += 1;
  render();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  render();
});
