app.factory('listAccess', function ($log) {

    var list1 = [
        "Marek1",
        "Marek2",
        "Marek3",
        "Marek4",
        "Marek5"
    ];

    var list2 = [
        "Wojciech1",
        "Wojciech2",
        "Wojciech3",
        "Wojciech4",
        "Wojciech5"
    ];

    var moveElementById = function (element) {
        $log.debug(list1.indexOf(element));

        if (list1.indexOf(element) != -1) {
            list2.push(element);
            list1.splice(list1.indexOf(element), 1);
        } else {
            list1.push(element);
            list2.splice(list2.indexOf(element), 1);
        }
    };

    var addNewElement = function (name, listNumber) {
        if (listNumber) {
            list1.push(name);
        } else {
            list2.push(name);
        }
    };
    return {
        list1: list1,
        list2: list2,
        moveElementById: moveElementById,
        addNewElement: addNewElement
    }
});