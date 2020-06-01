import React, {Component} from 'react';
import {mapList} from './mapList';

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
        let value = target.value.slice(1,4);

        if(name === "classID") {
            value = target.value.slice(1,5);
        } 

        this.setState({
          [name]: value
        });
    }

    handleSubmit = () => {
        this.props.editStudent();
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
                          return <option key = {index}>{"("+classroom[0]+") "+classroom[2]}</option>;
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
