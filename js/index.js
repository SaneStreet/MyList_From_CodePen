//function arrayToList
//Tager et array og laver det til en list.
//Ved at reverse array, kan den lægge værdien og placeringen af listen til fra arrayets index nummer (i), og ind i en lokal list.
var arrayToList = (array) => {
  //local list
  let list = null;
  //Hver gang index(i) er større eller lig med 0, træk 1 fra array.length. Derefter, tillæg værdien og placeringen fra array ind i en list. 
  for(let i = array.length - 1; i >= 0; i--){
    list = {value: array[i], rest: list};
  };
  return list;
};

//function listToArray
//Tager en list og laver det til et array.
//Lav en lokal list og for loop. Hver gang loop er true, tag værdien fra listen, og læg det i et array.
var listToArray = (list) => {
  let array = [];
  //Hver gang loop er true, læg værdien fra listen, ind i arrayet. node er en lokal variabel, som bruges til at holde værdien og lægge den til arrayet.
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  };
  return array;
};

//function prepend
//Tager en værdi og en list, og laver en ny list som lægger værdien til fronten af list
var prepend = (value, list) => {
  return {value, rest: list};
};

//function nth
//Tager en list og en værdi, og returnere værdien i den givne placering fra listen (Hvor 0 er den første værdi), ellers så vis "undefined" hvis værdien ikke eksistere
var nth = (list, n) => {
  //Hvis listen ikke eksistere, return undefined
  if(!list){
    return undefined; // + "nope";
  } 
  //Hvis n = 0, vis listens værdi i placeringen 0
  else if(n == 0){
    return list.value; //+ "nope";
  } 
  //vis null hvis intet ovenstående er true
  else {
   return nth(list.rest, n - 1); // + "no"; 
  }
};

console.log(arrayToList(["Damien", "Gloria"]));
console.log(listToArray(arrayToList(["Albert", "Burton", "Callum"])));
console.log(prepend("András", prepend("Karsten", null)));
console.log(nth(arrayToList([45, 86, 21, 79]), 2 ))