"use strict";(self.webpackChunkpisco_blog=self.webpackChunkpisco_blog||[]).push([[9480],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),k=a,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8161:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={sidebar_position:1},p="JS \u6570\u7ec4\u76f8\u5173\u77e5\u8bc6",s={unversionedId:"JavaScript/array",id:"JavaScript/array",title:"JS \u6570\u7ec4\u76f8\u5173\u77e5\u8bc6",description:"\u6570\u7ec4\u5e38\u7528\u65b9\u6cd5",source:"@site/docs/JavaScript/array.md",sourceDirName:"JavaScript",slug:"/JavaScript/array",permalink:"/docs/JavaScript/array",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TypeScript \u5165\u95e8",permalink:"/docs/TypeScript/learning-typescript"}},c={},u=[{value:"\u6570\u7ec4\u5e38\u7528\u65b9\u6cd5",id:"\u6570\u7ec4\u5e38\u7528\u65b9\u6cd5",level:3},{value:"\u6570\u7ec4\u4f7f\u7528\u8bef\u533a",id:"\u6570\u7ec4\u4f7f\u7528\u8bef\u533a",level:3}],m={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"js-\u6570\u7ec4\u76f8\u5173\u77e5\u8bc6"},"JS \u6570\u7ec4\u76f8\u5173\u77e5\u8bc6"),(0,l.kt)("h3",{id:"\u6570\u7ec4\u5e38\u7528\u65b9\u6cd5"},"\u6570\u7ec4\u5e38\u7528\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6dfb\u52a0/\u5220\u9664\u5143\u7d20"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"push(...items) --- \u4ece\u7ed3\u5c3e\u6dfb\u52a0\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"pop() --- \u4ece\u7ed3\u5c3e\u63d0\u53d6\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"shift() --- \u4ece\u5f00\u5934\u63d0\u53d6\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"unshift(...items) --- \u4ece\u5f00\u5934\u6dfb\u52a0\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"splice(pos, deleteCount, ...items) --- \u4ecepos\u5f00\u59cb\uff0c\u5220\u9664deleteCount\u4e2a\u5143\u7d20\u5e76\u5728\u5f53\u524d\u4f4d\u7f6e\u63d2\u5165\u5143\u7d20\u3002"),(0,l.kt)("li",{parentName:"ul"},"slice(start, end) --- \u4ece\u7d22\u5f15\u4e3astart\u7684\u4f4d\u7f6e\u590d\u5236\u5230end\uff08\u4e0d\u5305\u62ecend\uff09\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4"),(0,l.kt)("li",{parentName:"ul"},"concat(...items) --- \u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4\uff1a\u590d\u5236\u5f53\u524d\u6570\u7ec4\u6240\u6709\u5143\u7d20\u5e76\u6dfb\u52a0items\uff0c\u5982\u679c\u4efb\u4f55items\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u90a3\u5c31\u53d6\u5176\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"indexOf/lastIndexOf(item, pos) --- \u4ecepos\u5f00\u59cb\u5bfb\u627eitem\uff0c\u6709\u5219\u8fd4\u56de\u7d22\u5f15\uff0c\u5426\u5219\u8fd4\u56de-1"),(0,l.kt)("li",{parentName:"ul"},"includes(value) --- \u5982\u679c\u6570\u7ec4\u6709value\uff0c\u5219\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse"),(0,l.kt)("li",{parentName:"ul"},"find/filter(func) --- \u901a\u8fc7\u51fd\u6570\u8fc7\u6ee4\u5143\u7d20\uff0c\u8fd4\u56detrue\u6761\u4ef6\u7684\u7b26\u5408find\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u503c\u6216\u8005\u7b26\u5408filter\u51fd\u6570\u7684\u6240\u6709\u503c"),(0,l.kt)("li",{parentName:"ul"},"findIndex ---\u548cfind\u7c7b\u4f3c\uff0c\u533a\u522b\u662f\u8fd4\u56de\u7d22\u5f15\u800c\u4e0d\u662f\u503c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8f6c\u6362\u6570\u7ec4"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"map(func) --- \u4ece\u6bcf\u4e2a\u5143\u7d20\u8c03\u7528func\u7684\u7ed3\u679c\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4"),(0,l.kt)("li",{parentName:"ul"},"sort(func) --- \u5c06\u6570\u7ec4\u5012\u5e8f\u6392\u5217\uff0c\u7136\u540e\u8fd4\u56de"),(0,l.kt)("li",{parentName:"ul"},"reverse() --- \u539f\u5730\u98a0\u5012\u6570\u7ec4\uff0c\u7136\u540e\u8fd4\u56de"),(0,l.kt)("li",{parentName:"ul"},"split/join --- \u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u6570\u7ec4\u5e76\u8fd4\u56de"),(0,l.kt)("li",{parentName:"ul"},"reduce(func, initial) --- \u901a\u8fc7\u4e3a\u6bcf\u4e2a\u5143\u7d20\u8c03\u7528func\u51fd\u6570\u8ba1\u7b97\u6570\u7ec4\u4e0a\u7684\u5355\u4e2a\u503c\u5e76\u5728\u8c03\u7528\u4e4b\u95f4\u4f20\u9012\u4e2d\u95f4\u7ed3\u679c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8fed\u4ee3\u5143\u7d20"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"forEach(func) --- \u4e3a\u6bcf\u4e2a\u5143\u7d20\u8c03\u7528func\uff0c\u4e0d\u8fd4\u56de"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5176\u4ed6   Array.isArray(arr) --- \u68c0\u67e5arr\u662f\u5426\u662f\u4e00\u4e2a\u6570\u7ec4"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1asort\uff0creverse\u548csplice\u65b9\u6cd5\u4fee\u6539\u6570\u7ec4\u672c\u8eab\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u4e9b\u662f\u6700\u5e38\u7528\u7684\u6570\u7ec4\u65b9\u6cd5\uff0c\u8fd8\u6709\u51e0\u4e2a\u5176\u4ed6\u7684",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"arr.some(fn)/arr.every(fn)\u68c0\u67e5\u6570\u7ec4\u3002--- \u7c7b\u4f3c\u4e8emap\uff0c\u5728\u6570\u7ec4\u6bcf\u4e2a\u5143\u7d20\u4e0a\u8c03\u7528fn\uff0c\u5982\u679c\u4efb\u4f55/\u6240\u6709\u7ed3\u679c\u4e3atrue\uff0c\u5219\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse"),(0,l.kt)("li",{parentName:"ul"},"arr.fill(value, start, end) --- \u4ecestart\u5230end\u7528value\u586b\u5145\u6570\u7ec4"),(0,l.kt)("li",{parentName:"ul"},"arr.copyWithin(target, start, end) --- \u5c06\u5176\u5143\u7d20\u4ecestart\u5230end\u5728target\u4f4d\u7f6e\u590d\u5236\u5230\u672c\u8eab\uff08\u8986\u76d6\u73b0\u6709\uff09")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u751f\u6210\u7c7b\u4f3c","[1-100]","\u8fd9\u6837\u7684\u6570\u7ec4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"let arr = new Array(100).fill(0).map((item, index) => index + 1);\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u89e3\u6784\u8d4b\u503c\u5e94\u7528")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u4ea4\u6362\u53d8\u91cf\n[a, b] = [b, a]\n[o.a, o.b] =[o.b, o.a]\n// \u751f\u6210\u5269\u4f59\u6570\u7ec4\nconst [a, ...rest] = [...'asdf'] // a: 'a', rest: ['s', 'd', 'f']\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u6d45\u62f7\u8d1d")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [1, 2, 3];\nconst arrClone = [...arr];\n// \u5bf9\u8c61\u4e5f\u53ef\u4ee5\u8fd9\u6837\u6d45\u62f7\u8d1d\nconst obj = { a: 1 };\nconst objClone = { ...obj };\n// \u6d45\u62f7\u8d1d\u7684\u65b9\u6cd5\u6709\u5f88\u591a\uff0c\u5982arr.slice(0, arr.length)/Array.from(arr)\u7b49\u3002\u4f46\u662f...\u64cd\u4f5c\u7b26\u66f4\u597d\u7528\u4e00\u70b9\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u5408\u5e76")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr1 = [1, 2, 3, 4];\nconst arr2 = [5, 6];\nconst arr3 = [7, 8];\nconst arr = [...arr1, ...arr2, ...arr3]\n// arr1.concat(arr2, arr3)\u4e5f\u53ef\u4ee5\uff0c\u4f46\u662f...\u64cd\u4f5c\u7b26\u66f4\u597d\u7528\u4e00\u70b9\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u53bb\u91cd")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [1, 1, 2, 3, 4, 5, 3, 5];\nconst newArr = [...new Set(arr)]\n// new Set(arr)\u63a5\u53d7\u4e00\u4e2a\u6570\u7ec4\u53c2\u6570\u5e76\u751f\u6210\u4e00\u4e2aset\u7ed3\u6784\u7684\u6570\u636e\u7c7b\u578b\u3002set\u6570\u636e\u7c7b\u578b\u7684\u5143\u7d20\u4e0d\u4f1a\u91cd\u590d\u4e14\u662fArray Iterator\uff0c\u6240\u4ee5\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u7279\u6027\u6765\u5b9e\u73b0\u53bb\u91cd\u3002\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u53d6\u4ea4\u96c6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const a = [0, 1, 2, 3, 4, 5];\nconst b = [3, 4, 5, 6, 7, 8];\nconst duplicatedValues = [...new Set(a)].filter(item => b.includes(item));\n// duplicatedValues ==> [3, 4, 5]\n")),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u53d6\u5dee\u96c6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const a = [0, 1, 2, 3, 4, 5];\nconst b = [3, 4, 5, 6, 7, 8];\nconst diffValues = [...new Set([...a, ...b])].filter(item => !a.includes(item) || !b.includes(item));\n// diffValues ==> [0, 1, 2, 6, 7, 8]\n")),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u8f6c\u5bf9\u8c61")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [1, 2, 3, 4];\nconst newObj = { ...arr }; // { 0: 1, 1: 2, 2: 3, 3: 4 }\nconst obj = { 0: 0, 1: 1, 2: 2, length: 3};\n// \u5bf9\u8c61\u8f6c\u6570\u7ec4\u4e0d\u80fd\u7528\u5c55\u5f00\u64cd\u4f5c\u7b26\uff0c\u56e0\u4e3a\u5c55\u5f00\u64cd\u4f5c\u7b26\u5fc5\u987b\u7528\u5728\u53ef\u8fed\u4ee3\u5bf9\u8c61\u4e0a\nlet newArr = [...obj];\n// Uncaught TypeError: object is not iterable...\n// \u53ef\u4ee5\u7528Array.from()\u5c06\u7c7b\u6570\u7ec4\u5bf9\u8c61\u8f6c\u6362\u4e3a\u6570\u7ec4\nlet newArr = Array.from(obj); [0, 1, 2]\n")),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"\u6570\u7ec4\u5e38\u7528\u904d\u5386")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"\u6570\u7ec4\u5e38\u7528\u7684\u904d\u5386\u65b9\u6cd5\u6709\uff1aforEach, every, some, filter, map, reduce, reduceRight, find, findIndex\u7b49\u65b9\u6cd5\uff0c\u5f88\u591a\u65b9\u6cd5\u90fd\u53ef\u4ee5\u8fbe\u5230\u540c\u6837\u7684\u6548\u679c\n")),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},"\u904d\u5386\u7684\u6df7\u5408\u4f7f\u7528")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// filter, map\u65b9\u6cd5\u8fd4\u56de\u503c\u4ecd\u65e7\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6240\u4ee5\u53ef\u4ee5\u642d\u914d\u5176\u4ed6\u6570\u7ec4\u904d\u5386\u65b9\u6cd5\u6df7\u5408\u4f7f\u7528\u3002\u6ce8\u610f\u904d\u5386\u8d8a\u591a\u6548\u7387\u8d8a\u4f4e\uff5e\nconst arr = [1, 2, 3, 4, 5];\nconst value = arr.map(item => item * 3).filter(item => item % 2 === 0).map(item => item + 1).reduce((prev, curr) => prev + curr, 0)\n")),(0,l.kt)("ol",{start:11},(0,l.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u6570\u7ec4\u6240\u6709\u5143\u7d20\u662f\u5426\u90fd\u7b26\u5408\u5224\u65ad\u6761\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const arr = [1, 2, 3, 4, 5];\nconst isAllNum = arr.every(item => typeof item === "number");\n')),(0,l.kt)("ol",{start:12},(0,l.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u6570\u7ec4\u662f\u5426\u6709\u5143\u7d20\u7b26\u5408\u5224\u65ad\u6761\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const arr = [1, 2, 3, 4, 5];\nconst isAllNum = arr.some(item => typeof item === "number");\n')),(0,l.kt)("ol",{start:13},(0,l.kt)("li",{parentName:"ol"},"\u627e\u5230\u7b2c\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20/\u4e0b\u6807")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [1, 2, 3, 4, 5];\nconst findItem = arr.find(item => item === 3);\nconst findIndex = arr.findIndex(item => item === 3);\n")),(0,l.kt)("h3",{id:"\u6570\u7ec4\u4f7f\u7528\u8bef\u533a"},"\u6570\u7ec4\u4f7f\u7528\u8bef\u533a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6570\u7ec4\u7684\u65b9\u6cd5\u5f88\u591a\uff0c\u5f88\u591a\u65b9\u6cd5\u53ef\u4ee5\u8fbe\u5230\u540c\u6837\u7684\u6548\u679c\uff0c\u6240\u4ee5\u5728\u4f7f\u7528\u65f6\u8981\u6839\u636e\u5177\u4f53\u60c5\u51b5\u4f7f\u7528\u5408\u9002\u7684\u65b9\u6cd5\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"array.includes() \u548c array.indexOf()",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"array.includes()\u8fd4\u56de\u5e03\u5c14\u503c\uff1barray.indexOf()\u8fd4\u56de\u6570\u7ec4\u5b50\u9879\u7684\u7d22\u5f15\u3002indexOf\u4e00\u5b9a\u8981\u5728\u9700\u8981\u7d22\u5f15\u503c\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u3002")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [1, 2, 3, 4, 5];\n// \u4f7f\u7528indexOf,\u9700\u8981\u7528\u5230\u7d22\u5f15\u503c\nconst index = arr.indexOf(1) // 0\nif(~index) { // \u82e5index===-1\uff0c\uff5eindex\u5f97\u52300\uff0c\u5224\u65ad\u4e0d\u6210\u7acb\uff1b\u82e5index\u4e0d\u4e3a-1\uff0c\u5219\uff5eindex\u5f97\u5230\u975e0\uff0c\u5224\u65ad\u6210\u7acb\n    arr.spilce(index, 1);\n}\n\n// \u4f7f\u7528includes\uff0c\u4e0d\u9700\u8981\u7528\u5230\u7d22\u5f15\u503c\n// \u6b64\u65f6\u5982\u679c\u4f7f\u7528indexOf\u4f1a\u9020\u6210\u4e0a\u4e0b\u6587\u7684\u9605\u8bfb\u8d1f\u62c5\uff1a\u5230\u5e95\u522b\u7684\u5730\u65b9\u6709\u6ca1\u6709\u7528\u5230\u8fd9\u4e2aindex\nconst isExist = arr.includes(6);  // false\nif(!isExist) {\n    arr.push(6)\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"array.find()\u3001array.findIndex()\u3001array.some()",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"array.find()\u8fd4\u56de\u503c\u662f\u7b2c\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684\u6570\u7ec4\u5b50\u9879\uff0c\u65e0\u5219\u8fd4\u56deundefined\uff1b"),(0,l.kt)("p",{parentName:"blockquote"},"array.findIndex()\u8fd4\u56de\u7b2c\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684\u6570\u7ec4\u5b50\u9879\u7684\u4e0b\u6807\uff0c\u65e0\u5219\u8fd4\u56de-1\uff1b"),(0,l.kt)("p",{parentName:"blockquote"},"array.some()\u6839\u636e\u662f\u5426\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5b50\u9879\u8fd4\u56detrue/false\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e09\u4e2a\u90fd\u662f\u77ed\u8def\u64cd\u4f5c\uff0c\u5373\u627e\u5230\u7b26\u5408\u6761\u4ef6\u7684\u4e4b\u540e\u5c31\u4e0d\u518d\u904d\u5386\u6570\u7ec4\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u9700\u8981\u6570\u7ec4\u5b50\u9879\u7684\u65f6\u5019\u4f7f\u7528array.find();"),(0,l.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u7d22\u5f15\u503c\u7684\u65f6\u5019\u4f7f\u7528array.findIndex();"),(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u53ea\u9700\u8981\u77e5\u9053\u6709\u65e0\u7b26\u5408\u6761\u4ef6\u7684\u5b50\u9879\uff0c\u5219\u7528array.some()")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const arr = [{label: "\u7537", value: 0}, {label: "\u5973", value: 1}, {label: "\u4e0d\u7537\u4e0d\u5973", value: 2}];\n// \u4f7f\u7528some\nconst isExist = arr.some(item => item.value === 2);\nif(isExist) {\n    console.log("\u627e\u5230\u4e86");\n}\n// \u4f7f\u7528find\nconst item = arr.find(item => item.value === 2);\nif(item) {\n    console.log(item.label);\n}\n// \u4f7f\u7528findIndex\nconst index = arr.findIndex(item => item.value === 2);\nif(~index) {\n    const delItem = arr[index];\n    arr.splice(index, 1);\n    console.log(`\u4f60\u5220\u9664\u4e86${delItem.label}`);\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5efa\u8bae\u5728\u53ea\u9700\u8981\u5e03\u5c14\u503c\u7684\u65f6\u5019\u548c\u6570\u7ec4\u5b50\u9879\u662f\u5b57\u7b26\u4e32\u6216\u6570\u5b57\u7684\u65f6\u5019\u4f7f\u7528array.some()"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u5f53\u5b50\u9879\u5305\u542b\u6570\u5b570\u7684\u65f6\u5019\u53ef\u80fd\u51fa\u9519\nconst arr = [0, 1, 2, 3, 4, 5];\n// \u6b63\u786e\nconst isExist = arr.some(item => item === 0);\nif(isExist) {\n    console.log("exist");\n}\n// \u9519\u8bef\nconst isExist = arr.find(item => item === 0);\nif(isExist) { // \u6b64\u65f6isExist\u503c\u4e3a0\uff0c\u9690\u5f0f\u8f6c\u6362\u4e3a\u5e03\u5c14\u503c\u662ffalse\n    console.log("exist"); // \u6267\u884c\u4e0d\u5230\u8fd9\u91cc\n}\n// \u5f53\u5b50\u9879\u5305\u542b\u7a7a\u5b57\u7b26\u4e32\u7684\u65f6\u5019\u4e5f\u53ef\u80fd\u51fa\u9519\uff0c\u539f\u56e0\u540c\u4e0a\uff0c\u201c\u201d\u9690\u5f0f\u8f6c\u6362\u4e3a\u5e03\u5c14\u503c\u4e3afalse\n'))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"array.find() \u548c array.filter()"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u53ea\u9700\u77e5\u9053array.filter()\u8fd4\u56de\u7684\u662f\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5b50\u9879\u7ec4\u6210\u7684\u6570\u7ec4\uff0c\u4f1a\u904d\u5386\u6570\u7ec4\u6240\u6709\u7684\u5143\u7d20\uff1b"),(0,l.kt)("p",{parentName:"blockquote"},"\u800carray.find()\u53ea\u4f1a\u8fd4\u56de\u7b2c\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684\u5b50\u9879\uff0c\u662f\u77ed\u8def\u64cd\u4f5c"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5408\u7406\u4f7f\u7528Set\u6570\u636e\u7ed3\u6784"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u7531\u4e8eES6\u539f\u751f\u63d0\u4f9b\u4e86Set\u6570\u636e\u7ed3\u6784\uff0c\u800cSet\u53ef\u4ee5\u4fdd\u8bc1\u5b50\u9879\u4e0d\u91cd\u590d\uff0c\u4e14\u548c\u6570\u7ec4\u8f6c\u6362\u5341\u5206\u65b9\u4fbf\uff0c\u6240\u4ee5\u5728\u4e00\u4e9b\u5730\u65b9\u53ef\u80fd\u6d89\u53ca\u91cd\u590d\u6dfb\u52a0\u7684\u573a\u666f\u4e0b\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528Set\u4ee3\u66ffArray\uff0c\u907f\u514d\u5224\u65ad\u662f\u5426\u5df2\u7ecf\u5b58\u5728\u6539\u5b50\u9879")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const set = new Set();\nset.add(1);\nset.add(1);\nset.add(1);\nset.size; // 1\nconst arr = [...set]; // arr: [1]\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f3a\u5927\u7684reduce",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"array.reduce()\u904d\u5386\u5e76\u5c06\u5f53\u524d\u6b21\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4f5c\u4e3a\u4e0b\u4e00\u6b21\u56de\u8c03\u51fd\u6570\u6267\u884c\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002\u5229\u7528array.reduce\u66ff\u4ee3\u4e00\u4e9b\u9700\u8981\u591a\u6b21\u904d\u5386\u7684\u573a\u666f\uff0c\u53ef\u4ee5\u63d0\u9ad8\u4ee3\u7801\u7684\u8fd0\u884c\u6548\u7387\u3002")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5047\u5982\u6709\u6bcf\u4e2a\u5143\u7d20\u90fd\u7531\u5b57\u6bcd's'\u52a0\u6570\u5b57\u7ec4\u6210\u7684\u6570\u7ec4\uff0c\u73b0\u5728\u627e\u51fa\u5176\u4e2d\u6700\u5927\u7684\u6570\u5b57\nconst arr = ['s0', 's6', 's2', 's8', 's4'];\n// \u65b9\u6cd51  \u8fdb\u884c\u591a\u6b21\u904d\u5386\nconst newArr = arr.map(item => item.substring(1)).map(item => Number(item));\nconst maxS = Math.max(...newArr);\n// \u65b9\u6cd52  \u4e00\u6b21\u904d\u5386\nconst maxS = arr.reduce((prev, curr) => {\n    const curIndex = Number(curr.replace('s', ''));\n    return curIndex > prev ? curIndex : prev;\n}, 0)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [1, 2, 3, 4, 5, 6];\n// \u65b9\u6cd51 \u904d\u5386\u4e24\u6b21\nconst value = arr.map(item => item % 2 === 0).map(item => ({ value: item }));\n// \u65b9\u6cd52 \u904d\u5386\u4e00\u6b21\nconst value = arr.reduce((prev, curr) => {\n    return curr % 2 === 0 ? [...prev, curr] : prev;\n}, [])\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e5f\u53ef\u4ee5\u7528reduce\u505a\u4e0b\u9762\u8fd9\u6837\u7684\u5904\u7406\u6765\u751f\u6210\u60f3\u8981\u7684html\u7ed3\u6784"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u540e\u7aef\u8fd4\u56de\u6570\u636e\nconst data = {\n    'if _ then s9': [\n        '\u4f5c\u7528\u5c5e\u4e8e\u5404\u79cd,\u7ed3\u6784\u5c5e\u4e8e\u4f4f\u5b85,\u7ed3\u6784\u80fd\u627f\u53d7\u4f5c\u7528,\u4f5c\u7528\u5c5e\u4e8e\u5728\u6b63\u5e38\u5efa\u9020\u548c\u6b63\u5e38\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u53d1\u751f',\n        '\u4f5c\u7528\u5c5e\u4e8e\u5404\u79cd,\u7ed3\u6784\u5c5e\u4e8e\u4f4f\u5b85,\u7ed3\u6784\u80fd\u627f\u53d7\u4f5c\u7528,\u4f5c\u7528\u5c5e\u4e8e\u5728\u6b63\u5e38\u5efa\u9020\u548c\u6b63\u5e38\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u53d1\u751f',\n        '\u4f5c\u7528\u5c5e\u4e8e\u5404\u79cd,\u7ed3\u6784\u5c5e\u4e8e\u4f4f\u5b85,\u7ed3\u6784\u80fd\u627f\u53d7\u4f5c\u7528,\u4f5c\u7528\u5c5e\u4e8e\u5728\u6b63\u5e38\u5efa\u9020\u548c\u6b63\u5e38\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u53d1\u751f'\n    ],\n    'if C then s4': [\n        '\u5f53\u6709\u6761\u4ef6\u65f6\u65f6,\u7ed3\u6784\u6784\u4ef6\u6ee1\u8db3\u8981\u6c42,\u8981\u6c42\u5c5e\u4e8e\u5b89\u5168\u6027\u3001\u9002\u7528\u6027\u548c\u8010\u4e45\u6027',\n        '\u5f53\u6709\u6761\u4ef6\u65f6\u65f6,\u4f4f\u5b85\u7ed3\u6784\u6ee1\u8db3\u8981\u6c42,\u8981\u6c42\u5c5e\u4e8e\u5b89\u5168\u6027\u3001\u9002\u7528\u6027\u548c\u8010\u4e45\u6027'\n    ]\n};\nconst ifthens = Object.entries(data).reduce((prev, curr) => {\n    const values = curr[1].reduce((prev, curr) =>  `${prev}<p>${curr}</p>`, '');\n    return `\n        ${prev}\n        <li>\n            <p>${curr[0]}</p>\n            ${values}\n        </li>\n    `;\n}, '');\nconst html = `\n    <ul>\n        ${ifthens}\n    </ul>\n`;\n")),(0,l.kt)("p",{parentName:"blockquote"},"\u751f\u6210\u7684html\u7ed3\u6784"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'<ul class="nlp-notify-body">            \n    <li>\n        <p>if _ then s9</p>\n        <p>\u4f5c\u7528\u5c5e\u4e8e\u5404\u79cd,\u7ed3\u6784\u5c5e\u4e8e\u4f4f\u5b85,\u7ed3\u6784\u80fd\u627f\u53d7\u4f5c\u7528,\u4f5c\u7528\u5c5e\u4e8e\u5728\u6b63\u5e38\u5efa\u9020\u548c\u6b63\u5e38\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u53d1\u751f</p>\n        <p>\u4f5c\u7528\u5c5e\u4e8e\u5404\u79cd,\u7ed3\u6784\u5c5e\u4e8e\u4f4f\u5b85,\u7ed3\u6784\u80fd\u627f\u53d7\u4f5c\u7528,\u4f5c\u7528\u5c5e\u4e8e\u5728\u6b63\u5e38\u5efa\u9020\u548c\u6b63\u5e38\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u53d1\u751f</p>\n        <p>\u4f5c\u7528\u5c5e\u4e8e\u5404\u79cd,\u7ed3\u6784\u5c5e\u4e8e\u4f4f\u5b85,\u7ed3\u6784\u80fd\u627f\u53d7\u4f5c\u7528,\u4f5c\u7528\u5c5e\u4e8e\u5728\u6b63\u5e38\u5efa\u9020\u548c\u6b63\u5e38\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u53d1\u751f</p>\n    </li>\n    <li>\n        <p>if C then s4</p>\n        <p>\u5f53\u6709\u6761\u4ef6\u65f6\u65f6,\u7ed3\u6784\u6784\u4ef6\u6ee1\u8db3\u8981\u6c42,\u8981\u6c42\u5c5e\u4e8e\u5b89\u5168\u6027\u3001\u9002\u7528\u6027\u548c\u8010\u4e45\u6027</p>\n        <p>\u5f53\u6709\u6761\u4ef6\u65f6\u65f6,\u4f4f\u5b85\u7ed3\u6784\u6ee1\u8db3\u8981\u6c42,\u8981\u6c42\u5c5e\u4e8e\u5b89\u5168\u6027\u3001\u9002\u7528\u6027\u548c\u8010\u4e45\u6027</p>\n    </li>\n</ul>\n'))))}k.isMDXComponent=!0}}]);