//  alert ("I javaScript");

// селект

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  sorter: () => {
    'Древесина',
    'Металл',
    'Камень',
    'Пластик',
    'Композитный',
    'Гипс'
  },
});


const element2 = document.querySelector('#selectCustom2');
const choices2 = new Choices(element2, {
  searchEnabled: false,
  itemSelectText: "",
  sorter: () => {
    'Древесина',
    'Металл',
    'Камень',
    'Пластик',
    'Композитный',
    'Гипс'
  },
});


// валидация


// имя

// let validation = new JustValidate('#form');

// response.cookie('cookie', 'value', { sameSite: 'lax' });


let validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#FF5C00'
  }
});




// подключение маски телефона
let selector = document.querySelector('#tel')
let im = new Inputmask('+7(999)-999-99-99');
im.mask(selector);



validation.addField('#name', [{
      rule: 'required',
      errorMessage: 'Вы не ввели имя'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Минимум два символа'
    }
  ])

  // почта

  .addField('#email', [{
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail'
    },

    {
      rule: 'email',
      errorMessage: 'Ошибка ввода e-mail'
    },


  ])

  // телефон

  .addField('#tel', [{
      validator: (value) => {

        //  номер телефона без лишиних символов

        const tel = selector.inputmask.unmaskedvalue();
        return Boolean(Number(tel) && tel.length > 0)
      },
      errorMessage: 'Вы не ввели телефон'
    },
    {
      validator: (value) => {

        //  номер телефона без лишиних символов

        const tel = selector.inputmask.unmaskedvalue();
        return Boolean(Number(tel) && tel.length === 10)
      },
      errorMessage: 'Введите телефон полностью'
    }
  ]);



// карта

let center = [48.872185073737896, 2.354223999999991];

function init() {
  //  в скобках id
  let map = new ymaps.Map('map', {

    // location tool yandex
    center: center,
    zoom: 17
  });

  // создаем маркер
  let placemark = new ymaps.Placemark(center, {}, {

    // убираем иконку по дефолту
    iconLayout: 'default#image',
    // подключаем наш вариант иконки
    iconImageHref: ('../img/mdi_location_on.png'),
    // размер иконки
    iconImageSize: [48, 48],
    // смещение иконки
    iconImageOffset: [-35, -25]
  });


  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  // добавление маркера на карту
  map.geoObjects.add(placemark);

}

// вызов функции
ymaps.ready(init);

// тултип tippy

// tippy('#myButton', {
//   content: "Глава 2, страница 176 ",
//   placement: 'top',
//   // theme: 'light',
//   // arrow: 'true'

// });


// tippy('#myButton', {
//   theme: 'tomato',
// });

// тултип свой


// вычисление высоты дива
// let offsetHeight = document.getElementsByClassName('tooltip-text')[0].offsetHeight;

// прибавляем к высоте блока 30 пикселей
// offsetHeight = offsetHeight +30;

// применяем стилб к размещению тултипа
// функция calc производит вычисления и приводит к пикселям

// document.getElementsByClassName('tooltip-text')[0].style= "top: calc(100% -  calc(1px *" + offsetHeight +  "))";
