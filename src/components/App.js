import React from 'react';
import Header from './Header';
import ContestPreview from "./ContestPreview";


class App extends React.Component  {
  state = {
    pageHeader : 'Naming Contests',
    contests: this.props.initialContests
  };
  componentDidMount() {
    // axios.get('/api/contests')
    // .then(resp => {
    //   this.setState({
    //       contests: resp.data.contests
    //     });
    // })
    // .catch(console.error);
  }
  componentWillUnmount() {

  }
  render() {
    return(
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
        {this.state.contests.map(contest => 
             <ContestPreview key={contest.id} {...contest} />
          )}
        </div>

      </div>
    );
  }
}

export default App;





// constructor(props){
//   super(props);
//   this.state = {test : 42};
// }















// const App = () => {
//   return (
//     <div className="App">
//       <Header message="Naming Contest" />
//       <div>
      
//       </div>
//     </div>
//   );
// };
