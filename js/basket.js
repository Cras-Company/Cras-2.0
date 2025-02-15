import {
  USDTRate,
  createBasketListItemsMarkup
} from './markups.js';

import {
  refs,
  onOpenModal,
  onCloseModal
} from './modal.js'

// Новинки
import { shopLotsNewItems } from "./array-new-items.js";
// Акция
import { shopLotsSale } from "./array-sale.js";

// Продукты
import { shopLotsNoodles } from "./food/array-noodles.js";
import { shopLotsMacaroni } from "./food/array-macaroni.js";
import { shopLotsSpaghetti } from "./food/array-spaghetti.js";
import { shopLotsTarhona } from "./food/array-tarhona.js";

import { shopLotsCheese } from "./food/array-cheese.js";

import { shopLotsPates } from "./food/array-pates.js";
import { shopLotsSalmon } from "./food/array-salmon.js";
import { shopLotsMackerel } from "./food/array-mackerel.js";
import { shopLotsHerring } from "./food/array-herring.js";
import { shopLotsTuna } from "./food/array-tuna.js";
import { shopLotsCod } from "./food/array-cod.js";
import { shopLotsSprats } from "./food/array-sprats.js";

import { shopLotsPeanuts } from "./food/array-peanuts.js";
import { shopLotsPopcorns } from "./food/array-popcorns.js";
import { shopLotsPistachios } from "./food/array-pistachios.js";
import { shopLotsChips } from "./food/array-chips.js";

import { shopLotsCreamSpreads } from "./food/array-cream-spreads.js";
import { shopLotsCheeseSpreads } from "./food/array-cheese-spreads.js";
import { shopLotsSweetSpreads } from "./food/array-sweet-spreads.js";

import { shopLotsBars } from "./food/array-bars.js";
import { shopLotsWaffles } from "./food/array-waffles.js";
import { shopLotsChocolate } from "./food/array-chocolate.js";

import { shopLotsHotChocolate } from "./food/array-hot-chocolate.js";
import { shopLotsCoffeeBeans } from "./food/array-coffee_beans.js";
import { shopLotsGroundCoffee } from "./food/array-ground-coffee.js";
import { shopLotsInstantCoffee } from "./food/array-instant-coffee.js";
import { shopLotsCacao } from "./food/array-cacao.js";
import { shopLotsCappuccino } from "./food/array-cappuccino.js";

import { shopLotsOil } from "./food/array-oil.js";
import { shopLotsOlives } from "./food/array-olives.js";
import { shopLotsOliveOil } from "./food/array-olive-oil.js";

import { shopLotsForBaking } from "./food/array-for-baking.js";
import { shopLotsMustard } from "./food/array-mustard.js";
import { shopLotsSauces } from "./food/array-sauces.js";
import { shopLotsSeasonings } from "./food/array-seasonings.js";

// Средства гигиены
import { shopLotsChildrenShampoos } from "./hygiene/array-children-shampoos.js";
import { shopLotsChildrenShowerGels } from "./hygiene/array-children-shower-gels.js";
import { shopLotsChildrenToothpastes } from "./hygiene/array-children-toothpastes.js";
import { shopLotsToothpastesNoFluorideChildren } from "./hygiene/array-toothpastes-no-fluoride-children.js";
import { shopLotsChildrenDiapers } from "./hygiene/array-children-diapers.js";

import { shopLotsAdultShampoos } from "./hygiene/array-adult_shampoos.js";
import { shopLotsHairConditioners } from "./hygiene/array-hair-conditioners.js";
import { shopLotsHairMasks } from "./hygiene/array-hair-masks.js";

import { shopLotsAdultShowerGels } from "./hygiene/array-adult-shower-gels.js";

import { shopLotsLiquidSoap } from "./hygiene/array-liquid-soap.js";
import { shopLotsSolidSoap } from "./hygiene/array-solid-soap.js";

import { shopLotsHandCremes } from "./hygiene/array-hand-cremes.js";

import { shopLotsAntiperspirants } from "./hygiene/array-antiperspirants.js";
import { shopLotsDeodorants } from "./hygiene/array-deodorants.js";

import { shopLotsToothpastesAdult } from "./hygiene/array-toothpastes-adult.js";
import { shopLotsToothpastesNoFluoride } from "./hygiene/array-toothpastes-no-fluoride-adult.js";
import { shopLotsMouthwashes } from "./hygiene/array-mouthwashes.js";

import { shopLotsWetWipes } from "./hygiene/array-wet-wipes.js";
import { shopLotsMicellarWipes } from "./hygiene/array-micellar-wipes.js";

import { shopLotsIntimHygiene } from "./hygiene/array-intim-hygiene.js";
import { shopLotsPantyliner } from "./hygiene/array-pantyliner.js";

import { shopLotsTPThreeLayer } from "./hygiene/array-tp-three-layer.js";

// Бытовая химия
import { shopLotsMeansHandsWashingDishes } from "./household_chemicals/array-means-hands-washing-dishes.js";
import { shopLotsMeansMechanicalWashingDishes } from "./household_chemicals/array-means-mechanical-washing-dishes.js";

