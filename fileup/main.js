// Script para mover archivos redundantes un nivel arriba
const fs = require('fs');
const md5file = require('md5-file');
const rootdir = process.argv[2];    // Input: directorio a escanear

// Proceso1: escanear todos los subdirectorios e identificar archivos en cada nivel
  // Funcion que recibe directorio y retorna lista con [ lista de subdirs, lista de archivos ]
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

const iterateDir = (listArray, dirname) => {
  var dirArray = new Array(listArray[0], listArray[1], []);

  for (var i = 0; i < listArray[0].length; i++) {
    var subList = listDir(dirname+'/'+listArray[0][i]);
    dirArray[2].push(subList);
  }

  console.log(dirname,'\n-----\n',dirArray,'\n--*--\n');
  return(dirArray);
}

  // Funcion que

listDir(rootdir);

// Salida: dialogo para confirmar que quieres mover cada grupo de archivos (+ opcion para si a todo)
// Proceso2: enviar una copia de los archivos redundantes un nivel arriba y eliminar el resto


//const hash = md5file.sync('package-lock.json')
//console.log(`The MD5 sum of LICENSE.md is: ${hash}`)
