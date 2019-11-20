import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import data from './testData';
import App from './components/App';


 axios.get('/api/contests')
    .then(resp => {
    	ReactDOM.hydrate(
		  <App  initialContests={resp.data.contests} />,
		  document.getElementById('root')
		);
      // this.setState({
      //     contests: resp.data.contests
      //   });
    })
    .catch(console.error);

	
























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