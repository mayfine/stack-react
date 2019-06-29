### Flux框架单向数据流

Flux应用组成结构
- Dispatcher，处理动作分发，维持Store的数据调度；
- Store，数据存储及相关处理逻辑；
- Action，驱动Dispatcher；
- View，视图显示。

大致了解了Flux应用的组成之后，现在开始着手捋一下Flux应用的大致实现过程。接下来的演示过程，view这部分依赖react脚手架来进行。

首先我新建了一个文件夹，命名为 `flux-demo` ，组成如下：
1. action文件夹，事件触发
2. dispatcher文件夹，事件分发器
3. store文件件，数据存储类
4. index.js，负责输出dispatcher注册的API

#### Dispatcher

Dispatcher主体是Flux的引入并且实例化输出

```javascript
import { Dispatcher } from 'flux';

export default new Dispatcher();
```

#### Action

Action这块的功能演示，这里只做了两件事情，一个是Dispatcher上事件的注册，一个是对外的输出，代码实现如下

```javascript
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

```

#### Store

Store还是一个数据层面的一个维护及输出，这里只演示一个简单的数据的加减法操作

```javascript
/**
 * @file 数据维护
 * @function doIncrement 加法操作
 * @function doDecrement 减法操作
 */

class Store {
    constructor () {
        this.count = 0;
    }

    doIncrement () {
        this.count++;
    }

    doDecrement () {
        this.count--;
    }
};

export default new Store();

```

以上，我们就基本简单地把Flux的组成模块凑一起了，直接在View层进行引入及调用就可以。简单的一个实现，有助于对Flux有个基本的了解。

