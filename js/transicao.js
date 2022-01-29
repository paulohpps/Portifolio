const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
  }
  const animationClass2 = 'animates';
  const target2 = document.querySelectorAll('[data-por]');
  function animeScroll2() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target2.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass2);
      } else {
        element.classList.remove(animationClass2);
      }
    })
  }
  
  animeScroll2();
  if(target2.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll2();
    }, 200));
  }