# myAjax_paging
### 原生js开发ajax分页缓存
#### 技术点
##### flex布局；
##### ES6中let作为块级作用域声明方式，与var相比，优点之一是在for循环中可以直接需要获取点击目标的序号；
##### ajax通过给定的接口获取网页资源
##### 创建好自己的myAjax模块，方便以后调用

<pre><code>var lists = document.querySelectorAll("ul li");
for(let i=0,len=lists.length;i< len;i ++){
   lists[i].onclick=function(){
        alert(i)
   }
}
</code></pre>


![原生js实现ajax分页动图](https://github.com/Tinayu0915/myAjax_paging/blob/master/ajax.gif)<br>
[点击查看页面效果](https://tinayu0915.github.io/myAjax_paging/)

