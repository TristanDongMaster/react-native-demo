# Q&A

	1. Webview:头部和安卓返回键按钮默认关闭webview，如需要返回上一历史页面，需要特殊处理：代码监控返回键
	2. Webview：h5 在第一页时候，history.go不起作用，需要自行处理：增加协议方法。
	3. 在iphone上标题栏的标题为居中状态，而在Android上则是居左对齐。所以需要我们修改源码，进行适配
	4. navigationOptions是被修饰为static类型的，所以我们在按钮的onPress的方法中不能直接通过this来调用Component中的方法,间接修改navigation的方法来实现