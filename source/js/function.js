  var itemTabs = document.querySelectorAll('.tabs__item');
  var priceItems = document.querySelectorAll('.season-ticket__price');
  var priceItemsArr = [5000, 1700, 2700];

  function priceItem(result) {
    for (var i = 0; i < priceItems.length; i++) {
      for (var j = 0; j < result.length; j++) {
        if (i === j) {
          priceItems[i].innerHTML = result[j] + '<svg width="30" height="42"><use xlink:href="img/sprite_auto.svg#icon-rub"></use></svg>';
          priceItems[i].setAttribute('data-price', result[j]);
        }
      }
    }
  }  

if (itemTabs) {
    itemTabs.forEach(function (item) {
      item.addEventListener('click', function () {
        var count = item.getAttribute('data-count');
        var activeItem = document.querySelector('.tabs__item.tabs__item--active');
        activeItem.classList.remove('tabs__item--active');
        item.classList.add('tabs__item--active');

        var result = priceItemsArr.map(function (priceActive) {
          return priceActive * count;
        });

        priceItem(result);
      });
    });
  }