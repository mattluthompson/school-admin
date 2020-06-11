import React, {Component} from 'react';
import {mapList} from '../mapList';

class AssignStudent extends Component {

    constructor(props){
        super(props);
        this.state = {
            classID: '',
            studentID: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;

        const beginningIndex = target.value.indexOf("(") + 1
        const endingIndex = target.value.indexOf(")")

        let value = target.value.slice(beginningIndex,endingIndex);

        this.setState({
          [name]: value
        });
    }

    handleSubmit = () => {
        let classObject = {
            ID: this.props.classes[this.state.classID].ID,
            name: this.props.classes[this.state.classID].name,
            teacher: this.props.classes[this.state.classID].teacher
        }

        this.props.editStudent(this.state.studentID, null, null, classObject, null);

        let studentObject = {
            ID: this.props.students[this.state.studentID].ID,
            firstName: this.props.students[this.state.studentID].firstName,
            lastName: this.props.students[this.state.studentID].lastName
        }
        
        this.props.editClass(this.state.classID, null, null, studentObject, null)
    }

    render() {
        return(
            <div>
                <form>
                    <label>
                        Student:{" "}
                        <select  name = "studentID" onChange = {this.handleInputChange} required>
                        {mapList(this.props.students).map((student, index) => {
                          return <option key = {index}>{"("+student[0]+") "+student[4]+", "+student[3]}</option>
                        })}
                        </select>
                    </label><br/>
                    <label>
                        Class:{" "}
                        <select  name = "classID" onChange = {this.handleInputChange} required>
                        {mapList(this.props.classes).map((classroom, index) => {
                          return <option key = {index}>{"("+classroom[0]+") "+classroom[2]+" - "+classroom[4][3]+", "+classroom[4][2]}</option>;
                        })}
                        </select>
                    </label><br />
                </form>
                <button onClick = {this.handleSubmit}>Assign Student to Class</button>
            </div>
        );
    }
}

export default AssignStudent;
