title: Anaconda3-2019.10安装tensorflow2.0.0过程记录
author: Morri
tags:
  - tensorflow
  - 学习记录
categories:
  - 后端
date: 2023-12-29 19:09:00
---
#### 安装过程

1、下载anaconda3-2019.10，安装，勾选添加到Path的选项

2、打开Anaconda Navigator，进入Environments菜单，点击base(root)的三角形，点击Open with Jupyter Notebook，等待它打开。

New一个Python3文件，输入以下代码，
``` bash
import sys
print(sys.version)
``` 
此时，若输出3.7.4表示anaconda安装没问题

3、新建虚拟环境，这里在Anaconda Navigator图形化界面中进行安装

点击Environments菜单的添加按钮，Name输入tf2（这里自取），Python选择3.7，R不勾选，点击Create，等待一会儿，安装成功。

4、配置清华镜像源，在Anaconda Prompt中输入以下代码：
``` bash
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --set show_channel_urls yes​
``` 
此时，会在当前用户根目录生成.condarc，打开condarc，把它内容修改成以下内容：
``` bash
channels:
  - defaults
show_channel_urls: true
channel_alias: https://mirrors.tuna.tsinghua.edu.cn/anaconda
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/pro
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
``` 
5、安装CPU版本的tensorflow，在anaconda prompt中，
``` bash
conda install tensorflow=2.0.0
``` 
等待其安装成功。

6、在anaconda prompt中输入python进入python，然后输入：
``` bash
import tensorflow as tf
print(tf.__version__)
``` 
若能输出2.0.0表示安装成功。

7、让jupyter notebook支持刚创建的新虚拟环境

如果当前jupyter notebook正运行，用ctrl+C推出当前运行的notebook server，然后使用代码，
``` bash
activate tf2                 //进入tf2这个虚拟环境
conda install nb_conda       //安装nb_conda用于切换虚拟环境
``` 
等待安装，安装成功后在Windows菜单中会多一个Jupyter Notebook(tf2)，以后直接点他就能打开这个虚拟环境了。

8-1、重启电脑

8-2、在jupyter notebook中测试tf版本代码，发现提示不存在tf包，因此我重新安装了tensorflow2.0.0，然后重启电脑

9、重启电脑后，打开虚拟环境，发现能够输出tf版本。

###### 注 
1）我采用了8-2，未采用8-1

2）到此，我可以运行输出张量tensor，但是在jupyter notebook(tf2)中会报错：
``` bash
500 GET /conda/packages/available?_=1702708297433 (::1) 1111.030000ms referer=http://localhost:8888/tree/sdxx
``` 
由于暂时无影响，故暂未处理该异常，若有所需，后续更新。

3）安装结束后，再运行2的代码，发现python版本变成3.7.16，估计是nb_conda安装时将python版本进行了更新。