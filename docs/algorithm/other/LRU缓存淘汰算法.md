# LRU缓存淘汰算法 lru-cache

## 前置知识

链表

## 简介

使用普通对象实现缓存操作，导致问题是，意味着这个对象将会常驻在老生代中。缓存中存储的键越多，长期存活的对象也就越多，这将导致垃圾回收在进行扫描和整理时，对这些对象做无用功。

缓存淘汰策略:

- 先进先出策略 FIFO（First In，First Out）、
- 最少使用策略 LFU（Least Frequently Used）、
- 最近最少使用策略 LRU（Least Recently Used）。

## 场景

- HTTP 缓存响应消息

- Vue的keep-alive

[LRU缓存淘汰算法](https://github.com/isaacs/node-lru-cache)

## 实现

```js

let cache = {}
const  get = function(key) {
  if(cache[key]) {
    return cache[key]
  } else {
    // get from otherwise
  }
}

const set = function(key, value) {
  cache[key] = value
}

```

最近最少使用策略

说明：

设计和实现一个 LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。 写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

进阶: 你是否可以在 O(1) 时间复杂度内完成这两种操作？

```js
// 示例
LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4


```

```js
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
  }

  get(key) {
    let val = this.map.get(key)
    if (typeof val === 'undefined') { return -1 }
    this.map.delete(key)
    this.map.set(key, val)
    return val
  }

  put(key, value) {
    if (this.map.has(key)) { 
      this.map.delete(key) 
    }

    this.map.set(key, value)
    let keys = this.map.keys()
    while (this.map.size > this.capacity) { this.map.delete(keys.next().value) }
  }
}
```

加入缓存限制策略

```js

const LimitableMap = function(limit) {
  this.limit = limit || {}
  this.map = {}
  this.keys = []
}

const hasOwnProperty = Object.prototype.hasOwnProperty

LimitableMap.prototype.set = function(key, value) {
  let map = this.map
  let keys = this.keys

  if(!hasOwnProperty.call(map, key)) {
    // 超过限制，淘汰缓存
    if(keys.length === this.limit) {
      const firstKey = keys.shift()
      delete map[firstKey]
    }
    keys.push(key)
  }
  map[key] = value
}

LimitableMap.prototype.get = function (key) {
  return this.map[key];
}

```

## 拓展

缓存泄露三个原因：

缓存队列消费不及时。
作用域未释放。

直接将内存作为缓存的方案要十分慎重。除了限制缓存的大小外，另外要考虑的事情是，进程之间无法共享内存。如果在进程内使用缓存，这些缓存不可避免地有重复，对物理内存的使用是一种浪费。
如何使用大量缓存，目前比较好的解决方案是采用进程外的缓存，进程自身不存储状态。外部的缓存软件有着良好的缓存过期淘汰策略以及自有的内存管理，不影响Node进程的性能。

将缓存转移到外部，减少常驻内存的对象的数量，让垃圾回收更高效。
进程之间可以共享缓存

外部缓存方案：
Redis： <https://github.com/mranney/node_redis>
Memcached： <https://github.com/3rd-Eden/node-memcached>
