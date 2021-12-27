const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

var allowedOrigins = ['http://localhost:3000',
                      'https://reverent-leakey-90670b.netlify.app'];

app.use(cors())
// app.use(cors({
//     origin: function(origin, callback){
//         // allow requests with no origin 
//         // (like mobile apps or curl requests)
//         if(!origin) return callback(null, true);
//         if(allowedOrigins.indexOf(origin) === -1){
//           var msg = 'Las politicas de CORS policy para este sitio no le permiten ' +
//                     'tener acceso al origen especificado.';
//           return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//       }
// }))

app.get('/video', (req, res) => {
    res.sendFile('assets/video1.mp4', { root: __dirname });
});

// ruta de videos
const Videos = require('./routes/Videos')
app.use('/videos', Videos)

app.listen(process.env.PORT || port, () => {
    console.log('Escuchando en el puerto 5000!')
}); 

