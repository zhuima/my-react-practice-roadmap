react form taniarascia
----------------------

# 工程简介

- 本工程涉及增、删，未涉及查和改操作。
- 基于React 18，使用vite创建，样式采用了bootstrap。


> 和原文档的差异

+ Class state VS Hook state
+ Native Css VS Bootstrap
+ CRA VS Vite
  

# 写过过程中碰到的三个问题

- [x] submit之后表单清除动作未执行
  - [x] input没有设置value, 所以没有清除
- [x] button不能出现在table中
  - [x] 外面套一个td即可
- [x] bootstrap集成问题
  - [x] 按照官方文档走
- [x] input校验, 应该最好的方式是换成三方库来实现表单
  - [x] 为空，为空格
    - [x] https://bobbyhadz.com/blog/react-check-if-input-is-empty#:~:text=To%20check%20if%20an%20input,%2C%20otherwise%20it%20isn't.




# 参考文档

[React Tutorial: An Overview and Walkthrough, 基于class的，没有用到hook](https://www.taniarascia.com/getting-started-with-react/)






# 点评

不少读者说花上两个小时跟着做，个人体会，集成vite + bootstrap, 四十分钟到一个小时就能完成