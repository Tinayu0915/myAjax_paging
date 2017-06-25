// dom节点获取方法
		var oContent=document.querySelector('.content');
		var oPages=document.querySelectorAll('.page ul li'); 

		var cache={};	
		changePage();
		setInterval(function(){
			cache={};
		},1000);
		function changePage(){
			for(let i=0,len=oPages.length;i<len;i++){ //let es6块级作用域变量声明方式
				oPages[i].onclick=function(){ //用户点击li 弹出li的序号 0-5
					var page=i+1;      //1-6 0-5
					if( page in cache){
						addDom(cache[page]);
						console.log('数据已经有了');
					}else{
						goTo(page);
						console.time('数据还没有,正在加载');
					}
					console.log(cache);
				}
			}
		}
		goTo(1);
		function goTo(page){
			myAjax({
				url:'https://route.showapi.com/181-1', 
				method:'GET',
				data:{
						showapi_appid:'30603', 
						showapi_sign:'98960666afeb4992ae91971d13494090',
						num:8,
						page:page,  //数据获取分页
					},
				success:function(res){
					console.log(res);//字符串 string 类json 字符串
					var result=JSON.parse(res);
					var dataList=result.showapi_res_body.newslist;
					//获取到我们的数据数组
					addDom(dataList);
					cache[page]=dataList;
					console.timeEnd('数据还没有,正在加载');
				}	
			});
		}
		function addDom(result){
			var dataList=result;
			var dataLength=dataList.length; //存储数组长度 8
			var str='';
			for(var i=0;i<dataLength;i++){
				str+=`
					 <a href="${dataList[i].url}" class="items flex_row">
					 <div class="img"><img src="http://www.tanzhouphp.com/tanzhoue/images/newsList/${1+Math.floor(Math.random()*10)}.jpg" alt=""></div>
					<div class="bd">
					<p class="label">${dataList[i].title}</p>
					</div>
					<div class="ft">&GT;</div>
				 </a>`
				}
				oContent.innerHTML=str; //把生成好的节点字符串 添加到content里面
				//console.log(result.showapi_res_body.newslist[0].url)
		}
		