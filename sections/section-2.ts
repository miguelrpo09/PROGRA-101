// Incrementar forma 1
/* let numberOfLines = 1;

console.log('Linea #' , numberOfLines);

numberOfLines = numberOfLines + 1;

console.log('Linea #' , numberOfLines);

numberOfLines = numberOfLines + 1;

console.log('Linea #' , numberOfLines);

numberOfLines = numberOfLines + 1;

console.log('Linea #' , numberOfLines);

console.log ('------------ Cars-----------') */
// Incrementar forma 2

/* let numberOfCars = 1;

console.log('Linea #' , numberOfCars);

numberOfCars++;

console.log('Linea #' , numberOfCars);

numberOfCars++;

console.log('Linea #' , numberOfCars);

numberOfCars++;

console.log('Linea #' , numberOfCars);

numberOfCars++;

console.log('Linea #' , numberOfCars);

numberOfCars++; */

let numberOfLine = 0;

function incrementarNumeroLineas (){
 //opcion 1
    /* numberOfLine++;
    numberOfLine++; */
    
//opcion 2
/* numberOfLine = numberOfLine + 2  */

//opcion 3
//numberOfLine += 2 
} 



/* console.log('Linea #' , numberOfLine );

incrementarNumeroLineas();

console.log('Linea #' , numberOfLine );

incrementarNumeroLineas();

console.log('Linea #' , numberOfLine );

incrementarNumeroLineas();

console.log('Linea #' , numberOfLine ); */

function printLineNumber(){
    numberOfLine ++;
    console.log ('Linea #', numberOfLine);

}

printLineNumber();
printLineNumber();
printLineNumber();
printLineNumber();