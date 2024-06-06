# 组合模式 Composite

组合模式（Composite）： 又称部分-整体模式，将对象组合成树形结构以表示“部分整体”的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。

组合模式能够给我们提供一个清晰的组成结构。

组合对象类通过继承同一个父类使其具有统一的方法，这样也方便了我们统一管理与使用，当然此时单体成员与组合体成员行为表现就比较一致了。这也就模糊了简单对象与组合对象的区别。

有时这也是一种对数据的分级式处理。清晰而又方便我们对数据的管理与使用。

当然组合模式有时在实现需求上给我们带来更多的选择方式，虽然对于单体对象的实现简单而又单一，但是通过对其组合将会给我们带来更多的使用形式。

组合模式（Composite）将对象组合成树形结构以表示“部分-整体”的层次结构，组合模式使得用户对单个对象和组合对象的使用具有一致性。

该模式由两部分构成：

- 1.子对象（Leaf）：组成组合对象的最基本对象。
- 2.组合对象（Composite）：由子对象组合起来的复杂对象。

## 作用

组合模式让你可以优化处理递归或分级数据结构。

## 场景

- 文件扫描
- 组合式新闻模块
- 组合式表单模块
- 系统目录结构
- 网站导航结构
- DOM的机制，一个DOM节点可以包含子节点，不管是父节点还是子节点都有添加、删除、遍历子节点的通用功能。

## 示例

### 文件扫描

```js
// 定义组合对象（文件夹）
let Folder = function(name) {
    this.name = name;
    this.files = [];
};
Folder.prototype.add = function(file) {
    this.files.push(file);
};
Folder.prototype.scan = function() {
    let i = 0, file;
    for(; files = this.files; file = files[i++];) {
        file.scan();
    }
};

//定义叶子对象（文件）
let File = function(name) {
    this.name = name;
};
File.prototype.add = function() {
    throw new Error('文件下面不能再添加文件');
};
File.prototype.scan = function() {
    console.log('开始扫瞄：' + this.name);
};

let folder = new Folder('前端学习');
let folder1 = new Folder('JS学习');
let folder2 = new Folder('JQ学习');

let file1 = new File('JS设计模式');
let file2 = new File('JQ实战');
let file3 = new File('前端性能');

folder1.add(file1);
folder2.add(file2);
folder.add(folder1);
folder.add(folder2);
folder.add(file3);
folder.scan();

// 输出:
// 开始文件扫描：前端学习
// 开始文件扫描：JS学习
// 开始扫瞄：JS设计模式
// 开始文件扫描：JQ学习
// 开始扫瞄：JQ实战
// 开始扫瞄：前端性能
```

### 组合式新闻模块

