---
slug: RegExp
title: "常用的正则表达式"
authors: [Pisco]
tags: [RegExp]
---

![RegEx](/img/regex.jpeg)

<!--truncate-->

## 校验数字的表达式
1. 数字
```
^[0-9]\*$
```
2. n位数字
```
^\d{n}$
```
3. 至少n位数字
```
^\d{n,}$
```
4. m-n位数字
```
^\d{m,n}$
```
5. 零和非零开头的数字
```
^(0|[1-9][0-9]\*)$
```
6. 带1-2位小数的正数或负数
```
^(\-)?\d+(\.\d{1,2})$
```
7. 非零开头的最多带两位小数的数字
```
^([1-9][0-9]\*)+(\.[0-9]{1,2})?$
```
8. 正数、负数和小数
```
^(\-|\+)?\d+(\.\d+)?$
```
9. 有两位小数的正实数
```
^[0-9]+(\.[0-9]{2})?$
```
10. 有1-3位小数的正实数
```
^[0-9]+(\.[0-9]{1,3})?$
```
11. 非零的正实数
```
^[1-9]\d\*$
或者
^([1-9][0-9]\*){1,3}$
或者
^\+?[1-9][0-9]\*$
```
12. 非零的负整数
```
^\-[1-9][0-9]\*$
或者
^-[1-9]\d\*$
```
13. 非负整数
```
^\d+$
或
^[1-9]\d\*|0$
```

## 校验字符的表达式
1. 汉字
```
^[\u4e00-u9fa5]{0,}$
```
2. 英文和数字
```
^[A-Za-z0-9]+$
或者
^[A-Za-z0-9]{4-40}$
```
3. 纯英文
```
^[A-Za-z]+$
```
4. 由数字、26个英文字母或者下划线组成的字符串
```
^\w+$ 或 ^\w{3,20}$
```
5. 中文、英文、数字和下划线（密码验证）
```
^[\u4E00-\u9FA5A-Za-z0-9_]+$
```

## 特殊需求验证
1. Email
```
^\w+([-+.]\w+)\*@\w+([-.]\w+)\*\.\w+([-.]\w+)\*$
```

2. 域名
```
[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?
```

3. InternetURL
```
[a-zA-z]+://[^\s]\* 或 ^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]\*)?$
```

4. 手机号码
```
^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$
```

5. 国内电话号码(0511-4405222、021-87888822)
```
\d{3}-\d{8}|\d{4}-\d{7}
```

6. 电话号码正则表达式（支持手机号码，3-4位区号，7-8位直播号码，1－4位分机号）:
```
((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)
```

7. 身份证号(15位、18位数字)，最后一位是校验位，可能为数字或字符X
```
(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)
```

8. 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
```
^[a-zA-Z][a-zA-Z0-9_]{4,15}$
```

9. 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
```
^[a-zA-Z]\w{5,17}$
```

10. 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在 8-10 之间)
```
^(?=.\*\d)(?=.\*[a-z])(?=.\*[A-Z])[a-zA-Z0-9]{8,10}$
```
11. 强密码(必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8-10之间)
```
^(?=.\*\d)(?=.\*[a-z])(?=.\*[A-Z]).{8,10}$
```

12. 日期格式
```
^\d{4}-\d{1,2}-\d{1,2}
```

13. 一年的12个月(01～09和1～12)
```
^(0?[1-9]|1[0-2])$
```

14. 一个月的31天(01～09和1～31)
```
^((0?[1-9])|((1|2)[0-9])|30|31)$
```

15. xml文件
```
^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$
```

16. 中文字符的正则表达式
```
[\u4e00-\u9fa5]
```

17. 空白行的正则表达式
```
\n\s\*\r (可以用来删除空白行)
```

18. HTML标记的正则表达式
```
<(\S\*?)[^>]\*>.\*?|<.\*? /> (首尾空白字符的正则表达式^\s\*|\s\*$或(^\s\*)|(\s\*$) (可以用来删除行首行尾的空白字符(包括空格、制表符、换页符等等)，非常有用的表达式)
```

19. 腾讯QQ号
```
[1-9][0-9]{4,} (腾讯QQ号从10000开始)
```
20. 中国邮政编码
```
[1-9]\d{5}(?!\d) (中国邮政编码为6位数字)
```
21. IP地址
```
((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))
```