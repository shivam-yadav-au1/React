import React from 'react';
import classes from './Cokpit.css';

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
        <div className={classes.cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClassess.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>Switch Name</button>
        </div>
    );

};

export default cockpit;