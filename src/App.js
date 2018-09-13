import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';


class App extends React.Component {
  state = {
    person: [
      {id:'sdafha', name: "Max", age: 24 },
      {id:'jjkks', name: 'Dhoni', age: 27 }
    ],
    showPersons:false

  }
  // switchNameHandler = (newName) => {
  //   //console.log("swithcNameHandler is called !"); 
  //   this.setState({
  //     person: [
  //       { name: newName, age: 24 },
  //       { name: 'Dhoni', age: 27 }
  //     ]
  //   }
  //   )
  // }
  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState ({ showPersons:!doesShow});
  }

  changeNameHandler = (event,id) => {

    const personIndex = this.state.person.findIndex(p =>{
      return p.id === id;
    });

    //console.log(this.state.person[personIndex]);
    const person = {
      ...this.state.person[personIndex]
    };
    person.name = event.target.value;
    const persons = [... this.state.person];
    persons[personIndex] = person;
    this.setState({person:persons})
  } 


  deletePersonHandler = (personIndex) =>{
    console.log("deletePersonHandler method executed......");
    const person =[...this.state.person];
    person.splice(personIndex,1);
    this.setState({person:person});
  }
  render() {

    

    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = (

        <div>
          {
              this.state.person.map((person,index) =>{
              return <Person 
              click={()=>this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event)=>this.changeNameHandler(event,person.id)}
              />
            })
          }
    

        </div>

      );
      
      btnClass = classes.Red;
      
   
    }
    //let classess = ['red','bold'].join(' ');
    const assignedClassess=[];
    if(this.state.person.length >=2){
      assignedClassess.push(classes.read);
    }
    if(this.state.person.length <= 1){

      assignedClassess.push(classes.bold);
    }

    return ( 

      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClassess.join(' ')}>This is really working</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>


    );

    //return React.createElement('div',null,React.createElement('h1',{className:'App'},'Hi, I am React Developer'));
  }
}

export default App;
