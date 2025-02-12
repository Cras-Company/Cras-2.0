import { arrayOfProducts } from './array-products_&_search.js';

import {
  createMobileListItemsMarkup,
  createModalListItemsMarkup,
} from './markups.js';

// ===========================================================================
// Кнопка ДАЛЕЕ
// ===========================================================================

const JSSectionOne = document.querySelectorAll(".js-section-none");

const initialLoadCount = 2;
const loadCountOnScroll = 5;
let itemsLoaded = 0;
let isFirstLoad = true;

export function loadItems() {
  const countToLoad = isFirstLoad ? initialLoadCount : loadCountOnScroll;
  const visibleItems = arrayOfProducts.slice(itemsLoaded, itemsLoaded + countToLoad);

  visibleItems.forEach(({ element, items, block }) => {
    element.style.display = "flex";

    const section = element.closest(".js-section-none");

    if (section) {
      section.style.display = "block";
    }

    if (block) {
      block.style.display = "block";
      element.innerHTML = createMobileListItemsMarkup(items);
      lazyLoadImagesAnimation();
    }
  });

  itemsLoaded += countToLoad;
  isFirstLoad = false;
}

export const loadMoreButton = document.querySelector('.js-button-next');

loadMoreButton.addEventListener('click', () => {
  loadMoreButton.disabled = true; // Блокируем кнопку на время выполнения
  loadItems();

  // Проверяем, есть ли ещё элементы для загрузки
  if (itemsLoaded >= arrayOfProducts.length) {
    loadMoreButton.style.display = 'none'; // Скрываем кнопку, если все элементы загружены
  } else {
    setTimeout(() => {
      loadMoreButton.disabled = false; // Возвращаем кнопку в исходное состояние
    }, 250); // Задержка для визуального эффекта
  }
});

// ===========================================================================
// Сброс разметки
// ===========================================================================

export function resetMarkup() {
  arrayOfProducts.forEach(product => {
    product.element.style.display = "block";
    product.block.style.display = "block";
  });

  JSSectionOne.forEach(section => {
    section.style.display = "block";
  });
}

export function hideAllSectionsAndProducts() {
  JSSectionOne.forEach(section => {
    section.style.display = "none";
  });

  arrayOfProducts.forEach(product => {
    product.element.style.display = "none";
    if (product.block) {
      product.block.style.display = "none";
    }
  });
}

// ===========================================================================
// Анимация Lazy-loading
// ===========================================================================

// if ('loading' in HTMLImageElement.prototype) {
//   const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  
//   lazyImages.forEach(img => {
//     img.src = img.dataset.src;
//   });
// } else {
//   const script = document.createElement('script');

//   script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
//   script.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
//   script.crossOrigin = "anonymous";
//   script.referrerpolicy = "no-referrer"

//   document.body.appendChild(script);
// }

export function lazyLoadImagesAnimation() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(image => {image.addEventListener(
    "load",
    function () { image.classList.add("appear") },
    { once: true });
  });
}

// ===========================================================================
// Прокрутка при поиске
// ===========================================================================

export function jumpBurger(event) {

  const iconElement = event.currentTarget; 
  const parentBlock = iconElement.closest('.js-modal__burger-item');
  const modalContent = document.querySelector(".modal-content"); 

  setTimeout(() => {
    const offsetTop = parentBlock.offsetTop - modalContent.offsetTop;
    
    modalContent.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }, 500);
}

export function jumpOnMainPage() {
  const filterMenuElement = document.querySelector(".js-swiper");

  if (filterMenuElement) {
    filterMenuElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ===========================================================================
// Анимация иконки описания товаров
// ===========================================================================

export function iconsDescriptionAnimation() {
  const crasItems = document.querySelectorAll('.cras-item');

  crasItems.forEach((crasItem) => {
    const priceDescriptionIconsBlocks = crasItem.querySelectorAll(".js-price__box");
    const priceIconsOpen = crasItem.querySelectorAll(".js-price__icon-open");
    const priceIconsClose = crasItem.querySelectorAll(".js-price__icon-close");
    const priceLotsDescription = crasItem.querySelectorAll(".js-price__lot-description");

    priceDescriptionIconsBlocks.forEach((menu, index) => {
      menu.addEventListener("click", (event) => {
        event.stopPropagation();
        const iconEyeClose = priceIconsClose[index];
        const iconEyeOpen = priceIconsOpen[index];
        const listEye = priceLotsDescription[index];

        iconEyeClose.classList.toggle("js-icon-close");
        iconEyeOpen.classList.toggle("js-icon-open");
        listEye.classList.toggle("js-price__lot-description-open");

        const scrollAmount = 300;
        const duration = 1000;
        const startScrollTop = crasItem.scrollTop;
        const startTime = performance.now();

        function scrollStep(timestamp) {
          const currentTime = timestamp - startTime;
          const scrollProgress = currentTime / duration;

          if (scrollProgress < 1) {
            const newScrollTop = startScrollTop + scrollAmount * scrollProgress;
            crasItem.scrollTop = newScrollTop;
            requestAnimationFrame(scrollStep);
          } else {
            crasItem.scrollTop = startScrollTop + scrollAmount;
          }
        }

        requestAnimationFrame(scrollStep);
      });
    });
  });
}
