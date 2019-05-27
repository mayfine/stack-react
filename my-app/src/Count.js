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
                <ControlPanel caption="First" />
                <ControlPanel caption="Second" initValue={10} />
            </div>
        );
    }
}

export default Count;
