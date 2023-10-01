// GET BUTTONS AND STORE IT
const fAccessBadgeBtn = document.getElementById('first-access-badge-btn');
const fAMsg = document.getElementById('fa-msg');
const itemList = document.querySelector('.item-list');


// FIRST ACCESS BADGE ACTION
function fAccessBadgeAction() {
    const currentPage = window.location.pathname;
    console.log(currentPage);
    if (currentPage === '/Challenge-BRQ-FIAP-AlugaFacil/FrontEnd/assets/index.html') {
        window.location.href = '/Challenge-BRQ-FIAP-AlugaFacil/FrontEnd/assets/html/mainpage.html';
    }
}

// ITEM LIST GO TO ITEM PAGE
function accessItem() {
        window.location.href = '/Challenge-BRQ-FIAP-AlugaFacil/FrontEnd/assets/html/itempage.html';
}



// ONCLICK CALL FUNCTIONS
if (fAccessBadgeBtn) {
    fAccessBadgeBtn.addEventListener('click', fAccessBadgeAction);
}
if (fAMsg) {
    fAMsg.addEventListener('click', fAccessBadgeAction);
}

if (itemList) {
    itemList.addEventListener('click', accessItem);
}


