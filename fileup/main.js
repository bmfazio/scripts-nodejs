REVISA ESTO:
https://ourcodeworld.com/articles/read/420/how-to-read-recursively-a-directory-in-node-js
// Script para mover archivos redundantes un nivel arriba
const fs = require('fs');
const md5file = require('md5-file');
const rootdir = process.argv[2];    // Input: directorio a escanear

// Proceso1: escanear todos los subdirectorios e identificar archivos en cada nivel


// Salida: dialogo para confirmar que quieres mover cada grupo de archivos (+ opcion para si a todo)
// Proceso2: enviar una copia de los archivos redundantes un nivel arriba y eliminar el resto


const hash = md5file.sync('package-lock.json')
console.log(`The MD5 sum of LICENSE.md is: ${hash}`)
