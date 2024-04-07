"use strict";

/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};

// Получаем ключи объекта
const keys = Object.keys(numbers);

// Перебираем ключи и выводим значения больше или равные 3
keys.forEach(key => {
    const value = numbers[key];
    if (value >= 3) {
        console.log(value);
    }
});

