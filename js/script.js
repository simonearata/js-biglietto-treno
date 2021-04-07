// METODO 1
var km = prompt('Quanti km vuoi percorrere?');
var età = prompt('Quanti hanni hai?');
var prezzo_km = parseInt(km) * 0.21;
var minorenni = prezzo_km - (prezzo_km * 0.2);
var over_65 = prezzo_km - (prezzo_km * 0.4);


if(età > 18 && età < 65){
  console.log(" il prezzo del biglietto è " + prezzo_km)
}else if( età < 18){
  console.log("il prezzo del biglietto è " + minorenni.toFixed(2))
}else{
  console.log("il prezzo del biglietto è " + over_65.toFixed(2))
}
