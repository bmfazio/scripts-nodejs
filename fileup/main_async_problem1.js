// Script para mover archivos redundantes un nivel arriba
const fs = require('fs');
const md5file = require('md5-file');
const rootdir = process.argv[2];    // Input: directorio a escanear

// Proceso1: escanear todos los subdirectorios e identificar archivos en cada nivel
  // Funcion que recibe directorio y retorna lista con [ lista de subdirs, lista de archivos ]
const listDir = (dirname) => {
  fs.readdir(
    dirname,
    (err, readres) => {
      if(err) throw err;

      var arrayFile   = new Array();
      var arrayFolder = new Array();

      for (var i = 0; i < readres.length; i++) {
        var tmpExamine = fs.lstatSync(dirname+'/'+readres[i]);
        if(tmpExamine.isFile()) arrayFile.push(readres[i]);
        if(tmpExamine.isDirectory()) arrayFolder.push(readres[i]);
      }

      iterateDir([arrayFolder, arrayFile]);
    }
  )
}

const iterateDir = (listArray) => {
  var dirArray = new Array([listArray[0], listArray[1], []]);

  for (var i = 0; i < listArray[0].length; i++) {
    dirArray[2].push(listDir(listArray[0][i]));
  }

  console.log(dirArray);
}

  // Funcion que

listDir(rootdir);

// Salida: dialogo para confirmar que quieres mover cada grupo de archivos (+ opcion para si a todo)
// Proceso2: enviar una copia de los archivos redundantes un nivel arriba y eliminar el resto


//const hash = md5file.sync('package-lock.json')
//console.log(`The MD5 sum of LICENSE.md is: ${hash}`)
