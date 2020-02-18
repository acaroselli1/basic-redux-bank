// Import stylesheets
import "./style.css";
import { createStore } from "redux";

// Write Javascript code!
const appDiv = document.getElementById("app");
const displayDiv = document.getElementById("display");
appDiv.innerHTML = `<h1>Redux Only Example</h1>`;

// state
const initialState = {
  balance: 100
};

//reducer - state and action as parameters

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "Buy Coffee") {
    newState.balance -= action.payload;
  } else if (action.type === "Deposit") {
    newState.balance += action.payload;
  }

  return newState;
};

//store - reducer as parameter

const store = createStore(reducer);

//subscribe to store

store.subscribe(
  () =>
    (displayDiv.innerHTML = `<h1>Bank Account Balance: <span class="balance">$${JSON.stringify(
      store.getState().balance
    )}</span></h1>`)
);


//actions
const BUY_COFFEE = { type: "Buy Coffee", payload: 5 };
const DEPOSIT = { type: "Deposit", payload: 20 };


//dispatch actions
const coffee = document.getElementById("coffee");
coffee.addEventListener("click", () => {
  store.dispatch(BUY_COFFEE);
  setTextColor(BUY_COFFEE);
});

const deposit = document.getElementById("deposit");
deposit.addEventListener("click", () =>{
  store.dispatch(DEPOSIT);
  setTextColor(DEPOSIT);
});


function setTextColor(type){
  let balanceTextElement = document.querySelector('.balance');
  if(type === BUY_COFFEE){
  balanceTextElement.style.color = 'red';
  } else {
   balanceTextElement.style.color = 'green';
  }
}