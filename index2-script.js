let quantity=1;
let price=950;
let totalPrice=950;
const quantityDisplay=document.getElementsByClassName("product-count");
const showPrice=document.querySelectorAll(".price");
for(const element of showPrice){
    element.innerText=totalPrice;
}
for(const display of quantityDisplay){
    
    display.innerText=quantity;
}
const addProduct=()=>{
    quantity++;
    totalPrice=quantity*price;
    for(const element of showPrice){
        element.innerText=totalPrice;
    }
    for(const display of quantityDisplay){
    
        display.innerText=quantity;
    }
}
const removeProduct=()=>{
    if(quantity<=1){
        return;
    }
    else{

        quantity--;

        totalPrice=quantity*price;
      
    for(const element of showPrice){
        element.innerText=totalPrice;
    }
    for(const display of quantityDisplay){
    
        display.innerText=quantity;
    }
    }
}