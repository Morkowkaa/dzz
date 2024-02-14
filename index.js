// IFFE
(() => {
    // 1)ОТримуємо доступ до HTML елементів
    const refs = {
      openMenuButton: document.querySelector('.open-menu--button'),
      // openMenuButton: document.querySelector(
      //   '.вставте клас який на кнопці відкриття мобільного меню'
      // ),
      closeMenuButton: document.querySelector('.close-button'),
      // closeMenuButton: document.querySelector('.кнопка закриття мобільного меню'),
      mobileMenu: document.querySelector('.mobile-menu'),
      // mobileMenu: document.querySelector('.стиль який лежить на мобільно меню'),
    };
  
    // 2) Маємо відстежити подію кліку на кнопці відкриття мобільного меню
    // Для цього додамо слухач події(addEventListener)
  
    refs.openMenuButton.addEventListener('click', toggleMenu);
    refs.closeMenuButton.addEventListener('click', toggleMenu);
  
    // 3) Описати JS шо робити при кліку
    // e - це обʼєкт події
    function toggleMenu(e) {
      console.log(e);
      refs.mobileMenu.classList.toggle('is-hidden');
    }
  })();