{
	/*
	 * 说明:
	 * 异常定义,这里会导向到定义的错误页面
	 * 属性可以不必全部定义,他会使用默认值
	 * StatusCode  默认值500
	 * Page        默认值 Error.html
	 * Description 默认值Java栈的信息
	 */
	
	//静态文件访问未找到目标文件
	"org.hocate.http.server.Exception.ResourceNotFound":{
		"StatusCode"	:404,
		"Page"			:"Error.html",
		"Description"	:"The request file is not found."
	},
	//没有可用的路由
	"org.hocate.http.server.Exception.RouterNotFound":{
		"StatusCode"	:404,
		"Page"			:"Error.html",
		"Description"	:"None avaliable router to use."
	},
	//未定义的错误
	"Other":{
		"StatusCode"	:500,
		"Page"			:"Error.html"
	}  
}