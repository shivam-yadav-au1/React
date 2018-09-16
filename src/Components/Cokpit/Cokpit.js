import React from 'react';
import classes from './Cokpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props)=>{

    let btnClass = '';
    
    const assignedClassess=[];

    if(props.showPerson){
        btnClass = classes.Red;
    }
     if(props.persons.length >=2){
        assignedClassess.push(classes.red);
    }
    if(props.persons.length <= 1){
        assignedClassess.push(classes.bold);
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClassess.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>Switch Name</button>
            <button onClick={props.logIn}>Log In</button>
        </Aux>
    );

};

export default cockpit;