window.domutils = function (id) {
    if (typeof id !== 'string') {
        return;
    }

    return document.getElementById(id);
}