## React新的前端思维方式

### 初识JSX
定义：Javascript的语法扩展（eXtension）
作用：在JS中编写像HTML一样的代码

JSX和HTML的基本区别：
1. JSX中的“元素”不局限于HTML元素，可以是一个组件；
2. JSX直接通过onClick进行事件绑定，在HTML中是“不规范”的写法。

##### JSX中onClick和HTML中onclick对比

- HTML中onclick的缺点：
    1. 添加的事件是在全局环境下执行，造成全局环境污染；
    2. 会影响网页性能，事件越多，性能越低；
    3. 绑定事件的DOM删除后需注销事件处理器，否则可能造成内存泄漏；

- JSX中的onClick
    1. 不是直接在DOM节点上进行事件添加，而是使用事件委托（event delegration）挂载在最顶层的DOM节点上，性能上比直接在DOM节点上一个个添加要高；
    2. 所有的onClick都存在组件作用域中，所有事件注册会随着组件的销毁而销毁，不污染全局变量，也不会造成内存泄漏。

### React工作方式

>UI ＝ render(data)

抽象过程：HTML --> DOM --> Virtual DOM

工作流程：事件 --> render --> Virtual DOM --> DOM修改

利用函数式编程的思维来解决用户界面渲染的问题，提高开发效率，增强代码可维护性和可读性。



