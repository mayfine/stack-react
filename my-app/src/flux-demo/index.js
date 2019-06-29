import * as ActionTypes from './dispatcher/AppDispatcher';
import AppDispatcher from './dispatcher/AppDispatcher';
import Store from './store';

// // import * as ActionTypes from './flux';
// import AppDispatcher from './dispatcher/AppDispatcher.js';

const increment = () => {
    AppDispatcher.dispatch({
        type: 'INCREMENT'
    });
}

AppDispatcher.register(action => {
    console.log(action);

    switch (action.type) {
        case 'INCREMENT':
            
            Store.doIncrement();

            break;
    
        default:
            break;
    }
});

export default increment;
