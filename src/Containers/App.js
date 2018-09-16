import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cokpit/Cokpit';
import WithClass from '../hoc/WithClass';


class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    person: [
      {id:'sdafha', name: "Max", age: 24 },
      {id:'jjkks', name: 'Dhoni', age: 27 }
    ],
    showPersons:false,
    toggleClicked:0,
    authenticated:false

  }
}
 
 
  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState((prevState,props)=>{
      return { 
          showPersons:!doesShow,
          toggleClicked: prevState.toggleClicked+1
        
        }
      } );
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
    
    const person =[...this.state.person];
    console.log("=======>"+person);
    person.splice(personIndex,1);
    this.setState({person:person});
  }

  loginHandler = ()=>{

    this.setState({authenticated:true});
  }
  render() {

    

    let persons = null;
    

    if(this.state.showPersons){
      persons = <Persons 
          persons={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler}
          isAuthenticated={this.state.authenticated}/>;
    }
    //let classess = ['red','bold'].join(' ');

    return ( 

      <WithClass classes={classes.App}>
        <Cockpit 
        appTitle={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.person}
        clicked={this.togglePersonHandler}
        logIn={this.loginHandler}/>
        {persons}
      </WithClass>


    );

    //return React.createElement('div',null,React.createElement('h1',{className:'App'},'Hi, I am React Developer'));
  }
}

export default App;
