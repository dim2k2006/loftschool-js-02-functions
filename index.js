var consoleRec = function (source, index) {
    var sourceLength = source.length;

    if (sourceLength > index) {

        console.log(source[index]);
        consoleRec(source, ++index);

    }

};

// consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции'], 0);

module.exports = consoleRec;