import React, {Component} from 'react'
import PropsTypes from 'prop-types';
import classes from './Person.css'
import WithClass from '../../../hoc/WithClass';


class Person extends Component{

    componentDidMount(){
        if(this.props.position === 0){
            this.inputElement.focus();
        }
        
    }

    render(){
        return (
            <WithClass classes={classes.Person}>
                {this.props.authenticated ? <p>I'm authenticated</p> : null}
                <p onClick={this.props.click}>My name is {this.props.name} and my age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input ref={(inp)=> {this.inputElement=inp}} type="text" onChange={this.props.changed} />
            </WithClass>
        )
    }

}
Person.prototypes={

    click:PropsTypes.func,
    name:PropsTypes.string,
    age:PropsTypes.number,
    changed:PropsTypes.func
};

export default Person;