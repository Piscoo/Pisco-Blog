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