import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// State property to define input and manage the state
class App extends Component {
  state = {
    persons: [
      { name:"Sethu", age:28 },
      { name:"Thobeka", age:26 },
      { name:"David", age:19 }
    ],
    otherState: 'some value'
  }

//Method as an event handler
  switchNameHandler = (newName) => { 
  //DONT DO THIS !!! this.state.persons[0].name = "Sethumazibuko"
    
    this.setState({persons: [
      { name: newName, age:28 },
      { name:"Thobeka", age:31 },
      { name:"David", age:19 }
    ]})
  }


  render() {
    return (
      <div className="App">
        <h1>Hi I am React App </h1>
        <p>This releay works</p>
        <button onClick={this.switchNameHandler.bind(this,'Mazibs')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this,'Msetura')}>Hobbies: Playing soccer</Person>
      </div>
    );
   }
}

export default App;

//Component does not handle state e.g person class.
// You can pass data that can change state to other components 
// // State property to define input and manage the state
// const app = props => {

//   //Array desctructuring, add squre brackets 
//   const [personState,setPersonsState] = useState({
//     persons: [
//       { name: "Sethu", age: 28 },
//       { name: "Thobeka", age: 26 },
//       { name: "David", age: 19 }
//     ]
//   });

//   //Elegant way to merge old state with new state
//  const [otherState, setOtherState] = useState({ otherState: 'some value' });

//   console.log(personState, otherState);
// //Method as an event handler
//   const switchNameHandler = () => {
//     //DONT DO THIS !!! this.state.persons[0].name = "Sethumazibuko"
    
//     setPersonsState({
//       persons: [
//         { name: "Sethu Mazibuko", age: 28 },
//         { name: "Thobeka", age: 31 },
//         { name: "David", age: 19 }
//       ],
//     });
//   };

//     return (
//       <div className="App">
//         <h1>Hi I am React App </h1>
//         <p>This releay works</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age} />
//         <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
//         <Person name={personState.persons[2].name} age={personState.persons[2].age}>Hobbies: Playing soccer</Person>
//       </div>
//     );
// }

// export default app;
