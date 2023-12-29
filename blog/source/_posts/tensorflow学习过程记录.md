title: tensorflow学习过程记录
author: Morri
tags:
  - 学习记录
  - tensorflow
categories:
  - 后端
date: 2023-12-29 18:11:00
---
#### 一、异常、错误

##### 1、在anaconda prompt运行tensorboard报错：
``` bash
ModuleNotFoundError: No module named 'tensorflow_core.estimator'
```
**【解决】**
发现tensorflow-estimator与tensorflow的版本不匹配，tensorflow是2.0.0，tensorflow-estimator是2.6.0，使用如下代码进行版本降级到2.0.0：
``` bash
conda install tensorflow-estimator=2.0.0
```
##### 2、jupyter notebook(tf2)虚拟环境中，以下代码导入报错，提示不存在包，
``` bash
import matplotlib.pyplot as plt
```
**【解决】**
在anaconda prompt中install对应的matplotlib，这里选择了3.3.4版本，其中对应python3.7，可以使用conda search [包名] 查看相应包的版本信息。
``` bash
conda install matplotlib=3.3.4
```
##### 3、
待更新...

#### 二、代码问题
##### 1、
待更新...

#### 参考文章
* https://blog.csdn.net/PP12138/article/details/119450888