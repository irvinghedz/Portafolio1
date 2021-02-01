console.log('Tu suerte es:');
const signo=['capricornio', 'aries', 'libra', 'virgo', 'escorpio', 'acuario', 'tauro', 'cancer', 'sagitario', 'leo', 'geminis'];
const ciudad=['Vancouver', 'Alamo', 'Poza Rica', 'Puebla', 'Barcelona', 'Madrid', 'Miami', 'Cancun','Carmen', 'Toronto', ' Paris'];
const numero= () => {
const num = Math.floor(Math.random()*11);
return num;
}
console.log ('Te eneamoraras de alguien con el signo de '+signo[numero()]+' y viviran en '+ciudad[numero()]+' y tendrán '+numero()+' hijos');