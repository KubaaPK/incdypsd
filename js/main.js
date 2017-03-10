(function(){

    var showNavigationBtn = document.querySelector('.navigation__showNavigationBtn'),
        navigationContent = document.querySelector('.navigation__list');

    showNavigationBtn.addEventListener('click', function(){
        this.classList.toggle('openedNavigationBtn');
        navigationContent.classList.toggle('shopwNavigationContent');
    }, false);

})();