//Using Expresss
import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';


import express from 'express';
const server = express();

server.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}));
server.set('view engine', 'ejs');

import serverRender from './serverRender';


server.get(['/', '/contest/:contestId'], (req, res) => {

  serverRender(req.params.contestId)
    .then(({initialMarkup, initialData}) => {
  	  res.render('index', {
	    initialMarkup,
	    initialData
	  });
    })
    .catch(error => console.log(error))
});


server.use('/api', apiRouter);
server.use(express.static('public'));

// server.get('/about', (req, res)=> {
//     fs.readFile('./about.html', (err, data) => {
//         res.send(data.toString());
//     })
// });

server.listen(config.port, config.host, () => {
  console.info('Express listening on port ', config.port);
});







// //Execires 2 b
// import http from 'http';

// const server = http.createServer((req, res) => {
//     res.write('hellow HTTP!\n');
//     setTimeout(() => {
//         res.write('I can stream!\n');
//         res.end();
//     }, 3000);
// });

// server.listen(8080);




// https.get('https://www.lynda.com', res => {
//     console.log('Respaonse status code: ', res.statusCode);

//     res.on('data', chuck => {
//         console.log(chuck.toString())
//     });
// });



//Execires 2 a
// import config, { nodeEnv, logStars } from  './config';

// console.log(config, nodeEnv, logStars);


// const data = [
//   {
//       id: "1",
//       date: "Jun 11 2012 10:00:00 AM"
//    },
//   {
//       id: "2",
//       date: "Mar 18 2018 07:00:00 AM"
//   },
//   {
//       id: "3",
//       date: "Jan 8 2015 08:00:00 AM"
//   },
//   {
//       id: "4",
//       date: "Jan 8 2005 08:00:00 AM"
//   },
//   {
//       id: "5",
//       date: "Jan 8 2019 08:00:00 AM"
//   },
//   {
//       id: "6",
//       date: "Jan 8 1993 08:00:00 AM"
//   }
// ];
// data.sort(function(a, b){
// return new Date(a.date) - new Date(b.date);
// });
// console.log(data.reverse());