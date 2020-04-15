# ncadmin

## 环境搭建
安装node和npm  
下载地址：https://nodejs.org/zh-cn/download/ (需添加环境变量)  
检查是否安装成功：node -v｜npm -v （显示版本号）  

## 配置说明
列表 https://github.com/daniel-dx/ncadmin-core/blob/master/config-list.md  
全局 https://github.com/ncform/ncform/blob/master/CONFIG.md  
控件 https://ncform.github.io/ncform/ncform-theme-elementui/index.html?lang=cn  

## 如何生成代码

1. 先安装代码生成器

```
$ npm install -g yo
$ npm install -g generator-nca
```

2. 生成功能模块

```
$ yo nca:add-module
```

3. 生成模块页面

```
$ yo nca:add-page
```
4. 生成子模块页面

```
$ yo nca:add-modal
```

## 如何开发

```sh
$ npm run dev
```
