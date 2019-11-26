import React from 'react';
import ReactDOM from 'react-dom';

import data from './testData';
import App from './components/App';


ReactDOM.hydrate(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
 
 // setTimeout(function () {
 // 	ReactDOM.render(
 // 		<h2>Clear!!</h2>,
 // 		document.getElementById('root')
 // 	);
 // }, 5000);
	
























//Prop Validation
// App.propTypes = {
//   headerMessage: PropTypes.string
// };

// App.defaultProps = {
//   headerMessage: 'Hello!!'
// };




















// const color = Math.random() > 0.5 ? 'green' : 'red';

// ReactDOM.render(
//     <h2 className="text-center">
//         Hello React with JSX!!
//     </h2>,
//     // React.createElement('h2', null, 'Hello React'),
//     document.getElementById('root')
// );



// ReactDOM.render(
//     <h2 style={{color}}>
//         Hello React with JSX!! -- {Math.random()}
//     </h2>,
//     // React.createElement('h2', null, 'Hello React'),
//     document.getElementById('root')
// );