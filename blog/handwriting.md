---
slug: js-handwriting
title: "JS经典手写题"
authors: [Pisco]
tags: [JS, Interview]
---

<!--truncate-->


### 实现 new 过程
```js
function myNew(fn, ...args) {
	const obj = {};
	obj.__proto__ = fn.prototype;
	fn.apply(obj, args);
	return obj;
}
```

### 随机打乱数组
```js
// method one
const randomArray = (arr) => {
	return arr.sort(() => {
		return Math.random() > 0.5 ? 1 : -1;
	})
}

// method two
const randomArray = (arr) => {
	let i = arr.length;
	while(i) {
		let j = Math.floor(Math.random() * i--);
		[arr[j], arr[i]] = [arr[i], arr[j]];
	}
}
```

### 节流和防抖
> 概念
- 防抖：频繁地触发某事件 fn，只有在触发时间间隔大于delay时才会执行一次 fn，若在delay时长内再次触发，则重新计时delay。也就是说若在fn触发后delay时长内没有再次触发，fn才会执行一次。
- 节流：频繁地触发某事件 fn，fn 会以固定的时间间隔 delay执行。也就是说，无论触发了多少次fn事件，fn事件都只会每delay时长执行一次。
- 区别：假设一直触发fn，防抖会在每次触发时重置delay计时；而节流不会重置计时，只是会忽略触发fn后delay时长内触发的其他fn。
```js
// 节流
function throttle(fn, delay = 200) {
	let flag = true;
	return function(...args) {
		if(!flag) return;
		flag = false;
		let timer = setTimeout(() => {
			fn.apply(this, args);
			flag = true;
			clearTimeout(timer);
		}, delay);
	}
}
// 防抖
function debounce(fn, delay = 200) {
	let timer;
	return function(...args) {
		if(timer) {
			clearTimeout(timer);
			timer = null;
		}
		timer = setTimeout(() => {
			fn.aply(this, args);
			clearTimeout(timer);
			timer = null;
		}, delay);
	}
}
```

### setTimeout 和 setInterval 互相实现
```js
// setTimeout 实现 setIntereval
const myInterval = (fn, delay) => {
	let timer = null;
	const interval = () => {
		fn();
		timer = setTimeout(interval, delay);
	}
	timer = setTimeout(interval, delay);
	return {
		cancel: () => {
			clearTimeout(timer);
		}
	}
}

// setInterval 实现 setTimeout
const myTimeout = (fn, delay) => {
	const timer = setInterval(() => {
		fn();
		clearInterval(timer);
	}, delay);
}
```

### compose 函数
```js
function fn1(x) {
	return x + 1;
}
function fn2(x) {
	return x + 2;
}
function fn3(x) {
	return x + 3;
}
function fn4(x) {
	return x + 4;
}
const compose = (...fns) => {
	if(fns.length === 0) return (num) => num;
	if(fns.length === 1) return fns[0];
	return fns.reduce((pre, next) => {
		return (num) => {
			return pre(next(num))
		}
	})
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+1+2+3+4=11
```

### Currying 函数
柯里化的更详细的介绍，请移步[这里](/docs/JavaScript/currying)
```js
function curry(func) {
	return function curried(...args) {
		if(args.length >= func.length) {
			return func.apply(this, args);
		} else {
			return function(...args2) {
				return curried.apply(this, args.concat(args2));
			}
		}
	};
}
// use
function sum(a, b, c) {
  return a + b + c;
}
let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3)); // 仍然可以被正常调用
console.log(curriedSum(1)(2,3)); // 对第一个参数的柯里化
console.log(curriedSum(1)(2)(3)); // 全柯里化
```

### LRU 算法

> **LRU**是 Least Recently Used 的缩写，即最近最少使用。根据一个非常著名的计算机操作系统基础理论得来：**最近使用的页面数据会在未来一段时间内仍然被使用，已经很久没有使用的页面很有可能在未来较长的一段时间内仍然不会被使用**。所以存在一种常见的 *页面置换算法*，选择最近最久未使用的页面予以淘汰。

