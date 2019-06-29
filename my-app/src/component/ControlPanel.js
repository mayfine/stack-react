import React, { Component } from 'react';
import action from '../flux-demo';
import store from '../flux-demo/store';
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

        action.INCREMENT();

        console.log(store);
    }

    increment () {

        // this.state.count--;
        // this.forceUpdate();
        
        this.setState({ count: this.state.count - 1 });

        // 响应父子节点事件绑定
        this.props.onUpdate(this.state.count, 666);

        action.DECREMENT();

        console.log(store);
    }

    componentWillReceiveProps (nextProps) {
        // console.log('rrr1');
    }

    componentDidUpdate (nextProps) {
        // console.log('rrr');
    }
}

export default ControlPanel;
