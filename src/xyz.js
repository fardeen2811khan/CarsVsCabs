const car = [
  { name: "alto", price: 315000, company: "maruti" },
  { name: "celerio", price: 415000, company: "maruti" },
  { name: "swift", price: 515000, company: "maruti" },
  { name: "ertiga", price: 915000, company: "maruti" },
];


let carx = car.find(x=>x.name==='alto');
console.log(carx);