import { shopLotsWashingGels } from "./household_chemicals/array-washing-gels.js";
import { shopLotsPowerCaps } from "./household_chemicals/array-power-caps.js";
import { shopLotsWashingPowders } from "./household_chemicals/array-washing-powders.js";
import { shopLotsLaundrySheets } from "./household_chemicals/array-laundry-sheets.js";
import { shopLotsBleaches } from "./household_chemicals/array-bleaches.js";
import { shopLotsStainRemovers } from "./household_chemicals/array-stain-removers.js";
import { shopLotsSofteners } from "./household_chemicals/array-softeners.js";
import { shopLotsScentBoosterGranuls } from "./household_chemicals/array-scent-booster-granuls.js";

import { shopLotsForFabrics } from "./household_chemicals/array-for-fabrics.js";
import { shopLotsForWindows } from "./household_chemicals/array-for-windows.js";
import { shopLotsForFurniture } from "./household_chemicals/array-for-furniture.js";
import { shopLotsForFloor } from "./household_chemicals/array-for-floor.js";
import { shopLotsMeansCleaningUniversal } from "./household_chemicals/array-means-cleaning-universal.js";
import { shopLotsMeansCleaningKitchenBathroom } from "./household_chemicals/array-means-cleaning-kitchen-bathroom.js";
import { shopLotsForWC } from "./household_chemicals/array-for-wc.js";
import { shopLotsMeansCleaningDishwashers } from "./household_chemicals/array-means-cleaning-dishwashers.js";
import { shopLotsCleaningWipes } from "./household_chemicals/array-cleaning-wipes.js";

import { shopLotsMoistureAbsorbers } from "./household_chemicals/array-moisture-absorbers.js";
import { shopLotsAirFresheners } from "./household_chemicals/array-air-fresheners.js";
import { shopLotsFabricFresheners } from "./household_chemicals/array-fabric-fresheners.js";
import { shopLotsAntiSmells } from "./household_chemicals/array-anti-smells.js";
import { shopLotsBathBombs } from "./household_chemicals/array-bath-bombs.js";

const arrayOfProducts = [
  { items: shopLotsNewItems, },

  { items: shopLotsSale, },

  { items: shopLotsNoodles, },
  { items: shopLotsMacaroni, },
  { items: shopLotsSpaghetti, },
  { items: shopLotsTarhona, },

  { items: shopLotsCheese, },

  { items: shopLotsPates, },
  { items: shopLotsSalmon, },
  { items: shopLotsMackerel, },
  { items: shopLotsHerring, },
  { items: shopLotsTuna, },
  { items: shopLotsCod, },
  { items: shopLotsSprats, },

  { items: shopLotsPeanuts, },
  { items: shopLotsPopcorns, },
  { items: shopLotsPistachios,  },
  { items: shopLotsChips, },

  { items: shopLotsCreamSpreads, },
  { items: shopLotsCheeseSpreads, },
  { items: shopLotsSweetSpreads, },

  { items: shopLotsBars, },
  { items: shopLotsWaffles, },
  { items: shopLotsChocolate, },

  { items: shopLotsHotChocolate, },
  { items: shopLotsCoffeeBeans, },
  { items: shopLotsGroundCoffee, },
  { items: shopLotsInstantCoffee, },
  { items: shopLotsCacao, },
  { items: shopLotsCappuccino, },

  { items: shopLotsOil, },
  { items: shopLotsOlives, },
  { items: shopLotsOliveOil, },

  { items: shopLotsForBaking, },
  { items: shopLotsMustard, },
  { items: shopLotsSauces, },
  { items: shopLotsSeasonings, },

  { items: shopLotsChildrenShampoos, },
  { items: shopLotsChildrenShowerGels, },
  { items: shopLotsChildrenToothpastes, },
  { items: shopLotsToothpastesNoFluorideChildren, },
  { items: shopLotsChildrenDiapers, },

  { items: shopLotsAdultShampoos, },
  { items: shopLotsHairConditioners, },
  { items: shopLotsHairMasks, },

  { items: shopLotsAdultShowerGels, },

  { items: shopLotsLiquidSoap, },
  { items: shopLotsSolidSoap, },

  { items: shopLotsHandCremes, },

  { items: shopLotsAntiperspirants, },
  { items: shopLotsDeodorants, },

  { items: shopLotsToothpastesAdult, },
  { items: shopLotsToothpastesNoFluoride, },
  { items: shopLotsMouthwashes, },

  { items: shopLotsWetWipes, },
  { items: shopLotsMicellarWipes, },

  { items: shopLotsIntimHygiene, },
  { items: shopLotsPantyliner, },

  { items: shopLotsTPThreeLayer, },

  { items: shopLotsMeansHandsWashingDishes, },
  { items: shopLotsMeansMechanicalWashingDishes, },

  { items: shopLotsWashingGels, },
  { items: shopLotsPowerCaps, },
  { items: shopLotsWashingPowders, },
  { items: shopLotsLaundrySheets, },
  { items: shopLotsBleaches, },
  { items: shopLotsStainRemovers, },
  { items: shopLotsSofteners, },
  { items: shopLotsScentBoosterGranuls, },

  { items: shopLotsForFabrics, },
  { items: shopLotsForWindows, },
  { items: shopLotsForFurniture, },
  { items: shopLotsForFloor, },
  { items: shopLotsMeansCleaningUniversal, },
  { items: shopLotsMeansCleaningKitchenBathroom, },
  { items: shopLotsForWC, },
  { items: shopLotsMeansCleaningDishwashers, },
  { items: shopLotsCleaningWipes, },

  { items: shopLotsMoistureAbsorbers, },
  { items: shopLotsAirFresheners, },
  { items: shopLotsFabricFresheners, },
  { items: shopLotsAntiSmells, },
  { items: shopLotsBathBombs, },
];

