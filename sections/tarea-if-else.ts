console.log('----------Inicio del programa---------'); 

export let grade:number = 59;

if (grade>=90){
    console.log('La nota del alumno es: A' );
}else if (grade >= 80){
    console.log('La nota del alumno es: B' );
}else if (grade >= 70){
    console.log('La nota del alumno es: C' );
}else if (grade >= 60){
    console.log('La nota del alumno es: D' );
}else if(grade < 60){
    console.log('La nota del alumno es: F' );
}else{
    console.log('Por favor ingrese una nota valida' );
}



 console.log('-----------Fin del programa----------');