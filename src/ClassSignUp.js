import React, {Component} from 'react';
import {mapList} from "./mapList";

class ClassSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classID: '',
            className: '',
            classTeacher: '',
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        let value = target.value;

        if (name === "classTeacher"){
          value = this.props.teachers[value.slice(1,4)];
        }

        this.setState({
          [name]: value
        });
        console.log(this.state)
    }
    
    handleSubmit = (event) => {
        this.props.create(this.state.classID, this.state.classTeacher, this.state.className);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
            <h1>Add Class</h1>
            <label>
              Class ID: <input name = "classID" type = "text" value = {this.state.classID} onChange = {this.handleInputChange} required/>
            </label><br /><br />
            <label>
              Class Name: <input name = "className" type = "text" value = {this.state.className} onChange = {this.handleInputChange} required/>
            </label><br /><br />
            <label>
                    Teacher:{" "}
                    <select  name = "classTeacher" onChange = {this.handleInputChange}>
                        {mapList(this.props.teachers).map((teacher, index) => {
                          return <option key = {index}>{"("+teacher[0]+") "+teacher[3]+", "+teacher[2]}</option>
                        })}
                    </select>
              </label><br /><br />
            <input type = "submit" value = "Add Class" />
          </form>
        );
    }
}

export default ClassSignUp;