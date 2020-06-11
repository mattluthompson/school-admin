import React, {Component} from 'react';
import {mapList} from "../../mapList";

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
          const beginningIndex = value.indexOf("(") + 1
          const endingIndex = value.indexOf(")")
          value = this.props.teachers[value.slice(beginningIndex,endingIndex)]
        }

        this.setState({
          [name]: value
        });
    }
    
    handleSubmit = (event) => {
        let teacherObject = {ID: this.state.classTeacher.ID, firstName: this.state.classTeacher.firstName, lastName: this.state.classTeacher.lastName}
        this.props.create(this.state.classID, teacherObject, this.state.className);
        
        let classObject = {
          ID: this.state.classID,
          name: this.state.className
        }

        this.props.editTeacher(this.state.classTeacher.ID, null, null, classObject, null);
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
                    <select  name = "classTeacher" onChange = {this.handleInputChange} required>
                        {mapList(this.props.teachers).map((teacher, index) => {
                          return <option key = {index}>{"("+teacher[1]+") "+teacher[4]+", "+teacher[3]}</option>
                        })}
                    </select>
              </label><br /><br />
            <input type = "submit" value = "Add Class" />
          </form>
        );
    }
}

export default ClassSignUp;