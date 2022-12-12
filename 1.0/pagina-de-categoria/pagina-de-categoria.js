/* === HEADER OF PAGE ================================*/
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}


/* === CATEGORIES PAGE ================================*/
var teste = document.querySelector('.sub_cat_1.splide__slide--clone');
console.log(teste)

function focus1() {
  document.querySelector('.sub_cat_2.is-visible').classList.remove('focus')
  document.querySelector('.sub_cat_3.is-visible').classList.remove('focus')
  document.querySelector('.sub_cat_4').classList.remove('focus')
  document.querySelector('.sub_cat_5').classList.remove('focus')
  document.querySelector('.sub_cat_1.is-visible').classList.add('focus')
}

function focus2() {
  document.querySelector('.sub_cat_1.is-visible').classList.remove('focus')
  document.querySelector('.sub_cat_3.is-visible').classList.remove('focus')
  document.querySelector('.sub_cat_4').classList.remove('focus')
  document.querySelector('.sub_cat_5').classList.remove('focus')
  document.querySelector('.sub_cat_2.is-visible').classList.add('focus')
}

function focus3() {
  if (document.querySelector('.sub_cat_1.splide__slide--clone') == none) {
    document.querySelector('.sub_cat_1.is-visible').classList.remove('focus')
  } else {
    document.querySelector('.sub_cat_1.splide__slide--clone').classList.remove('focus')
  }

  if (document.querySelector('.sub_cat_2.splide__slide--clone') == none) {
    document.querySelector('.sub_cat_2.is-visible').classList.remove('focus')
  } else {
    document.querySelector('.sub_cat_2.splide__slide--clone').classList.remove('focus')
  }

  if (document.querySelector('.sub_cat_4.splide__slide--clone') == none) {
    document.querySelector('.sub_cat_4.is-visible').classList.remove('focus')
  } else {
    document.querySelector('.sub_cat_4.splide__slide--clone').classList.remove('focus')
  }

  if (document.querySelector('.sub_cat_5.splide__slide--clone') == none) {
    document.querySelector('.sub_cat_5.is-visible').classList.remove('focus')
  } else {
    document.querySelector('.sub_cat_5.splide__slide--clone').classList.remove('focus')
  }
  
  document.querySelector('.sub_cat_3.is-visible').classList.add('focus')
}

function focus4() {
  document.querySelector('.sub_cat_1').classList.remove('focus')
  document.querySelector('.sub_cat_2').classList.remove('focus')
  document.querySelector('.sub_cat_3').classList.remove('focus')
  document.querySelector('.sub_cat_5').classList.remove('focus')
  document.querySelector('.sub_cat_4.is-visible').classList.add('focus')
}

function focus5() {
  document.querySelector('.sub_cat_1').classList.remove('focus')
  document.querySelector('.sub_cat_2').classList.remove('focus')
  document.querySelector('.sub_cat_3').classList.remove('focus')
  document.querySelector('.sub_cat_4').classList.remove('focus')
  document.querySelector('.sub_cat_5.is-visible').classList.add('focus')
}



