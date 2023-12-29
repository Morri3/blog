title: Anaconda3-4.2.0安装tensorflow1.X过程记录
author: Morri
tags:
  - 学习记录
  - tensorflow
categories:
  - 后端
date: 2023-12-29 18:52:00
---
#### 安装过程
1、打开anaconda prompt

2、进入D盘的sdxx目录，添加condarc配置文件的内容【安装anaconda的那个目录，C\D\E自己选择】

``` bash
D:
cd sdxx
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --set show_channel_urls yes
```
3、用记事本打开C盘的 用户/82444/.condarc【就是打开自己用户所在目录的.condarc文件】，删除如下代码：
``` bash
- defaults
```
4 继续在prompt中，
``` bash
conda install tensorflow
```
此时报错：
``` bash
Fetching package metadata ...SSL verification error: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed (_ssl.c:645)

.SSL verification error: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed (_ssl.c:645)

.

Solving package specifications: .

PackageNotFoundError: Package not found: '' Packages/dependencies missing in current win-64 channels:

  - tensorflow

  - conda -> conda-env >=2.6

  - conda-env

Close matches found; did you mean one of these?

  conda-env: conda

  conda-env: conda

You can search for packages on anaconda.org with

  anaconda search -t conda tensorflow

(and similarly for the other packages)
```
5、把.condarc中的https改为http

6、prompt中，
``` bash
	conda search tensorflow
	anaconda show anaconda/tensorflow
	conda install --channel https://conda.anaconda.org/anaconda tensorflow
```
7、打开jupyter notebook，new一个conda root的python文件，输入代码测试是否安装成功：
``` bash
import tensorflow as tf
tf.__version__
```
报错，说numpy不存在。此时用管理员身份打开anaconda prompt，
``` bash
conda uninstall numpy --force  //只卸载numpy，若不加--force参数，会同时把tensorflow也卸载
conda install numpy   //安装numpy
``` 
8、anaconda notebook重新运行代码，出现了版本号，表示成功，接下来就可以用tensorflow了。

#### 参考文章
* https://blog.csdn.net/yzj001616/article/details/128410463
* https://blog.csdn.net/cecurio/article/details/106732428?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-106732428-blog-132580261.235%5Ev39%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-106732428-blog-132580261.235%5Ev39%5Epc_relevant_default_base&utm_relevant_index=6