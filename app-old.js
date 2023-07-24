const http = require('http');

http.createServer((req, res) => {

    //cambiar tipo de status
    //res.writeHead(200, { 'Content-Type': 'text/plain'}) // a pesar se ser json es un archivo de texto plano por el header
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv') // para que descargue el archivo con un nombre en especifico 
    //res.writeHead(200, { 'Content-Type': 'application/csv'})


    res.write('Hola mundo'); // La res solo acepta strings por lo que hay que modificarlo con json
    res.end();

})
.listen(8080);

console.log('Escuchando el puerto', 8080)