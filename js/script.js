const rateE1 = document.getElementById('rate')
const swapE1 = document.getElementById('swap')
const currenclyOneE1 = document.getElementById('currency-one')
const currenclyTwoE1 = document.getElementById('currency-two')
const amountOneE1 = document.getElementById('amount-one')
const amountTwoE1 = document.getElementById('amount-two')

let dataFromBack ={}

const getData = () =>{
    const currenclyOne = currenclyOneE1.value;
    const currencyTwo = currenclyTwoE1.value;

fetch(`https://v6.exchangerate-api.com/v6/41b4541f3df8b629ff6e1018/latest/${currenclyOne}`)

.then((res)=> res.json())
.then((data)=>{
 console.log(data);
    const{conversion_rates} = data;
    dataFromBack ={...conversion_rates};
     calculateRates(currencyTwo,conversion_rates);
     rateE1.innerText =` 1${currenclyOne}=${conversion_rates[currencyTwo]} ${currencyTwo} `

});
};
 const calculateRates = (currenclTwo, data)=>{
    const rate = data[currenclTwo];
    amountTwoE1.value = (+amountOneE1.value * rate).toFixed(2)
  
 }
const  runCalculate = ()=> calculateRates(currenclyTwoE1.value, dataFromBack)

getData()
const swap = function(){
    const currenclyOne = currenclyOneE1.value;
    const currencyTwo = currenclyTwoE1.value;
    currenclyTwoE1.value = currenclyOne
    currenclyOneE1.value = currencyTwo
}

swapE1.addEventListener('click',function(){
    swap()
    runCalculate()
    getData()

   
})
amountOneE1.addEventListener("input", runCalculate);
currenclyOneE1.addEventListener("change", getData);
currenclyTwoE1.addEventListener("change", runCalculate);

