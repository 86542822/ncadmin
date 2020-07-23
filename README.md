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
0. 安装依赖包
```  
$ npm i
```  
1. nginx下载 https://nginx.org/en/download.html
2. 替换nginx.conf配置文件，并启动nginx
```sh
$ start nginx
```  
3. 启动后端服务
```sh
$ python run.py
```  
4. 启动前端服务 
```sh
$ npm run dev
```
5. 访问localhost即可
