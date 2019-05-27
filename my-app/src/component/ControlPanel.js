import React, { Component } from 'react';

class ControlPanel extends Component {
    constructor (props) {
        super(props);

        this.add = this.add.bind(this);
        this.increment = this.increment.bind(this);
        this.state = {
            count: props.initValue || 1
        };
    }

    render () {
        console.log(this.props.caption + ' render');
        return (
            <div>
                <button onClick={this.add}>+</button>
                <button onClick={this.increment}>-</button>

                {this.props.caption} count: {this.state.count}
            </div>
        );
    }

    add () {
        this.setState({ count: this.state.count + 1 });
    }

    increment () {

        // this.state.count--;
        this.setState({ count: this.state.count - 1 });
        this.forceUpdate();
    }

    componentWillReceiveProps (nextProps) {
        console.log('rrr1');
    }

    componentDidUpdate (nextProps) {
        console.log('rrr');
    }
}

export default ControlPanel;
