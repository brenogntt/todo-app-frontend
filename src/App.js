import React, { Component } from 'react'; // {} are used for those imports which are not the 'export default' item from a module. React is the export default in its class. Component is exportable as well, but it's not the default export. See the example for FirstComponent and SecondComponent
//import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'

import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/*<Counter/>*/}
        <TodoApp />
      </div>
    );
  }
}

/*class LearningExamples extends Component {
  render(){
    return (
      <div className="App">
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}*/

export default App;
