// Script para mover archivos redundantes un nivel arriba
const fs = require('fs');
const md5file = require('md5-file');
const rootdir = process.argv[2];    // Input: directorio a escanear

// Proceso1: escanear todos los subdirectorios e identificar archivos en cada nivel
  // Funcion que recibe directorio y pasa lista con [ lista de subdirs, lista de archivos ] + ubicacion actual
const listDir = (dirname) => {
  readres = fs.readdirSync(dirname);
  var arrayFile   = new Array();
  var arrayFolder = new Array();

  for (var i = 0; i < readres.length; i++) {
    var tmpExamine = fs.lstatSync(dirname+'/'+readres[i]);
    if(tmpExamine.isFile()) arrayFile.push(readres[i]);
    if(tmpExamine.isDirectory()) arrayFolder.push(readres[i]);
  }

  return(iterateDir([arrayFolder, arrayFile], dirname));
}

	// Funcion que llama listDir en cada directorio del la lista de subdirs que recibio
const iterateDir = (listArray, dirname) => {
  var dirArray = new Array(listArray[0], listArray[1], []);

  for (var i = 0; i < listArray[0].length; i++) {
    var subList = listDir(dirname+'/'+listArray[0][i]);
    dirArray[2].push(subList);
  }

  //console.log(dirname,'\n-----\n',dirArray,'\n--*--\n');
  return(dirArray);
}

listDir(rootdir);
	// Resultado hasta aqui: array con estructura recursiva de todas las carpetas y archivos desde el rootdir
	
// Proceso2: recorrer los segmentos de archivos del array anteriormente producido para generar los hash md5
// Proceso3: identificar hash duplicados en cada nivel y retornar el nombre del archivo correspondiente (basta uno, todos son iguales!)
// Proceso4: mover los nombres arriba seleccionados un nivel arriba (copiar, luego borrar)



// Salida: dialogo para confirmar que quieres mover cada grupo de archivos (+ opcion para si a todo)
// Proceso2: enviar una copia de los archivos redundantes un nivel arriba y eliminar el resto


//const hash = md5file.sync('package-lock.json')
//console.log(`The MD5 sum of LICENSE.md is: ${hash}`)
