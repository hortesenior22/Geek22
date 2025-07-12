/*const $menuToggle = document.getElementById("menu-toggle"),
$menuItems = document.getElementById("menu-items");
;

$SmenuToggle.addEventListener("click", e =>{
$menuItems
});*/


    document.addEventListener('DOMContentLoaded', function() {
        const toggleMenu = (itemsClass, itemContainerClass) => {
            const items = document.querySelectorAll(itemsClass);
    
            items.forEach(item => {
                item.addEventListener('click', function() {
                    const subMenu = this.nextElementSibling;
                    const isOpen = subMenu.classList.contains('open');
    
                    document.querySelectorAll(itemContainerClass).forEach(el => {
                        el.classList.remove('open');
                        el.previousElementSibling.classList.remove('open');
                    });
    
                    if (!isOpen) {
                        subMenu.classList.add('open');
                        this.classList.add('open');
                    }
                });
            });
        };
    
        toggleMenu('.mobile--first-item', '.mobile--secondary-item');
        toggleMenu('.mobile--third-item', '.mobile--fourth-item');
    });    