const btn_menu = document.getElementById('btn-menu-top');
const btn_toggel_icon_menu_top = document.getElementById('toggel-icon-menu-top');
document.addEventListener('click', (e)=>{
    if(btn_toggel_icon_menu_top.contains(e.target)){
        btn_menu.classList.toggle('menu-item');
        btn_menu.classList.toggle('hidden');
    }else{
        if(btn_menu.classList.contains('menu-item')){
            btn_menu.classList.remove('menu-item');
            btn_menu.classList.add('hidden');
        }
    }
});    