// ===========================================================================
// Корзина
// ===========================================================================

const shopListAllLots = document.querySelector(".js-click-for-new-window");

const headerBasketNumbers = document.querySelectorAll(".js-header__basket-number");
const basketListLots = document.querySelector(".js-modal-basket");
const clearBasketButton = document.querySelector("[data-modal-busket-clear]");

const basketOrderBox = document.querySelector(".js-basket__order-box");
basketOrderBox.style.display = "none";

const travolta = document.querySelector(".js-travolta");

let basketArray = [];
let itemsArrayChecked = [];

shopListAllLots.addEventListener('click', lotBasketHandler);

export function lotBasketHandler(event) {

  const targetButton = event.target.closest('button[data-lot-basket]');

  if (targetButton) {
    const target = targetButton.closest(".cras-block, .js-cras-item");

    if (target) {
      const marker = target.getAttribute('data-basket-marker');
      const basketInIcons = target.querySelectorAll(".js-basket__icon-in");
      const basketOutIcons = target.querySelectorAll(".js-basket__icon-out");

      const foundItem = arrayOfProducts.flatMap(({ items }) => items).find((item) => item.marker === marker);
      const priceGRN = foundItem ? parseFloat(foundItem.priceGRN) : 0;
      const priceUSDT = (priceGRN / USDTRate).toFixed(2);

      toggleItemInBasket(marker, foundItem);

      updateHeaderBasketNumber();
      setupRemoveButtons();
      handleClearBasketButton();
      // setupQuantityButtons();
      // updatePriceWholesales(foundItem);
      // updateBasketOrder();
      // basketCheckboxChanger();
      // totalItemsAmount();
      // restoreButtonCopy();
    }
  }
}

// Число товаров в корзине
function updateHeaderBasketNumber() {
  const basketArrayJSON = localStorage.getItem("basketArray");
  const basketArray = JSON.parse(basketArrayJSON) || [];

  headerBasketNumbers.forEach((headerBasketNumber) => {
    headerBasketNumber.textContent = basketArray.length > 0 ? basketArray.length : "";
  });
}

function toggleItemInBasket(marker, foundItem) {
  // Иконки
  const basketInIcons = document.querySelectorAll(`[data-basket-marker="${marker}"] .js-basket__icon-in`);
  const basketOutIcons = document.querySelectorAll(`[data-basket-marker="${marker}"] .js-basket__icon-out`);

  basketInIcons.forEach(icon => icon.classList.toggle("js-icon-close"));
  basketOutIcons.forEach(icon => icon.classList.toggle("js-icon-open"));

  // Добавление в локальное хранилище маркера товара
  const basketArrayJSON = localStorage.getItem("basketArray");
  const basketArray = JSON.parse(basketArrayJSON) || [];

  const itemIndex = basketArray.findIndex(item => item.marker === marker);

  if (itemIndex !== -1) { // Исправлено условие проверки
    // Если товар уже в корзине → удаляем разметку
    const itemToRemove = basketListLots.querySelector(`[data-basket-marker="${marker}"]`);

    if (itemToRemove) {
      itemToRemove.remove();
    }

    basketArray.splice(itemIndex, 1);
  } else {
    // Если товара нет в корзине → добавляем разметку
    if (foundItem) {
      const basketMarkup = createBasketListItemsMarkup([foundItem]);

      if (basketMarkup) {
        travolta.style.display = "none";
        basketListLots.insertAdjacentHTML("beforeend", basketMarkup);
        basketOrderBox.style.display = "block";
      }

      // Добавляем товар в массив корзины
      basketArray.push({
        marker: marker,
        quantityItem: 1,
      });
    }
  }

  // Обновляем localStorage
  localStorage.setItem("basketArray", JSON.stringify(basketArray));

  if (basketArray.length === 0) {
    localStorage.removeItem("basketArray");
    basketOrderBox.style.display = "none";
    travolta.style.display = "block";
  }
}








function setupQuantityButtons() {
  const decreaseButtons = document.querySelectorAll('[data-price-down]');
  const increaseButtons = document.querySelectorAll('[data-price-up]');

  decreaseButtons.forEach((button) => button.addEventListener('click', handleQuantityDecrease));
  increaseButtons.forEach((button) => button.addEventListener('click', handleQuantityIncrease));
}

function updatePriceWholesales(foundItem) {
  const priceWholesales = document.querySelectorAll(".js-basket-price-wholesale");

  if (foundItem && foundItem.type === "retail") {
    priceWholesales.forEach((priceWholesale) => {
      priceWholesale.style.display = "none";
    });
  }
}

function setupRemoveButtons() {
  const removeButtons = document.querySelectorAll("[data-modal-remove-item]");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeBasketItem);
  });
}

// Удаление лота из корзины
function removeBasketItem(event) {
  const basketItem = event.target.closest(".basket__item");
  if (!basketItem) return;

  const marker = basketItem.getAttribute('data-basket-marker');

  // Удаляем разметку товара из корзины
  basketItem.remove();

  // Удаляем товар из localStorage
  const basketArrayJSON = localStorage.getItem("basketArray");
  const basketArray = JSON.parse(basketArrayJSON) || [];

  // Находим индекс элемента в массиве
  const itemIndex = basketArray.findIndex(item => item.marker === marker);
  
  if (itemIndex !== -1) {
    basketArray.splice(itemIndex, 1); // Удаляем товар из массива
  }

  // Обновляем localStorage
  if (basketArray.length > 0) {
    localStorage.setItem("basketArray", JSON.stringify(basketArray));
  } else {
    localStorage.removeItem("basketArray");
    basketOrderBox.style.display = "none";
    travolta.style.display = "block";
  }

  updateHeaderBasketNumber();
  restoreIcons();
  // totalItemsAmount();
}


