# 跨站请求伪造攻击 CSRF

CSRF 英文全称是 Cross-site request forgery，称为“跨站请求伪造”，是指黑客引诱用户打开黑客的网站，在黑客的网站中，利用用户的登录状态发起的跨站请求。

简单来讲，CSRF 攻击就是黑客利用了用户的登录状态，并通过第三方的站点来做一些坏事。和 XSS 不同的是，CSRF 攻击不需要将恶意代码注入用户的页面，也无法通过 CSRF 攻击来获取用户页面数据，仅仅是利用服务器的漏洞和用户的登录状态来实施攻击。

## CSRF攻击方式

1. 自动发起 Get 请求
2. 自动发起 POST 请求
3. 引诱用户点击链接

### 1. 自动发起 Get 请求

```html
<!DOCTYPE html>
<html>
  <body>
    <h1> 黑客的站点：CSRF 攻击演示 </h1>
    <img src="https://time.geekbang.org/sendcoin?user=hacker&number=100">
  </body>
</html>
```

### 2. 自动发起 POST 请求

```html

<!DOCTYPE html>
<html>
<body>
  <h1> 黑客的站点：CSRF 攻击演示 </h1>
  <form id='hacker-form' action="https://time.geekbang.org/sendcoin" method=POST>
    <input type="hidden" name="user" value="hacker" />
    <input type="hidden" name="number" value="100" />
  </form>
  <script> document.getElementById('hacker-form').submit(); </script>
</body>
</html>
```

### 3. 引诱用户点击链接

通常出现在论坛或者恶意邮件上。黑客会采用很多方式去诱惑用户点击链接

```html
<div>
  <img width=150 src="http://images.xuejuzi.cn/1612/1_161230185104_1.jpg">
</div>
<div>
  <a href="https://time.geekbang.org/sendcoin?user=hacker&number=100" taget="_blank">
    点击下载美女照片
  </a>
</div>
```

## CSRF防御策略

CSRF 攻击的三个必要条件：

- 第一个，目标站点一定要有 CSRF 漏洞；
- 第二个，用户要登录过目标站点，并且在浏览器上保持有该站点的登录状态；
- 第三个，需要用户打开一个第三方站点，可以是黑客的站点，也可以是一些论坛。

对于 CSRF 攻击主要的防护手段是提升服务器的安全性。

通常有以下几种途径：

1. 充分利用好 Cookie 的 SameSite 属性
2. 验证请求的来源站点
3. CSRF Token

### 1. 充分利用好 Cookie 的 SameSite 属性

通常 CSRF 攻击都是从第三方站点发起的，要防止 CSRF 攻击，通常最好能实现从第三方站点发送请求时禁止 Cookie 的发送。因此在浏览器通过不同来源发送 HTTP 请求时，有如下区别：

- 如果是从第三方站点发起的请求，那么需要浏览器禁止发送某些关键 Cookie 数据到服务器；
- 如果是同一个站点发起的请求，那么就需要保证 Cookie 数据正常发送。

在 HTTP 响应头中，通过 set-cookie 字段设置 Cookie 时，可以带上 SameSite 选项。

**SameSite 选项通常有 Strict、Lax 和 None 三个值。**

- Strict 最为严格。如果 SameSite 的值是 Strict，那么浏览器会完全禁止第三方 Cookie。简言之，如果你从极客时间的页面中访问 InfoQ 的资源，而 InfoQ 的某些 Cookie 设置了 SameSite = Strict 的话，那么这些 Cookie 是不会被发送到 InfoQ 的服务器上的。只有你从 InfoQ 的站点去请求 InfoQ 的资源时，才会带上这些 Cookie。

- Lax 相对宽松一点。在跨站点的情况下，从第三方站点的链接打开和从第三方站点提交 Get 方式的表单这两种方式都会携带 Cookie。但如果在第三方站点中使用 Post 方法，或者通过 img、iframe 等标签加载的 URL，这些场景都不会携带 Cookie。
而如果使用 None 的话，在任何情况下都会发送 Cookie 数据。

- 关于 SameSite 的具体使用方式，你可以参考这个链接：<https://web.dev/samesite-cookies-explained> 。

对于防范 CSRF 攻击，我们可以针对实际情况将一些关键的 Cookie 设置为 Strict 或者 Lax 模式，这样在跨站点请求时，这些关键的 Cookie 就不会被发送到服务器，从而使得黑客的 CSRF 攻击失效。

### 2. 验证请求的来源站点

**在服务器端验证请求来源的站点。**

**Referer 是 HTTP 请求头中的一个字段，记录了该 HTTP 请求的来源地址。** 虽然可以通过 Referer 告诉服务器 HTTP 请求的来源，但是有一些场景是不适合将来源 URL 暴露给服务器的，因此浏览器提供给开发者一个选项，可以不用上传 Referer 值，具体可参考Referrer Policy。

但在服务器端验证请求头中的 Referer 并不是太可靠，因此标准委员会又制定了Origin 属性，在一些重要的场合，比如通过 XMLHttpRequest、Fecth 发起跨站请求或者通过 Post 方法发送请求时，都会带上 Origin 属性.

Origin 属性只包含了域名信息，并没有包含具体的 URL 路径，这是 Origin 和 Referer 的一个主要区别。Origin 的值之所以不包含详细路径信息，是有些站点因为安全考虑，不想把源站点的详细路径暴露给服务器。

因此，服务器的策略是优先判断 Origin，如果请求头中没有包含 Origin 属性，再根据实际情况判断是否使用 Referer 值。

### 3. CSRF Token

- 第一步，在浏览器向服务器发起请求时，服务器生成一个 CSRF Token。CSRF Token 其实就是服务器生成的字符串，然后将该字符串植入到返回的页面中。

```html
<!DOCTYPE html>
<html>
<body>
    <form action="https://time.geekbang.org/sendcoin" method="POST">
      <input type="hidden" name="csrf-token" value="nc98P987bcpncYhoadjoiydc9ajDlcn">
      <input type="text" name="user">
      <input type="text" name="number">
      <input type="submit">
    </form>
</body>
</html>
```

- 第二步，在浏览器端如果要发起转账的请求，那么需要带上页面中的 CSRF Token，然后服务器会验证该 Token 是否合法。如果是从第三方站点发出的请求，那么将无法获取到 CSRF Token 的值，所以即使发出了请求，服务器也会因为 CSRF Token 不正确而拒绝请求。
