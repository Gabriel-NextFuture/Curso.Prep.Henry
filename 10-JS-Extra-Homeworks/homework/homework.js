// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
return Object.entries(objeto)
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí:
    var obj = {}; 
    for(var i in string){
        obj[string[i]] = ( obj[string[i]] || 0 ) + 1;
    }
    return obj;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí:
  var quitarMa= function (s){
    var arrMa=[];
    var arrMi=function (stri){
      var minusculas=[];
      for(let i =0;i < stri.split('').length; i++){
        minusculas.push(stri[i].toLocaleLowerCase().toString())
      }return minusculas.join('')
    }
  for(let i = 0;i < s.length;i++){
    if(arrMi(s).includes(s[i]) === false){
      arrMa.push(s[i])
    }
  }return arrMa.join('')
}
  var quitarMi= function (str){
    var arrMi=[];
    var arrMa=function (stri){
      var mayusculas=[];
      for(let i =0;i < stri.split('').length; i++){
        mayusculas.push(stri[i].toLocaleUpperCase())
      }return mayusculas.join('')
    }
  for(let i = 0;i < str.split('').length;i++){
    if(arrMa(str).includes(str[i]) === false ){
      arrMi.push(str[i])
    }
  }return arrMi.join('');
}
  var add= function (string){
    var arrayFinal=[];
    arrayFinal.push(quitarMa(string).concat(quitarMi(string)))
    return arrayFinal.toString()
  }
  return add(s);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
  var redu= function (str){
    var mt=str.split('');
    mt.push(' ');
    var array=[];
    mt.reduce(function(valorA,valorN){
      if(valorN === ' '){return array.push(valorA)}
      return valorA + valorN;
    })
    return array;
  }
  var arr= function(array){
    var arr=[];
    for(let i =0;i < array.length;i++){
      arr.push(array[i].split(''))
    }return arr;
  }
  var reve=function (array){
    arr1Reve=[];
    arr2Reve=[];
    arrfReve=[];
    arr1Reve.push(array[0].reverse())
    for(let i =1;i < array.length;i++){
      arr2Reve.push(array[i].slice(1).reverse())
      arrfReve=arr1Reve.concat(arr2Reve)
    }return arrfReve
  }
  var finish=function (array){
    arrayi=[];
    for(let i=0; i < array.length;i++){
    arrayi.push(array[i].join(''))
    }return arrayi.join(' ')
  }
  
  return finish(reve(arr(redu(str))))
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí:
  if(numero.toString().split('').toString() === numero.toString().split('').reverse().toString()){
    return 'Es capicua'
  }else {return 'No es capicua'}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí:
  array=[];
  var comprobar= function (string){
    letrasABC=[];
    for(let i = 0;i < string.split('').length;i++){
      if(string[i] === 'a' || string[i] === 'b' || string[i] === 'c'){
        letrasABC.push(string[i]);
      }
    }return letrasABC;
  }
  for(let i =0;i < cadena.length;i++){
    if(comprobar(cadena).includes(cadena[i]) !== true){
      array.push(cadena[i])
    }
  }return array.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí:
  return arr.sort(function(a, b){return a.length - b.length})
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí:
  intersección=[];
  for(let i =0; i < arreglo2.length;i++){
    if(arreglo1.includes(arreglo2[i]) === true){
      intersección.push(arreglo2[i])
    }
  }return intersección;  
}

/*Muy buenos ejercicios, parece que este test no admite o es incopatible con los metodos 
"String.prototype.replace()" y "String.prototype.replaceAll()", por lo que tuve que usar
el metodo "Array.prototype.join()" que resultó mas sencillo y resumido.
*/



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

