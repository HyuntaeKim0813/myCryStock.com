const addToSaveButtons = document.querySelectorAll('.save-stock');
const saveBadgeElement = document.querySelector('.nav-items .badge');



async function addToSave(event) {
    event.preventDefault();
    
    const button = event.target;
    const stockid = button.dataset.stockid;
    const csrfToken = button.dataset.csrf;

    let response;
    try {
        response = await fetch('/save/stocks', {
            method: 'POST',
            body: JSON.stringify({
                stockid: stockid,
                _csrf: csrfToken,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
    } catch (error) {
        alert('Something went wrong!');
        return;
    }
    
    if (!response.ok) {
        alert('Something went wrong!');
        return;
    }

    const responseData = await response.json();

    const newTotalQuantity = responseData.newSavedStocks;

    saveBadgeElement.textContent = newTotalQuantity;
}
// Iterate over each button to attach event listener
addToSaveButtons.forEach(button => {
    button.addEventListener('click', addToSave);
});