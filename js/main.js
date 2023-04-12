"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() { }; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener('DOMContentLoaded', function () {
  if ($(window).width() < 1100) {
    $('.header__lang').on('click', function () {
      $('.header__lang').toggleClass('active');
      $('.header__lang--list').slideToggle(200);
    });
    $('.header__chat').on('click', function () {
      $('.header__chat--new-messages').toggleClass('active');
    });
  }

  $(document).mouseup(function (e) {
    if (!$('.header__chat').is(e.target) && $('.header__chat').has(e.target).length === 0) {
      $('.header__chat--new-messages').removeClass('active');
    }
  });
  $('.page__menu--item-title').on('click', function () {
    if ($(this).parent().hasClass('active')) {
      $(this).next().slideUp(100);
      $(this).parent().removeClass('active');
    } else {
      $('.page__menu--item').removeClass('active');
      $('.page__menu--item .page__menu--item-list').slideUp(100);
      $(this).next().slideDown(100);
      $(this).parent().addClass('active');
    }
  });
  $('.mobile-menu__burger').on('click', function () {
    $('.mobile-menu__burger, .page__menu').toggleClass('active');
  });
  $('.faq__item .faq__item--title').on('click', function () {
    $('.faq__item .faq__item--descr').not($(this).next()).slideUp(300);
    $(this).next().slideToggle(300);
    $(this).toggleClass('active');
    $(this).parents('.faq__item').siblings().find('div').removeClass('active');
  });
  /*
    function tabs(tabTrigger, tabTriggerWrap, tabContent) {
      var tabBox = document.querySelectorAll(tabContent);
      var tabTop = document.querySelector(tabTriggerWrap);
      var tabBtn = document.querySelectorAll(tabTrigger);
  
      if (tabTop) {
        tabTop.addEventListener('click', function (event) {
          var tabClass = event.target.getAttribute("data-tab");
  
          if (tabClass) {
            tabBtn.forEach(function (item) {
              item.classList.remove('active');
            });
            event.target.classList.add('active');
            tabBox.forEach(function (elem) {
              elem.classList.remove('hide');
  
              if (!elem.classList.contains(tabClass) && tabClass !== 'all') {
                elem.classList.add('hide');
              }
            });
  
            // Оновити URL
            var newUrl = window.location.href.split('#')[0] + '#' + tabClass;
            window.history.pushState(null, null, newUrl);
          }
        });
  
        // Перевірити URL під час завантаження сторінки та показати відповідну вкладку
        var tabClass = window.location.hash.replace('#', '');
        if (tabClass) {
          var activeTab = document.querySelector('[data-tab="' + tabClass + '"]');
          if (activeTab) {
            activeTab.click();
          }
        }
      }
    }
  
    tabs('.page__tab', '.page__tabs', '.page__content');
  */
  function tabs(tabTrigger, tabTriggerWrap, tabContent) {
    var tabBox = document.querySelectorAll(tabContent);
    var tabTop = document.querySelector(tabTriggerWrap);
    var tabBtn = document.querySelectorAll(tabTrigger);

    function showTab(tabClass) {
      tabBtn.forEach(function (item) {
        item.classList.remove('active');
      });
      var activeTab = document.querySelector('[data-tab="' + tabClass + '"]');
      if (activeTab) {
        activeTab.classList.add('active');
      }
      tabBox.forEach(function (elem) {
        elem.classList.remove('hide');
        if (!elem.classList.contains(tabClass) && tabClass !== 'all') {
          elem.classList.add('hide');
        }
      });
    }

    function updateUrl(tabClass) {
      var newUrl = window.location.href.split('#')[0] + '#' + tabClass;
      window.history.pushState(null, null, newUrl);
    }

    if (tabTop) {
      tabTop.addEventListener('click', function (event) {
        var tabClass = event.target.getAttribute("data-tab");
        if (tabClass) {
          showTab(tabClass);
          updateUrl(tabClass);
        }
      });

      // Перевірити URL під час завантаження сторінки та показати відповідну вкладку
      var tabClass = window.location.hash.replace('#', '');
      if (tabClass) {
        showTab(tabClass);
      }
    }
  }


  tabs('.page__tab', '.page__tabs', '.page__content');


  function showTab(trigger, tab, content) {
    $(trigger).on('click', function () {
      $('.page__tab').removeClass('active');
      $(tab).addClass('active');
      $('.page__content').addClass('hide');
      $(content).removeClass('hide');

      // Оновити URL
      var newUrl = window.location.href.split('#')[0] + '#' + $(tab).data('tab');
      window.history.pushState(null, null, newUrl);
    });

    // Перевірити URL під час завантаження сторінки та показати відповідну вкладку
    var tabClass = window.location.hash.replace('#', '');
    var activeTab = $('[data-tab="' + tabClass + '"]');
    if (activeTab.length) {
      activeTab.click();
    } else {
      $(tab).first().click();
    }
  }


  //showTab('.show-chat', '.tab-chat', '.chat');
  //showTab('.show-file', '.tab-file', '.file');

  if ($('.tippy').length != 0) {
    tippy('.tippy', {
      duration: 300,
      zIndex: 9999999999,
      appendTo: 'parent'
    });
  }

  $('.js-example-basic-single').select2();
  $("input[type='tel']").mask("+38 (099) 999-99-99");
  $('#select-modal').select2({
    dropdownParent: $('.modal-profile')
  });

  var _iterator = _createForOfIteratorHelper(document.querySelectorAll('input[type="range"].slider-progress')),
    _step;

  try {
    var _loop = function _loop() {
      var e = _step.value;
      e.style.setProperty('--value', e.value);
      e.style.setProperty('--min', e.min == '' ? '0' : e.min);
      e.style.setProperty('--max', e.max == '' ? '100' : e.max);
      e.addEventListener('input', function () {
        return e.style.setProperty('--value', e.value);
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  $('.slider-progress').on('input', function () {
    var thisVal = $(this).val();
    $('.procent__val').text(thisVal);
  });
  $('.quest-tippy').on('click', function (e) {
    e.preventDefault();
  });
  $('.originality-robots__radio').on('click', function (e) {
    e.stopPragation();

    if (e.target !== $('.quest-tippy')) {
      console.log(e.target);
    }
  });
  $('.originality-robots__radio input').on('click', function () {
    var btn = $('.form__btn');

    if (!$(this).is(':checked')) {
      $('.originality-robots__range').removeClass('hide');
      $('.originality-robots__procent').removeClass('hide');
    } else {
      $('.originality-robots__range').addClass('hide');
      $('.originality-robots__procent').addClass('hide');
    }
  });
});
"use strict";

function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  var _this2 = this;

  var _this = this; // массив объектов


  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_"; // массив DOM-элементов

  this.nodes = document.querySelectorAll("[data-da]"); // наполнение оbjects объктами

  for (var i = 0; i < this.nodes.length; i++) {
    var node = this.nodes[i];
    var data = node.dataset.da.trim();
    var dataArray = data.split(",");
    var оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects); // массив уникальных медиа-запросов

  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  }); // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске

  var _loop = function _loop(_i) {
    var media = _this2.mediaQueries[_i];
    var mediaSplit = String.prototype.split.call(media, ',');
    var matchMedia = window.matchMedia(mediaSplit[0]);
    var mediaBreakpoint = mediaSplit[1]; // массив объектов с подходящим брейкпоинтом

    var оbjectsFilter = Array.prototype.filter.call(_this2.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });

    _this2.mediaHandler(matchMedia, оbjectsFilter);
  };

  for (var _i = 0; _i < this.mediaQueries.length; _i++) {
    _loop(_i);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (var i = 0; i < оbjects.length; i++) {
      var оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (var _i2 = 0; _i2 < оbjects.length; _i2++) {
      var _оbject = оbjects[_i2];

      if (_оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(_оbject.parent, _оbject.element, _оbject.index);
      }
    }
  }
}; // Функция перемещения


DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);

  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }

  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }

  destination.children[place].insertAdjacentElement('beforebegin', element);
}; // Функция возврата


DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);

  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
}; // Функция получения индекса внутри родителя


DynamicAdapt.prototype.indexInParent = function (parent, element) {
  var array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
}; // Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max


DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

var da = new DynamicAdapt("max");
da.init();
"use strict";

var header = document.querySelector('.header'),
  modaWrap = document.querySelectorAll('.modal-wrap'),
  scrollHide = calcScroll();

function bindModal(triggerSelector, modalSelector) {
  var trigger = document.querySelectorAll(triggerSelector);
  var modal = document.querySelector(modalSelector);
  trigger.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      closeModal();
      hideScroll();
      modal.classList.add('active');
    });
  });
}

function calcScroll() {
  var div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
}

function hideScroll() {
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = "".concat(scrollHide, "px");
}

function showScroll() {
  document.body.style.overflow = "";
  document.body.style.marginRight = '';
}

function showModal(modalItem) {
  var modal = document.querySelector(modalItem);
  closeModal();
  modal.classList.add('active');
}

function closeModal() {
  var modalAll = document.querySelectorAll('.modal-wrap');
  modalAll.forEach(function (item) {
    item.classList.remove('active');
    showScroll();
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

function closeAllModal() {
  var modalAll = document.querySelectorAll('.modal-wrap');
  var modalClose = document.querySelectorAll('.modal__close, .close-modal');
  modalClose.forEach(function (item) {
    item.addEventListener('click', function () {
      closeModal();
    });
  });
  modalAll.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target === item) {
        item.classList.remove('active');
        showScroll();
      }
    });
  });
}

closeAllModal(); /////////////////////////////////////////////////////////////////////////

bindModal('.header__profile', '.modal-profile');
bindModal('.my-profile', '.modal-profile');
//showModal('.modal-thanks');
//showModal('.modal-thanks--white');
//showModal('.modal-info--green');
//showModal('.modal-info--purple');
//showModal('.modal-bonus');
//showModal('.modal-withdrawal');
"use strict";
//# sourceMappingURL=main.js.map

