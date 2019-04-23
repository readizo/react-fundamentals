import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

//Person upper case character, all elements starting with lower case are reserved for native HTML, 
//all custom elements better to be upper case character

const app = props => {
 const [ personsState, setPersonsState ] =  useState({
    persons:[
      {name: "Max", age:28},
      {name: "Sachin", age:45},
      {name: "Manu", age:29}
    ],
    otherArray: [1,2,3]
  });

  console.log(personsState);

  const switchNameHandler = () => {
    //console.log("was clicked");
    //personsState.persons[0].name ="sandeep"; - DONT DO THIS
    setPersonsState({persons:[
             {name: "Sandeep", age:28},
             {name: "Sachin", age:45},
             {name: "Manu", age:5}
             ],
             otherArray: personsState.otherArray 
         })
   }


    return (
      <div className="App">
       <h1>IM a react app </h1>
       <button onClick={switchNameHandler}>Switch Name</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>



      </div>
      //<h1>Another heading</h1>

    );

    //return React.createElement('div', null, 'h1', 'Im react app!!!' ); 
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'im react app'));
  
}

export default app;

//state is reserved keyword
//if state changes it will lead React to rerender/update DOM
//supported events https://reactjs.org/docs/events.html#supported-events
//it will simply overwrite other state by this state