基于此思想设计一种缓存算法：
**************
![problem](@site/static/img/JS/LRU.jpg)
**************
```js
class LRUCache {
	constructor(size) {
		this.size = size;
		this.cache = new Map();
	}
	get(key) {
		const hasKey = this.cache.has(key);
		if(!hasKey) return -1;
		const val = this.cache.get(key);
		this.cache.delete(key);
		this.cache.set(key, val);
		return val;
	}
	put(key, value) {
		const hasKey = this.cache.has(key);
		if(haskey) this.cache.delete(key);
		this.cache.set(key, value);
		if(this.cache.size > this.size) this.cache.delete(this.cache.keys().next().value);
	}
}
```

### 发布订阅模式
```js
class EventEmitter {
	constructor() {
		this.cache = [];
	}
	on(name, fn) {
		const tasks = this.cache[name];
		if(tasks) {
			tasks.push(fn);
		} else {
			this.cache[name] = [fn];
		}
	}
	off(name, fn) {
		if(!name) {
			this.cache = [];
			return;
		}
		const tasks = this.cache[name];
		if(tasks) {
			if(!fn) this.cache[name] = [];
			const index = tasks.findIndex(item => item === fn);
			if(index >=0) tasks.splice(index, 1);
		}
	}
	emit(name, ...args) {
		// make a copy，防止回调里继续 on， 导致死循环
		const tasks = this.cache[name].slice();
		if(tasks) {
			for(let task of tasks) {
				task(...args);
			}
		}
	}
	once(name, cb) {
		const fn = (...args) => {
			cb(...args);
			this.off(name, fn);
		};
		this.on(name, fn);
	}
}
// 测试
let testEvent = new EventEmitter()
let fn1 = function(name, gender) {
	console.log(`${name} ${gender}`)
}
let fn2 = function(name, gender) {
	console.log(`hello, ${name} ${gender}`)
}
testEvent.on('test', fn1)
testEvent.on('test', fn2)
testEvent.emit('test', false, 'Pisco', male)
// 'Pisco male'
// 'hello, Pisco male'

```

### lazyMan 函数
要求：
实现一个lazyMan函数，可以按照以下方式调用
```js
lazyMan("Pisco");
// res:
// Hi! This is Pisco!

lazyMan("Pisco").sleep(10).eat("dinner");
// res:
// Hi! This is Pisco!
// 等待10s
// Wake up after 10
// Eat dinner~

lazyMan("Pisco").eat("dinner").eat("supper");
// res:
// Hi! This is Pisco!
// Eat dinner~
// Eat supper~

lazyMan("Pisco").eat("supper").sleepFirst(5);
// res:
// 等待5s
// Wake up after 5
// Hi! This is Pisco!
// Eat supper~
```
实现：
```js
class _lazyMan {
	constructor(name) {
		const fn = () => {
			console.log(`Hi! This is ${name}!`);
			this.next();
		}
		this.tasks = [];
		this.tasks.push(fn);
		setTimeout(() => {
			this.next();
		})
	}
	next() {
		const task = this.tasks.shift();
		task && task();
	}
	sleep(delay) {
		this.sleepWrapper(delay);
		return this;
	}
	sleepFirst(delay) {
		this.sleepWrapper(delay, true);
		return this;
	}
	sleepWrapper(time, first) {
		const fn = () => {
			setTimeout(() => {
				console.log(`Wake up after ${time}`);
				this.next();
			}, time * 1000);
		}
		if(first) {
			this.tasks.unshift(fn);
		} else {
			this.tasks.push(fn);
		}
	}
	eat(food) {
		const fn = () => {
			console.log(`Eat ${food}`);
			this.next();
		}
		this.tasks.push(fn);
		return this;
	}
}
const lazyMan = (name) => {
	return new _lazyMan(name);
}
```

### 实现 async/await
```js
const toAsync = (fn) => {
	return function() {
		const gen = fn.apply(this, arguments);
		return new Promise((resolve, reject) => {
			function go(key, arg) {
				let res;
				try {
					res = gen[key](arg);
				} catch(e) {
					return rerject(e);
				}
				const { value, done } = res;
				if(done) {
					return resolve(value);
				} else {
					return Promise.resolve(value).then(val => {
						go('next', val);
					}).catch(err => {
						go('throw', err);
					})
				}
			}
			go('next');
		})
	}
}
```