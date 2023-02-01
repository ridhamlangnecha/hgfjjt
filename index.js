const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const value = e.target.value;
    const text = display.textContent;
    switch (value) {
      case 'clear':
        display.textContent = '0';
        break;
      case 'backspace':
        display.textContent = text.length > 1 ? text.slice(0, -1) : '0';
        break;
      case '+':
      case '-':
      case '*':
      case '/':
      case '.':
        display.textContent += value;
        break;
      case '=':
        display.textContent = eval(text);
        break;
      default:
        display.textContent === '0' ? (display.textContent = value) : (display.textContent += value);
        break;
    }
  });
});
