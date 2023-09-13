console.log('----------Inicio del programa---------'); 

export let weekDay:number  = 0; // 1= Lunes, 2= Martes, 3= Miercoles, 4= Jueves, 5= Viernes, 6= Sabado, 7= Domingo

switch ( weekDay ){

    case 1: 
        console.log('Es lunes');
        break
    case 2: 
        console.log('Es martes');
        break
    case 3: 
        console.log('Es miercoles');
        break
    case 4: 
        console.log('Es jueves');
        break
    case 5: 
        console.log('Es viernes');
        break
    case 6: 
        console.log('Es sabado');
        break
    case 7: 
        console.log('Es domingo');
        break
    default:
        console.log('no es un dia de la semana')
}

 console.log('-----------Fin del programa----------');