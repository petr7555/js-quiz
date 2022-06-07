(function () {
    try {
        bar("Hi there!");
    } catch (e) {
        console.log(e.message);
    }
})();