// Полная очистка корзины
function handleClearBasketButton() {
  if (clearBasketButton) {
    clearBasketButton.addEventListener("click", clearBasket);
  }
}

function clearBasket() {
  // Удаление разметки корзины
  basketListLots.innerHTML = "";
  basketOrderBox.style.display = "none";
  travolta.style.display = "block";

  // Удаление данных из локального хранилища, связанные с корзиной
  const keysToRemove = Object.keys(localStorage).filter((key) =>
    key.startsWith("basketArray")
  );

  keysToRemove.forEach((key) => {
    localStorage.removeItem(key);
  });

  // Обновляем массивы из localStorage
  basketArray = JSON.parse(localStorage.getItem('basketArray')) || [];

  // Удаление счётчка товара в корзине
  headerBasketNumbers.forEach((headerBasketNumber) => {
    headerBasketNumber.textContent = "";
  });

  // Удаление классов у иконок
  const basketInElements = document.querySelectorAll(".js-icon-close");
  const basketOutElements = document.querySelectorAll(".js-icon-open");
  basketInElements.forEach((element) => {
    element.classList.remove("js-icon-close");
  });
  basketOutElements.forEach((element) => {
    element.classList.remove("js-icon-open");
  });
}

function handleQuantityDecrease(event) {
  const targetButton = event.target.closest('button[data-price-down]');

  if (!targetButton) return;

  const item = targetButton.closest('.basket__item');
  if (!item) return;
  
  const marker = item.getAttribute('data-basket-marker');
  const foundItem = arrayOfProducts.flatMap(({ items }) => items).find((item) => item.marker === marker);
  const priceGRN = foundItem ? parseFloat(foundItem.priceGRN) : 0;
  const priceOptGRN = foundItem ? parseFloat(foundItem.priceGRNOpt) : 0;
  const priceOptUSDT = (priceOptGRN / USDTRate).toFixed(2);

  const itemQuantity = item.querySelector('.js-item-quantity');
  const priceGRNElement = item.querySelector('.js-priceGRN'); 
  const priceOptGRNElement = item.querySelector('.js-priceOptGRN');
  const priceUSDTElement = item.querySelector('.js-priceUSDT');
  const priceOptUSDTElement = item.querySelector('.js-priceOptUSDT');

  const quantityItemsArrayJSON = localStorage.getItem("quantityItemsArray");
  const quantityItemsArray = JSON.parse(quantityItemsArrayJSON) || [];

  let existingItemIndex = quantityItemsArray.findIndex(item => item.marker === marker);

  let priceGRNItem = 0;
  let priceUSDTItem = 0;
  let priceOptGRNItem = 0;
  let priceUSDTOptItem = 0;
  let currentValue = parseInt(itemQuantity.textContent);

  if (!itemQuantity || !priceGRNElement || !priceUSDTElement || !priceOptGRNElement || !priceOptUSDTElement) return;

  const wholesaleCheckbox = item.querySelector('.js-basket__wholesale-сheckbox-input');

  if (wholesaleCheckbox && wholesaleCheckbox.checked) {
    currentValue = Math.max(currentValue - 1, 12);
    itemQuantity.textContent = currentValue;
    priceOptGRNItem = priceOptGRN * currentValue;
    priceOptGRNElement.textContent = priceOptGRNItem;
    priceUSDTOptItem = (priceOptUSDT * currentValue).toFixed(2);;
    priceOptUSDTElement.textContent = priceUSDTOptItem;

    quantityItemsArray[existingItemIndex].quantityItem = currentValue;
    quantityItemsArray[existingItemIndex].optPriceGRN = priceOptGRNItem;
    quantityItemsArray[existingItemIndex].optPriceUSDT = priceUSDTOptItem;
  } else {
    currentValue = Math.max(currentValue - 1, 1);
    itemQuantity.textContent = currentValue;
    priceGRNItem = priceGRN * currentValue;
    priceGRNElement.textContent = priceGRNItem;
    priceUSDTItem = (priceGRNItem / USDTRate).toFixed(2);
    priceUSDTElement.textContent = priceUSDTItem;

    quantityItemsArray[existingItemIndex].quantityItem = currentValue;
    quantityItemsArray[existingItemIndex].priceGRN = priceGRNItem;
    quantityItemsArray[existingItemIndex].priceUSDT = priceUSDTItem;
  }

  localStorage.setItem("quantityItemsArray", JSON.stringify(quantityItemsArray));
  totalItemsAmount();
}

