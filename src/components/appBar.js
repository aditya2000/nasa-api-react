import React, {Component} from 'react';
import './appBar.css';

class AppBar extends Component {
    render() {
        return(
            <div className="appBar">
                <h1><i class="fas fa-user-astronaut"></i> Mars!</h1>
            </div>
        );
    }
}

export default AppBar;