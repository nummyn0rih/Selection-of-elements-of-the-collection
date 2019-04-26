/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {

}

/**
 * @params {String[]}
 */
function select() { // функция принимает аргументы, на основании которых 
                    // производится отбор свойств в объектах коллекции 
    console.log(arguments);      // объект с аргументами
    console.log(copyCollection); // коллекция объектов friends
    let objectKeys = [];         // name,gender,email,favoriteFruit

    for (let i = 0; i < copyCollection.length; i++) { // проходим по каждому объекту коллекции
        objectKeys = Object.keys(copyCollection[i]);  // в переменную objectKeys записывается 
                                                      // массив со всеми свойствами итерируемого 
                                                      // объекта коллекции
        for (keyColl in copyCollection[i]) {          // каждое свойство объекта проверяется на
            outer: for (keyArg in arguments) {        // наличие в списке аргументов ф-ции
                if (keyColl === arguments[keyArg]) {  // если свойство есть в списке аргументов,
                    break outer;                      // то завершаем внутренний цикл и проверяем
                                                      // следующее свойство объекта
                } else if (keyArg == arguments.length - 1) { // если свойства нет в списке 
                    delete copyCollection[i][keyColl];       // аргументов, то текущее свойство
                }                                            // удаляется из объекта
            }
        }
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
