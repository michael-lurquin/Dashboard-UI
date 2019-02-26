document.getElementById('toc').addEventListener('click', toogleMenu);

function toogleMenu(e) {
    var parent = e.target;
    if ( e.target.tagName === 'I' ) parent = e.target.parentElement;
    if ( e.target.tagName === 'a' ) parent = e.target.parentElement.parentElement;
    if ( !parent.classList.contains('open') ) {
        parent.classList.add('open');
        parent.children[0].children[0].classList.remove('fa-angle-double-right');
        parent.children[0].children[0].classList.add('fa-angle-double-left');
        document.getElementsByTagName('NAV')[0].classList.add('active');
    }
    else {
        parent.classList.remove('open');
        parent.children[0].children[0].classList.remove('fa-angle-double-left');
        parent.children[0].children[0].classList.add('fa-angle-double-right');
        document.getElementsByTagName('NAV')[0].classList.remove('active');
    }
}