function handleQuantityIncrease(event) {
  const targetButton = event.target.closest('button[data-price-up]');

  if (!targetButton) return;

  const item = targetButton.closest('.basket__item');
  if (!item) return;
  
  const marker = item.getAttribute('data-basket-marker');
  const foundItem = arrayOfProducts.flatMap(({ items }) => items).find((item) => item.marker === marker);
  const quantityOnStorage = foundItem ? parseInt(foundItem.quantityOnStorage) : 0;
  const priceGRN = foundItem ? parseFloat(foundItem.priceGRN) : 0;
  const priceOptGRN = foundItem ? parseFloat(foundItem.priceGRNOpt) : 0;
  const priceOptUSDT = (priceOptGRN / USDTRate).toFixed(2);

  const itemQuantity = item.querySelector('.js-item-quantity');
  const priceGRNElement = item.querySelector('.js-priceGRN'); 
  const priceOptGRNElement = item.querySelector('.js-priceOptGRN');
  const priceUSDTElement = item.querySelector('.js-priceUSDT');
  const priceOptUSDTElement = item.querySelector('.js-priceOptUSDT');

  const quantityItemsArrayJSON = localStorage.getItem("quantityItemsArray");
  const quantityItemsArray = JSON.parse(quantityItemsArrayJSON) || [];

  let existingItemIndex = quantityItemsArray.findIndex(item => item.marker === marker);

  let priceGRNItem = 0;
  let priceUSDTItem = 0;
  let priceOptGRNItem = 0;
  let priceUSDTOptItem = 0;
  let currentValue = parseInt(itemQuantity.textContent);

  if (!itemQuantity || !priceGRNElement || !priceUSDTElement || !priceOptGRNElement || !priceOptUSDTElement) return;

  const wholesaleCheckbox = item.querySelector('.js-basket__wholesale-сheckbox-input');

  if (wholesaleCheckbox && wholesaleCheckbox.checked) {
    currentValue += 1;
    itemQuantity.textContent = currentValue;
    priceOptGRNItem = priceOptGRN * currentValue;
    priceOptGRNElement.textContent = priceOptGRNItem;
    priceUSDTOptItem = (priceOptUSDT * currentValue).toFixed(2);;
    priceOptUSDTElement.textContent = priceUSDTOptItem;

    quantityItemsArray[existingItemIndex].quantityItem = currentValue;
    quantityItemsArray[existingItemIndex].optPriceGRN = priceOptGRNItem;
    quantityItemsArray[existingItemIndex].optPriceUSDT = priceUSDTOptItem;
  } else {
    if (currentValue < quantityOnStorage || wholesaleCheckbox) {
      currentValue += 1;
      itemQuantity.textContent = currentValue;
      priceGRNItem = priceGRN * currentValue;
      priceGRNElement.textContent = priceGRNItem;
      priceUSDTItem = (priceGRNItem / USDTRate).toFixed(2);
      priceUSDTElement.textContent = priceUSDTItem;

      quantityItemsArray[existingItemIndex].quantityItem = currentValue;
      quantityItemsArray[existingItemIndex].priceGRN = priceGRNItem;
      quantityItemsArray[existingItemIndex].priceUSDT = priceUSDTItem;
    }
  }

  localStorage.setItem("quantityItemsArray", JSON.stringify(quantityItemsArray));
  totalItemsAmount();
}

