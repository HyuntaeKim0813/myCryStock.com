const stockItemUpdateFormElements = document.querySelectorAll('.stock-item-management');
const stockTotalPriceElement = document.getElementById('stock-total-Price')
const cartBadgeElements = document.querySelectorAll('.nav-items .badge');

async function updateStockItem(event){
    event.preventDefault();

    const form = event.target;


    const symbol = form.dataset.symbol;
    const csrfToken = form.dataset.csrf;
    const quantity = form.firstElementChild.value;

    let response;
    try{
            response =  await fetch('/save/stocks',{
            method:'PATCH',
            body: JSON.stringify({
                symbol:symbol,
                quantity:quantity,
                _csrf: csrfToken
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }catch(error){
        alert('Something went wrong!');
        return;
    }

    if(!response.ok){
        alert('Something went wrong!');
        return;
    }

    const responseData = await response.json();


    if(responseData.updateStockData.updatedStockPrice === 0){
        form.parentElement.parentElement.remove();
    } else{
        const stockItemTotalPriceElements = form.parentElement.querySelector('.stock-item-price');
        stockItemTotalPriceElements.textContent = responseData.updateStockData.updatedStockPrice.toFixed(2);
    
    }


    stockTotalPriceElement.textContent = responseData.updateStockData.newTotalPrice.toFixed(2);


    for (const cartBadgeElement of cartBadgeElements) {
        cartBadgeElement.textContent =
          responseData.updateStockData.newTotalQuantity;
      }    


}

for (const formElement of stockItemUpdateFormElements){
    formElement.addEventListener('submit',updateStockItem);
}