```js
// 创建新闻模块
var News = function() {
    //子组件容器
    this.children = [];
    //当前组件元素
    this.element = null;
}

News.prototype = {
    init: function() {
      throw new Error("请重写你的方法");
    },
    add: function() {
      throw new Error("请重写你的方法");
    },
    getElement: function() {
      throw new Error("请重写你的方法");
    }
}

// 容器类构造函数
var Container = function(id, parent) {
    // 构造函数继承父类
    News.call(this);
    // 模块id
    this.id = id;
    // 模块的父容器
    this.parent = parent;
    // 构建方法
    this.init();
}

// 寄生式继承父类原型方法
inheritPrototype(Container, News);

// 构建方法
Container.prototype.init = function() {
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = 'new-container';
};

// 添加子元素方法
Container.prototype.add = function(child) {
    //在子元素容器中插入子元素
    this.children.push(child);
    //插入当前组件元素树中
    this.element.appendchild(child.getElement());
    return this;
}

// 获取当前元素方法
Container.prototype.getElement = function() {
    return this.element;
}

// 显示方法
Container.prototype.show = function() {
    this.parent.appendchild(this.element);
}

// 创建新闻子项类
var Item = function(classname) {
    News.call(this);
    this.classname = classname || '';
    this.init();
}

inheritPrototype(Item, News);

Item.prototype.init = function() {
    this.element = document.createElement('li');
    this.element.className = this.classname;
}

Item.prototype.add = function(child) {
    //在子元素容器中插入子元素
    this.children.push(child);
    //插入当前组件元素树中
    this.element.appendchild(child.getElement());
    return this;
}

Item.prototype.getElement = function() {
    return this.element;
}

var NewsGroup = function(classname) {
    News.call(this);
    this.classname = classname || '';
    this.init();
}

inheritPrototype(NewsGroup, News);

NewsGroup.prototype.init = function() {
    this.element = document.createElement('div');
    this.element.className = this.classname;
}

NewsGroup.prototype.add = function(child) {
    //在子元素容器中插入子元素
    this.children.push(child);
    //插入当前组件元素树中
    this.element.appendchild(child.getElement());
    return this;
}

NewsGroup.prototype.getElement = function() {
    return this.element;
}

// 创建一个图片新闻类
var ImageNews = function(url, href, classname) {
    News.call(this);
    this.url = url || '';
    this.href = href || '#';
    this.classname = classname || 'normal';
    this.init();
}

inheritPrototype(ImageNews, News);

ImageNews.prototype.init = function() {
    this.element = document.createElement('a');
    var img = new Image();
    img.src = this.url;
    this.element.appendchild(img);
    this.element.className = 'image-news ' + this.classname;
    this.element.href = this.href;
}

ImageNews.prototype.add = function() {}

ImageNews.prototype.getElement = function() {
    return this.element;
}

var IconNews = function(text, href, type) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || 'video';
    this.init();
}

inheritPrototype(IconNews, News);

IconNews.prototype.init = function() {
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'icon ' + this.type;
}

IconNews.prototype.add = function() {}

IconNews.prototype.getElement = function() {
    return this.element;
}

var EasyNews = function(text, href) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.init();
}

inheritPrototype(EasyNews, News);

EasyNews.prototype.init = function() {
    this.element = document.createElement('a');
    this.element.innerHTML = this.text
    this.element.href = this.href;
    this.element.className = 'text';
}

EasyNews.prototype.add = function() {}

EasyNews.prototype.getElement = function() {
    return this.element;
}

var TypeNews = function(text, href, type, pos) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || '';
    this.pos = pos || 'left';
    this.init();
}

inheritPrototype(TypeNews, News);

TypeNews.prototype.init = function() {
    this.element = document.createElement('a');
    if (this.pos === 'left') {
        this.element.innerHTML = '[' + this.type + '] ' + this.text;
    } else {
        this.element.innerHTML = this.text + ' [' + this.type + ']';
    }
    this.element.href = this.href;
    this.element.className = 'text';
}

TypeNews.prototype.add = function() {}

TypeNews.prototype.getElement = function() {
    return this.element;
}

// 实例化新闻
var news1 = new container('news', document.body);

news1.add(
    new Item('normal').add(new IconNews('梅西不拿金球也伟大', '#', 'video'))
).add(
    new Item('normal').add(new IconNews('保护强国强队用意明显', '#', 'live'))
).add(
    new Item('normal').add(
        new NewsGroup('has-img').add(
            new ImageNews('img/1.jpg', '#', 'small')
        ).add(
            new EasyNews('从240斤胖子成功变型男', '#')
        ).add(
            new EasyNews('五大雷人跑步机', '#')
        )
    )
).add(
    new Item('normal').add(new TypeNews('AK47不愿为费城打球', '#', 'NBA', 'left'))
).add(
    new Item('normal').add(new TypeNews('火炮飈6三分创新高', '#', 'cBA', 'right'))
).show();
```

### 组合式表单模块

```js
var form = new FormItem('FormItem', document.body);

form.add(
 new FieldsetItem('account', '账号').add(
    new Group()
        .add(
            new LabelItem('user_name', '用户名：')
        ).add(
            new InputItem('user_name')
        ).add(
            new spanItem('4到6位数字或字母')
        )
).add(
    new Group()
        .add(
            new LabelItem('user_password', '密&emsp；码：')
        ).add(
            new InputItem('user_password')
        ).add(
            new spanItem('6到12位数字或者密码')
        )
    )
).add(
    //……
).show();
```

- <https://fanerge.github.io/2017/js设计模式-组合模式.html>
