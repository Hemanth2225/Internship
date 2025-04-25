function calc(input){

  let add = input.filter(x => x[2]==='add');
  let subtarct = input.filter(x => x[2]==='subtarct');
  let multiply = input.filter(x => x[2]==='multiply');
  let divide = input.filter(x => x[3]==='divide');

  console.log(add)
  console.log(subtarct)
  console.log(multiply)
  console.log(divide)

  let addtotal= add.reduce((x,[a,b]) => x + (a+b),0 );
  let subtotal= subtarct.reduce((x,[a,b]) => x + (a-b),0 );
  let multotal= multiply.reduce((x,[a,b]) => x + (a*b),0 );
  let divtotal= divide.reduce((x,[a,b]) => x + (a/b),0 );
  console.log(addtotal);
  console.log(subtotal);
  console.log(multotal);
  console.log(divtotal);

  let addition = addtotal+subtotal+multotal+divtotal;
  let subtraction = addtotal-subtotal-multotal-divtotal;
  let multiplication = addtotal*subtotal*multotal*divtotal;
  let divition = addtotal/subtotal/multotal/divtotal;
  console.log(addition)
  console.log(subtraction)
  console.log(multiplication)
  console.log(divition)
  console.log(input[4])

  if(input[4]=='Add'){

     console.log(addition)

}

if(input[4]=='Sub'){

    console.log(subtraction)

}

if(input[4]=='Multi'){

    console.log(multiplication)

}

if(input[4]=='Divi'){

    console.log(divition)

}

}
let input= [[5,3,'add'],[10,2,'subtarct'],[8,2,'multiply'],[10,2,0,'divide'],'Sub']

calc(input)