function basketCheckboxChanger() {
  const wholesaleCheckboxes = document.querySelectorAll('.js-basket__wholesale-сheckbox-input');
  const wholesaleCheckboxesArray = [...wholesaleCheckboxes];

  wholesaleCheckboxesArray.forEach(wholesaleCheckbox => {
    const item = wholesaleCheckbox.closest('.basket__item');
    if (!item) {
      return;
    }

    const priceRetail = item.querySelector('.js-basket-price-retail');
    const priceWholesale = item.querySelector('.js-basket-price-wholesale');

    const marker = item.getAttribute('data-basket-marker');
    const itemQuantity = item.querySelector('.js-item-quantity');
    const foundItem = arrayOfProducts.flatMap(({ items }) => items).find((item) => item.marker === marker);

    const priceGRN = foundItem ? parseFloat(foundItem.priceGRN) : 0;
    const priceUSDT = (priceGRN / USDTRate).toFixed(2);
    const priceOptGRN = foundItem ? parseFloat(foundItem.priceGRNOpt) : 0;
    const priceOptUSDT = (priceOptGRN / USDTRate).toFixed(2);

    const priceGRNElement = item.querySelector('.js-priceGRN');
    const priceUSDTElement = item.querySelector('.js-priceUSDT');
    const priceOptGRNElement = item.querySelector('.js-priceOptGRN');
    const priceOptUSDTElement = item.querySelector('.js-priceOptUSDT');

    if (!wholesaleCheckbox || !wholesaleCheckbox.checked) {
      priceRetail.style.display = 'block';
      priceWholesale.style.display = 'none';
    } else {
      itemQuantity.textContent = '12';
    }

    if (foundItem.type === "only-wholesale оптом") {
      const marker = foundItem.marker;
      const checkboxesToUpdate = wholesaleCheckboxesArray.filter(checkbox => {
        const item = checkbox.closest('.basket__item');
        const itemMarker = item.getAttribute('data-basket-marker');
        return itemMarker === marker;
      });
      checkboxesToUpdate.forEach((checkbox) => {
        checkbox.checked = true;
        checkbox.disabled = true;
      
        priceRetail.style.display = 'none';
        priceWholesale.style.display = 'block';
        itemQuantity.textContent = '12';

        const quantityItemsArrayJSON = localStorage.getItem("quantityItemsArray");
        let quantityItemsArray = JSON.parse(quantityItemsArrayJSON) || [];
        const itemsArrayCheckedJSON = localStorage.getItem("itemsArrayChecked");
        let itemsArrayChecked = JSON.parse(itemsArrayCheckedJSON) || [];
        let existingItemIndex = quantityItemsArray.findIndex(item => item.marker === marker);

        priceRetail.style.display = 'none';
        priceWholesale.style.display = 'block';

        priceOptGRNElement.textContent = priceOptGRN * 12;
        priceOptUSDTElement.textContent = (priceOptUSDT * 12).toFixed(2);
        itemQuantity.textContent = '12';

        delete quantityItemsArray[existingItemIndex].priceGRN;
        delete quantityItemsArray[existingItemIndex].priceUSDT;
        quantityItemsArray[existingItemIndex].quantityItem = 12;
        quantityItemsArray[existingItemIndex].optPriceGRN = priceOptGRN * 12;
        quantityItemsArray[existingItemIndex].optPriceUSDT = (priceOptUSDT * 12).toFixed(2);

        const itemIndex = itemsArrayChecked.findIndex(item => item.marker === marker);
        const isChecked = checkbox.checked;
        if (isChecked && itemIndex === -1) {
          // Чекбокс был отмечен и записи в массиве не существует, добавляем запись
          itemsArrayChecked.push({ marker, isChecked: true });
        } else if (!isChecked && itemIndex !== -1) {
          // Чекбокс был снят и запись существует, удаляем её из массива
          itemsArrayChecked.splice(itemIndex, 1);
        }

        localStorage.setItem("itemsArrayChecked", JSON.stringify(itemsArrayChecked));
        localStorage.setItem("quantityItemsArray", JSON.stringify(quantityItemsArray));
      });
    }

    // Назначаем обработчик события на чекбокс
    wholesaleCheckbox.addEventListener('change', function () {
      const quantityItemsArrayJSON = localStorage.getItem("quantityItemsArray");
      let quantityItemsArray = JSON.parse(quantityItemsArrayJSON) || [];
      const itemsArrayCheckedJSON = localStorage.getItem("itemsArrayChecked");
      let itemsArrayChecked = JSON.parse(itemsArrayCheckedJSON) || [];
      let existingItemIndex = quantityItemsArray.findIndex(item => item.marker === marker);

      if (this.checked) {
        priceRetail.style.display = 'none';
        priceWholesale.style.display = 'block';

        priceOptGRNElement.textContent = priceOptGRN * 12;
        priceOptUSDTElement.textContent = (priceOptUSDT * 12).toFixed(2);
        itemQuantity.textContent = '12';

        delete quantityItemsArray[existingItemIndex].priceGRN;
        delete quantityItemsArray[existingItemIndex].priceUSDT;
        quantityItemsArray[existingItemIndex].quantityItem = 12;
        quantityItemsArray[existingItemIndex].optPriceGRN = priceOptGRN * 12;
        quantityItemsArray[existingItemIndex].optPriceUSDT = (priceOptUSDT * 12).toFixed(2);
      } else {
        priceRetail.style.display = 'block';
        priceWholesale.style.display = 'none';

        priceGRNElement.textContent = priceGRN;
        priceUSDTElement.textContent = priceUSDT;
        itemQuantity.textContent = '1';

        delete quantityItemsArray[existingItemIndex].optPriceGRN;
        delete quantityItemsArray[existingItemIndex].optPriceUSDT;
        quantityItemsArray[existingItemIndex].quantityItem = 1;
        quantityItemsArray[existingItemIndex].priceGRN = priceGRN;
        quantityItemsArray[existingItemIndex].priceUSDT = priceUSDT;
      }

      const isChecked = this.checked;
      const itemIndex = itemsArrayChecked.findIndex(item => item.marker === marker);
      
      if (isChecked && itemIndex === -1) {
        // Чекбокс был отмечен и записи в массиве не существует, добавляем запись
        itemsArrayChecked.push({ marker, isChecked: true });
      } else if (!isChecked && itemIndex !== -1) {
        // Чекбокс был снят и запись существует, удаляем её из массива
        itemsArrayChecked.splice(itemIndex, 1);
      }
      
      localStorage.setItem("itemsArrayChecked", JSON.stringify(itemsArrayChecked));
      localStorage.setItem("quantityItemsArray", JSON.stringify(quantityItemsArray));

      if (itemsArrayChecked.length === 0) {
        localStorage.removeItem("itemsArrayChecked");
      }

      totalItemsAmount();
    });
  });
}

function totalItemsAmount() {
  const totalAmountGRN = document.querySelector(".js-total-priceGRN");
  const totalAmountUSDT = document.querySelector(".js-total-priceUSDT");

  const quantityItemsArrayJSON = localStorage.getItem("quantityItemsArray");
  let quantityItemsArray = JSON.parse(quantityItemsArrayJSON) || [];
  const totalAmountJSON = localStorage.getItem("totalAmount");
  let totalAmount = JSON.parse(totalAmountJSON) || [];

  // Инициализируем переменные для хранения общей суммы
  let totalGRN = 0;
  let totalUSDT = 0;

  quantityItemsArray.forEach(item => {
    totalGRN += (item.priceGRN || item.optPriceGRN || 0);
    totalUSDT += parseFloat(item.priceUSDT || item.optPriceUSDT || 0);
  });

  // Записываем общие суммы в соответствующие элементы на странице
  if (totalAmountGRN && totalAmountUSDT) {
    totalAmountGRN.textContent = totalGRN;
    totalAmountUSDT.textContent = totalUSDT.toFixed(2);
  }

  if (totalAmount.length > 0) {
    totalAmount[0].totalAmountGRN = totalGRN;
    totalAmount[0].totalAmountUSDT = totalUSDT.toFixed(2);;
  } else {
    totalAmount.push({
      totalAmountGRN: totalGRN,
      totalAmountUSDT: totalUSDT,
    });
  }

  localStorage.setItem("quantityItemsArray", JSON.stringify(quantityItemsArray));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));

  if (totalGRN > 0 && totalUSDT > 0) {
    travolta.style.display = "none";
  }

  if (totalGRN === 0) {
    localStorage.removeItem("totalAmount");
    travolta.style.display = "block";
    basketOrderBox.innerHTML = "";
    localStorage.removeItem("quantityItemsArray");
  }
}

