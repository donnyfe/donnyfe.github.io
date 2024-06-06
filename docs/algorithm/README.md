# 数据结构与算法

数据结构：一组数据的存储结构

算法：操作数据的一组方法

解决问题：

 数据结构和算法本身解决的是“快”和“省”的问题，即如何让代码运行得更快，如何让代码更省存储空间。

## 分析排序算法

### 复杂度分析

执行效率是算法一个非常重要的考量指标。

评估算法的执行效率：

- 时间复杂度
- 空间复杂度

### 排序算法的执行效率

1. 最好情况、最坏情况、平均情况时间复杂度
2. 时间复杂度的系数、常数 、低阶
3. 比较次数和交换（或移动）次数

### 排序算法的内存消耗

### 排序算法的稳定性

## 算法技巧

- 双指针
  - 左右端点指针
  - 快慢指针
  - 固定间距指针
- 递推法
  - 顺推法
  - 逆推法
- 递归法
- 枚举法

## 算法思想

- 分治法
- 贪婪法
- 回溯法/试探法
- 动态规划
- 枚举法
- 模拟法

## 数据结构

### 逻辑结构

- 线性表结构
  - 数组
  - 栈
  - 队列
  - 链表
- 非线性结构
  - 二维数组
  - 堆
  - 树
    - 完全二叉树
    - 满二叉树
    - 二叉搜索树
    - 平衡二叉树
    - 红黑树
    - AVL树
    - 哈夫曼树
    - 字典树
    - B+树
  - 图

### 存储结构

- 顺序存储
- 链式存储
- 索引存储
- 散列存储

## 算法

## 排序算法

- 冒泡排序
- 快速排序
- 选择排序
- 插入排序
- 希尔排序——1959年Shell发明；第一个突破O(n^2)的排序算法；是简单插入排序的改进版；它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序又叫缩小增量排序。
- 归并排序——冯·诺伊曼在1954年为了检验EDVAC计算机指令代码的适用性以及评价他所建议的计算机组织的优点，编写了内部归并排序程序
- 计数排序
- 基数排序
- 堆排序
- 桶排序

- 猴子排序
- 面条排序
- 睡眠排序

### 排序算法分类

- 基于比较排序

- 线性排序

- 基本排序
  - 冒泡排序
  - 快速排序——1962年：托尼埃利奥特兄弟有限公司，伦敦，霍尔提出了快速排序。
  - 选择排序
  - 归并排序——冯·诺伊曼在1954年为了检验EDVAC计算机指令代码的适用性以及评价他所建议的计算机组织的优点，编写了内部归并排序程序
  - 插入排序——在德国，K. Zuse于1945年独立编写了用于直接插入排序的程序
  - 希尔排序

- 高级排序
  - 计数排序
  - 基数排序
  - 堆排序
  - 桶排序

### 内部排序

所谓的内排序是指所有的数据已经读入内存，在内存中进行排序的算法。排序过程中不需要对磁盘进行读写。同时，内排序也一般假定所有用到的辅助空间也可以直接存在于内存中。与之对应地，另一类排序称作外排序，即内存中无法保存全部数据，需要进行磁盘访问，每次读入部分数据到内存进行排序。

- 冒泡排序
- 快速排序
- 直接择排序
- 直接插入排序
- 希尔排序
- 归并排序
- 堆排序

其中冒泡排序和快速排序属于交换排序，直接插入排序和希尔排序属于插入排序

### 外部排序

- 计数排序
- 基数排序
- 桶排序等

## 搜索算法

- 顺序查找
- 二分查找/折半查找
- 二叉搜索树
- 索引查找
- 散列表

## 其它算法

- 结构化克隆算法
- DOM-Diff

## 其它

搜索引擎采用的是广度优先搜索策略。

Redis中根据大多数开发场景下，数据的大小和多少采用更适合存储的数据结构。
(数据量小用数组下标访问快、占用内存小。但是因为数组需要占用连续的内存空间，所以当数据量大的时候，采用链表，同时又为了兼顾速度又需要和数组结合，从而有了散列表。)

问题解决：

通过数据结构解决常见数学问题的内容，包括计算完数、亲密数、水仙花数，计算素数，哥德巴赫猜想，计算阶乘，求π的近似值，方程求解，矩阵运算，一元多项式运算等内容。

如何解决经典数据结构问题，包括约瑟夫环、大整数四则运算、进制转换、括号匹配、中序式转后序式、停车场管理、迷宫求解、LZW压缩实现等内容。

如何解决经典算法问题，包括百钱买百鸡、五家共井、鸡兔同笼、猴子吃桃、舍罕王的赏赐、魔术方阵、汉诺塔、背包问题、马踏棋盘、八皇后等经典算法问题的求解代码。

在真正软件开发中，我们要排序的往往不是单纯的整数，而是一组对象，我们需要按照对象的某个 key 来排序。比如说，我们现在要给电商交易系统中的“订单”排序。订单有两个属性，一个是下单时间，另一个是订单金额。如果我们现在有 10 万条订单数据，我们希望按照金额从小到大对订单数据排序。对于金额相同的订单，我们希望按照下单时间从早到晚有序。