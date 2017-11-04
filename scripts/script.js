
//Connect
var cards = ["Валет", "Дама", "Джокер", "Туз", "Король"];
var i = 0;
var cards_str = " ";
card_last = cards.length - 1;
while (i < card_last){
  cards_str += cards[i] + ", ";
  i++;
}
cards_str += cards[card_last];
alert("Массив карт: " + cards_str);

//Add last item
var card_new;
while (card_new != "стоп"){
  card_new = prompt("Что добавить в конец массива?").toLowerCase();
  if (card_new != "стоп" && card_new != ""){
    cards += ", " + card_new;
    console.log(cards);
    alert(cards);
  }
}
