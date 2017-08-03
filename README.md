# testapiproxy

> 技术栈 vue2.0    vue-router    vue-cli   axios  element-ui

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1 解决object.assign()无法触发视图刷新的bug

```js
	let newGoods = Object.assign({},goods,{count:1})  //加一个空对象---详细请见官网响应式原理
```