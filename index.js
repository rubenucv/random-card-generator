window.onload = () => {
    let suit = generateRandomSuit();
    document.querySelector(".card").classList.add(suit);
  
    let cardNumber = document.querySelector(".number");
    cardNumber.innerHTML = generateRandomNumber();
   /*  if (suit === "hearts" || suit === "diamonds") {
      cardNumber.style.color = "red";
    } */
  };
  
  let generateRandomNumber = () => {
    let cardnumber = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
    let cardnumIndex = Math.floor(Math.random() * cardnumber.length);
    return cardnumber[cardnumIndex];
  };
  
  let generateRandomSuit = () => {
    let suits = ["hearts", "spades", "diamonds", "clubs"];
    let suitsIndex = Math.floor(Math.random() * suits.length);
    return suits[suitsIndex];
  };