// --------------------------------
// Фунции восстановления корзины
// --------------------------------

// Восстановление товаров в корзине
function initializeBasket() {
  const basketArrayJSON = localStorage.getItem("basketArray");
  const basketArray = JSON.parse(basketArrayJSON) || [];

  if (basketArray.length > 0) {
    const basketItemsMarkup = basketArray
      .map(item => {
        const foundItem = arrayOfProducts.flatMap(({ items }) => items).find(({ marker }) => marker === item.marker);
        return foundItem ? createBasketListItemsMarkup([foundItem]) : "";
      })
      .join("");

    if (basketItemsMarkup) {
      basketListLots.innerHTML = basketItemsMarkup;
      basketOrderBox.style.display = "block";
      travolta.style.display = "none";
    }
  } else {
    basketOrderBox.style.display = "none";
    travolta.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initializeBasket();
  setupRemoveButtons();
});

// Восстановление числа товаров в корзине после перезагрузки
updateHeaderBasketNumber();

// Восстановление состояния иконок из хранилища
export function restoreStoregeIcons(lotElements) {

  const basketArrayJSON = localStorage.getItem("basketArray");
  const basketArray = JSON.parse(basketArrayJSON) || [];

  lotElements.forEach((element) => {
    const marker = element.getAttribute("data-basket-marker");
    const basketInIcon = element.querySelector(".js-basket__icon-in");
    const basketOutIcon = element.querySelector(".js-basket__icon-out");

    const item = basketArray.find((item) => item.marker === marker);

    if (item) {
      basketInIcon.classList.add("js-icon-close");
      basketOutIcon.classList.add("js-icon-open");
    } else {
      basketInIcon.classList.remove("js-icon-close");
      basketOutIcon.classList.remove("js-icon-open");
    }
  });
}

// Общее восстановление иконок
export function restoreIcons() {
  const lotElements = document.querySelectorAll(".cras-block");
    
  restoreStoregeIcons(lotElements);

  // const removeButtons = document.querySelectorAll("[data-modal-remove-item]");
  // removeButtons.forEach((button) => {
  //   button.addEventListener("click", removeBasketItem);
  // });

  // clearBasketButton.addEventListener("click", clearBasket);
}

document.addEventListener("DOMContentLoaded", restoreIcons);

// Восстановление суммы и количества товаров
function restoreBasketItemsAmount() {
  const quantityItemsJSON = localStorage.getItem('quantityItemsArray');
  const totalAmountJSON = localStorage.getItem("totalAmount");

  if (quantityItemsJSON) {
    const quantityItems = JSON.parse(quantityItemsJSON);

    // Проходим по массиву и обновляем элементы на странице
    quantityItems.forEach(item => {
      const marker = item.marker;
      const quantityItem = item.quantityItem;
      const priceGRN = item.priceGRN;
      const priceUSDT = item.priceUSDT;
      const optPriceGRNiceGRN = item.optPriceGRN;
      const optPriceUSDTpriceUSDT = item.optPriceUSDT;

      // Находим товар на странице по маркеру
      const itemElement = document.querySelector(`[data-basket-marker="${marker}"]`);
      
      if (itemElement) {
        // Находим элемент с количеством товара
        const itemQuantityElement = itemElement.querySelector('.js-item-quantity');
        const priceGRNElement = itemElement.querySelector('.js-priceGRN'); 
        const priceOptGRNElement = itemElement.querySelector('.js-priceOptGRN');
        const priceUSDTElement = itemElement.querySelector('.js-priceUSDT');
        const priceOptUSDTElement = itemElement.querySelector('.js-priceOptUSDT');

        itemQuantityElement.textContent = quantityItem;
        priceGRNElement.textContent = priceGRN;
        priceUSDTElement.textContent = priceUSDT;
        priceOptGRNElement.textContent = optPriceGRNiceGRN;
        priceOptUSDTElement.textContent = optPriceUSDTpriceUSDT;
      }

    const decreaseButtons = document.querySelectorAll('[data-price-down]');
    const increaseButtons = document.querySelectorAll('[data-price-up]');
      
    decreaseButtons.forEach(function (button) {
      button.addEventListener('click', handleQuantityDecrease);
    });

    increaseButtons.forEach(function (button) {
      button.addEventListener('click', handleQuantityIncrease);
    });
  });

    basketCheckboxChanger();
  }

  if (totalAmountJSON) {
    const totalAmount = JSON.parse(totalAmountJSON);
    const totalAmountGRN = document.querySelector(".js-total-priceGRN");
    const totalAmountUSDT = document.querySelector(".js-total-priceUSDT");

    if (totalAmountGRN && totalAmountUSDT) {
      totalAmountGRN.textContent = totalAmount.totalGRN.toFixed(2);
      totalAmountUSDT.textContent = totalAmount.totalUSDT.toFixed(2);
    }

    totalItemsAmount();
  }
}

