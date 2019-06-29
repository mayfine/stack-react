import React, { Component } from 'react';
import ControlPanel from './component/ControlPanel';

class Count extends Component {
    constructor(props) {
        super(props);
        
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                <ControlPanel caption="First" onUpdate={this.updateState} />
                <ControlPanel caption="Second" onUpdate={this.updateState} initValue={10} />
            </div>
        );
    }

    updateState (p, n) {
        console.log(p);
        console.log(n);
    }
}

export default Count;
