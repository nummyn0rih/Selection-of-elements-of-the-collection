/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {    // функция принимает массив объектов и возвращает
                                // новый массив отфильтрованный с помощью функций
    let namesFunc = [];         // filterIn и select в правильной последовательности
    for (let i = 1; i < arguments.length; i++) {
        namesFunc.push(arguments[i]);
    }
    namesFunc.sort();

    namesFunc.forEach(function(item) {
        collection = (item)(collection);
    });

    console.log(collection);
    return collection;
};

/**
 * @params {String[]}
 */
function select() {           // функция принимает аргументы, на основании которых 
                              // производится отбор свойств в объектах коллекции 
    let objectKeys = [];      // name, gender, email, favoriteFruit
    let args = arguments;     // name, gender, email

    return function select(collection) {
        for (let i = 0; i < collection.length; i++) {   // проходим по каждому объекту коллекции
            objectKeys = Object.keys(collection[i]);    // в переменную objectKeys записывается 
                                                        // массив со всеми свойствами итерируемого 
                                                        // объекта коллекции
            for (keyColl in collection[i]) {            // каждое свойство объекта проверяется на
                outer: for (keyArg in args) {           // наличие в списке аргументов ф-ции
                    if (keyColl === args[keyArg]) {     // если свойство есть в списке аргументов,
                        break outer;                    // то завершаем внутренний цикл и проверяем
                                                        // следующее свойство объекта
                    } else if (keyArg == args.length - 1) { // если свойства нет в списке 
                        delete collection[i][keyColl];      // аргументов, то текущее свойство
                    }                                       // удаляется из объекта
                }
            }
        }
        return collection;
    };
};

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {                     // функция в качестве аргументов принимает
                                                          // ключ и массив значений ключа возвращая
    return function filterIn(collection) {                // функцию фильтрующую коллекцию объектов,
        let arrByProp = collection.filter(filterByProp);  // которая в свою очередь принимает массив
        return arrByProp;                                 // и возвращает новый отфильтрованный 
    };                                                    // массив объектов

    function filterByProp(item) {                         
        if (item.hasOwnProperty(property)) {
            for (let i = 0; i < values.length; i++) {
                if (item[property] === values[i]) {
                    return true;
                }
            }
        }
    };
};

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