restoreBasketItemsAmount();

function restoreButtonCopy() {
  const buttonCopy = document.querySelector(".js-button__copy");

  if (buttonCopy) {

    buttonCopy.addEventListener("click", scaleButton);
    
    function scaleButton() {
      buttonCopy.style.transform = 'scale(0.8)';
      setTimeout(function () {
        buttonCopy.style.transform = 'scale(1)';
      }, 200);
    }

    buttonCopy.addEventListener("click", () => {
      setTimeout(() => {
        onCloseModal(refs.modalBasketMenu);
      }, 300);

      setTimeout(() => {
        onOpenModal(refs.modalBasketOrder);
      }, 500);
    });

    buttonCopy.addEventListener("click", function () {

      const quantityItemsJSON = localStorage.getItem('quantityItemsArray');
      const totalAmountDataJSON = localStorage.getItem("totalAmount");
      
      if (totalAmountDataJSON && quantityItemsJSON) {

        const quantityItems = JSON.parse(quantityItemsJSON);
        const totalAmountData = JSON.parse(totalAmountDataJSON);
      
        let textToCopy = "Доброго дня. Хочу оформити замовлення №";

        // Получаем текущий UNIX TIME
        const unixTime = Math.floor(Date.now() / 1000);  // текущая метка времени в UNIX TIME

        // Функция для преобразования числа в римские цифры
        function intToRoman(number) {
          const romanNumerals = [
            [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
            [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
            [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
          ];
          let result = '';
          for (let [value, numeral] of romanNumerals) {
            while (number >= value) {
              result += numeral;
              number -= value;
            }
          }
          return result;
        }

        // Получаем последние 2 цифры года
        const year = new Date(unixTime * 1000).getFullYear();  // Конвертируем UNIX TIME в дату и извлекаем год
        const lastTwoDigits = year % 100;  // Получаем последние 2 цифры года

        // Преобразуем последние 2 цифры года в римские цифры
        const yearRoman = intToRoman(lastTwoDigits);

        // Получаем последние 6 цифр UNIX TIME
        const lastSixDigits = String(unixTime).slice(-6);

        // Формируем номер заказа с пробелом после № и только последние 2 цифры года в римских цифрах
        textToCopy += ` ${yearRoman}-${lastSixDigits}:\n\n`;

        quantityItems.forEach((item) => {
          let priceGRN, priceUSDT;

          if ('optPriceGRN' in item) {
            priceGRN = item.optPriceGRN;
            priceUSDT = item.optPriceUSDT;
          } else {
            priceGRN = item.priceGRN;
            priceUSDT = item.priceUSDT;
          }

          textToCopy += `Маркер: ${item.marker};\nКількість: ${item.quantityItem}; Ціна: ${priceGRN} грн. / ${priceUSDT} USDT;\n\n`;
        });

        const { totalAmountGRN, totalAmountUSDT } = totalAmountData[0];
        
        textToCopy += `Загальна сумма замовлення: ${totalAmountGRN} грн. / ${totalAmountUSDT} USDT.`;
        
        // Создаем временный элемент textarea для копирования текста в буфер обмена
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        
        // Выделяем текст в textarea
        textarea.select();
        
        // Копируем выделенный текст в буфер обмена
        document.execCommand("copy");
        
        // Удаляем временный элемент textarea
        document.body.removeChild(textarea);
        
        // Оповещаем пользователя о успешном копировании (можно заменить на свою логику)
        // alert("Ваше замовлення збережено! Відправте його нам у Telegram, Instagram або Messenger знизу кошика.");
      }
    });
  }
}

restoreButtonCopy();

// Восстановление разметки не активного блока
document.addEventListener('DOMContentLoaded', function() {
  const priceWholesales = document.querySelectorAll(".js-basket-price-wholesale");

  priceWholesales.forEach((priceWholesale) => {
    const item = priceWholesale.closest(".basket__item");
    if (item) {
      const marker = item.getAttribute('data-basket-marker');
      const foundItem = arrayOfProducts.flatMap(({ items }) => items).find((item) => item.marker === marker);
      
      if (foundItem && foundItem.type === "retail") {
        priceWholesale.style.display = "none";
      }
    }
  });

  const wholesaleCheckboxes = document.querySelectorAll('.js-basket__wholesale-сheckbox-input');
  const itemsArrayCheckedJSON = localStorage.getItem("itemsArrayChecked");
  itemsArrayChecked = JSON.parse(itemsArrayCheckedJSON) || [];

  wholesaleCheckboxes.forEach(wholesaleCheckbox => {

    if (wholesaleCheckbox) {

      const itemElement = wholesaleCheckbox.closest('.basket__item');
      const marker = wholesaleCheckbox.closest('.basket__item').getAttribute('data-basket-marker');
      const itemState = itemsArrayChecked.find(item => item.marker === marker);
      const priceRetail = itemElement.querySelector(".js-basket-price-retail")
      const priceWholesale = itemElement.querySelector('.js-basket-price-wholesale');

      if (itemState) {
        wholesaleCheckbox.checked = itemState.isChecked;
          priceRetail.style.display = 'none';
          priceWholesale.style.display = 'block';
      }
    }
  });
});

