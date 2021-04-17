window.addEventListener('DOMContentLoaded', function() {
    const heads = document.querySelectorAll('.header__menu_item'),
          overlay = document.querySelectorAll('.overlay'),
          blogger = document.querySelector('.blogger'),
          main = document.querySelector('.main');

    function toggler(links, selector) {
        links.forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
    
                links.forEach(item => {
                    item.classList.remove(selector);
                });
    
                item.classList.add(selector);
            });
        });
    }

    function getActiveItem(links, selector) {
        links.forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
    
                links.forEach(item => {
                    item.classList.remove(selector);
                });
    
                item.classList.add(selector);

                blogger.classList.add('blogger_active');
                main.classList.remove('main_active');
            });
        });
    }

    
    toggler(heads, 'header__menu_item-active');
    getActiveItem(overlay, 'overlay_active');

    
});