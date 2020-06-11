import React, {Component} from 'react';
import {mapList} from './mapList';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserList extends Component {

    render() {
        return(
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Lase Name</th>
                            <th>Class List</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.props.list).map((key) => {
                            return (this.props.list[key].classList.length === 1 ? <tr>
                                <th scope = "row">{this.props.list[key].ID}</th>
                                <td>{this.props.list[key].firstName}</td>
                                <td>{this.props.list[key].lastName}</td>
                                {this.props.list[key].classList[0] === "no current classes" ? 
                                    <td>No enrolled classes.</td>
                                    : 
                                    this.props.list[key].classList.map((classObj, index) => {
                                        console.log(index)
                                        return <td>{"Class: ("+classObj.ID+") " + classObj.name}<br />{"Teacher: ("+classObj.teacher.ID+") "+classObj.teacher.firstName+" "+classObj.teacher.lastName}</td>
                                    })
                                }
                                </tr> : ([<tr>
                                <th scope = "row" rowSpan={this.props.list[key].classList.length}>{this.props.list[key].ID}</th>
                                <td rowSpan={this.props.list[key].classList.length}>{this.props.list[key].firstName}</td>
                                <td rowSpan={this.props.list[key].classList.length}>{this.props.list[key].lastName}</td>
                                <td>{"Class: ("+this.props.list[key].classList[0].ID+") " + this.props.list[key].classList[0].name}<button>Edit Class</button><br />{"Teacher: ("+this.props.list[key].classList[0].teacher.ID+") "+this.props.list[key].classList[0].teacher.firstName+" "+this.props.list[key].classList[0].teacher.lastName}</td>
                                </tr>,
                                this.props.list[key].classList.map((classObj, index) => {
                                    return index === 0 ? null : <tr><td>{"Class: ("+classObj.ID+") " + classObj.name}<br />{"Teacher: ("+classObj.teacher.ID+") "+classObj.teacher.firstName+" "+classObj.teacher.lastName}</td></tr>
                                })
                                ]) 
                            )}
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default UserList;