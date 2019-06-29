/**
 * @file dispatch事件注册
 * 
 * 处理动作分发，维持和Store之间的关系
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import Store from '../store';

const ALL_EVENT_HANDLER = {
    INCREMENT: Store.doIncrement,
    DECREMENT: Store.doDecrement
};

// 事件注册
AppDispatcher.register(action => {
    let matchedHandler = ALL_EVENT_HANDLER[action.type]
    
    matchedHandler && matchedHandler.apply(Store);
});

let allExportEvent = {};

// API输出
Object.keys(ALL_EVENT_HANDLER).forEach(eKey => {
    allExportEvent[eKey] = () => {
        AppDispatcher.dispatch({
            type: eKey
        })
    };
});

export default allExportEvent;
