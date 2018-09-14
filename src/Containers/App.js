import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cokpit/Cokpit';


class App extends React.Component {
  state = {
    person: [
      {id:'sdafha', name: "Max", age: 24 },
      {id:'jjkks', name: 'Dhoni', age: 27 }
    ],
    showPersons:false

  }
 
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
    

    if(this.state.showPersons){
      persons = <Persons 
          persons={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}/>;
    }
    //let classess = ['red','bold'].join(' ');

    return ( 

      <div className={classes.App}>
        <Cockpit 
        appTitle={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.person}
        clicked={this.togglePersonHandler}/>
        {persons}
      </div>


    );

    //return React.createElement('div',null,React.createElement('h1',{className:'App'},'Hi, I am React Developer'));
  }
}

export default App;
