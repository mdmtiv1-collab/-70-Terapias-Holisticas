document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Countdown Timer (15 min)
  let timeInSeconds = 15 * 60;
  const timerElement = document.getElementById('timer');

  function updateTimer() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeInSeconds > 0) {
      timeInSeconds--;
    } else {
      timeInSeconds = 15 * 60; // reset
    }
  }
  setInterval(updateTimer, 1000);

  // 2. FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      item.classList.toggle('active');
    });
  });

  // 3. Social Proof Toast Notifications
  const sales = [
    { name: 'María S.', city: 'Bogotá, Colombia', time: 'hace 2 minutos' },
    { name: 'Lucía G.', city: 'Ciudad de México', time: 'hace 4 minutos' },
    { name: 'Carlos M.', city: 'Santiago, Chile', time: 'hace 1 minuto' },
    { name: 'Valeria R.', city: 'Madrid, España', time: 'hace 6 minutos' },
    { name: 'Andrea K.', city: 'Buenos Aires, Argentina', time: 'hace 3 minutos' },
    { name: 'Sofía P.', city: 'Lima, Perú', time: 'hace 5 minutos' }
  ];

  const toast = document.getElementById('social-toast');
  const toastName = document.getElementById('toast-name');
  const toastCity = document.getElementById('toast-city');
  const toastAvatar = document.getElementById('toast-avatar');
  let saleIndex = 0;

  function showToast() {
    if (!toast) return;
    const sale = sales[saleIndex];
    toastName.textContent = sale.name;
    toastCity.textContent = `${sale.city} • ${sale.time}`;
    toastAvatar.textContent = sale.name.charAt(0);

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);

    saleIndex = (saleIndex + 1) % sales.length;
  }
  // Show first toast after 3 seconds, then cycle every 12 seconds
  setTimeout(showToast, 3000);
  setInterval(showToast, 12000);
});
