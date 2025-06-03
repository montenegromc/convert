const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector('form');
const amount = document.getElementById("amount");
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById("description");
const result = document.getElementById("result")

amount.addEventListener("input", () => {
const hasCaracteresRegex = /\D+/g;
amount.value = amount.value.replace(hasCaracteresRegex, "")
});

form.onsubmit = (event) => {
  event.preventDefault()
  
  switch(currency.value){
    case "USD" :
        convertCurrency(amount.value, USD, "US$")
        break

    case "EUR" :                                                                                                                                                                                         
        convertCurrency(amount.value, EUR, "€")
        break

    case "GBP":
        convertCurrency(amount.value, GBP, "£")
  }
  
}

function convertCurrency(amount, price, symbol){
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price
    total = formatCurrencyBRL(total).replace("RS", "")
    result.textContent = `${total} Reais`

    
    footer.classList.add("show-result")
  } catch {
    
    footer.classList.remove("show-result")
    
    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

function formatCurrencyBRL(value) {
  
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}