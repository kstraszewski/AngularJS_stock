app.factory('listAccess', function ($log) {

    var list = [
        [
            "Marek1",
            "Marek2",
            "Marek3",
            "Marek4",
            "Marek5"
        ],
        [
            "Wojciech1",
            "Wojciech2",
            "Wojciech3",
            "Wojciech4",
            "Wojciech5"
        ]
    ];

    var moveElementById = function (element, listId) {
        list[listId].splice(list[listId].indexOf(element),1);
        list[+!+listId].push(element);
    };

    var addNewElement = function (name, listNumber) {
        if (listNumber) {
            list[0].push(name);
        } else {
            list[1].push(name);
        }
    };
    return {
        list: list,
        moveElementById: moveElementById,
        addNewElement: addNewElement
    }
});