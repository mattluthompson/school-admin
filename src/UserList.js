import React, {Component} from 'react';
import {mapList} from './mapList';

class UserList extends Component {
    render() {
        return(
            <div>
                {mapList(this.props.list)}
            </div>
        );
    }
}

export default UserList;