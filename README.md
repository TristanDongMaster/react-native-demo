# Q&A

	1. Webview:头部和安卓返回键按钮默认关闭webview，如需要返回上一历史页面，需要特殊处理：代码监控返回键
	2. Webview：h5 在第一页时候，history.go不起作用，需要自行处理：增加协议方法。
	3. 在iphone上标题栏的标题为居中状态，而在Android上则是居左对齐。所以需要我们修改源码，进行适配
	4. navigationOptions是被修饰为static类型的，所以我们在按钮的onPress的方法中不能直接通过this来调用Component中的方法,间接修改navigation的方法来实现

# 打包APK
	
	http://reactnative.cn/docs/0.45/signed-apk-android.html#content

# 把React Native组件植入到Android应用中有如下几个主要步骤：

	1. 首先当然要了解你要植入的React Native组件。
	2. 在Android项目根目录中使用npm来安装react-native ，这样同时会创建一个node_modules/的目录。
	3. 创建js文件，编写React Native组件的js代码。
	4. 在build.gradle文件中添加com.facebook.react:react-native:+，以及一个指向node_nodules/	目录中的react-native预编译库的maven路径。
	5. 创建一个React Native专属的Activity，在其中再创建ReactRootView。
	6. 启动React Native的Packager服务，运行应用。
	7. 根据需要添加更多React Native的组件。
	8. 在真机上运行、调试。
	9. 打包。

# React Native使用APP原生模块（APP自带）
	
	http://reactnative.cn/docs/0.45/native-modules-android.html#content

	1. 创建一个原生模块
	2. 注册这个模块
	3. 实现JavaScript模块

# React Native使用APP原生UI组件(第三方)
	
	1. 创建一个ViewManager的子类。
	2. 实现createViewInstance方法。
	3. 导出视图的属性设置器：使用@ReactProp（或@ReactPropGroup）注解。
	4. 把这个视图管理类注册到应用程序包的createViewManagers里。
	5. 实现JavaScript模块。

# 原生和React Native间通信

	我们使用RCTRootView将React Natvie视图封装到原生组件中。RCTRootView是一个UIView容器，承载着React Native应用。同时它也提供了一个联通原生端和被托管端的接口。

	通过RCTRootView的初始化函数你可以将任意属性传递给React Native应用。参数initialProperties必须是NSDictionary的一个实例。这一字典参数会在内部被转化为一个可供JS组件调用的JSON对象。

# 原理

	##  IOS

	苹果提供了一个叫做 JavaScript Core 的框架，这是一个 JavaScript 引擎。通过下面这段代码可以简单的感受一下 Objective-C 如何调用 JavaScript 代码：

		JSContext *context = [[JSContext alloc] init];  
		JSValue *jsVal = [context evaluateScript:@"21+7"];  
		int iVal = [jsVal toInt32];  

	## Andorid

		(1) 在程序启动的时候，也就是ReactActivity的onCreate函数中，我们会去创建一个ReactInstanceManagerImpl对象

		(2) 通过ReactRootView的startReactApplication方法开启整个RN世界的大门

		(3) 在这个方法中，我们会通过一个AsyncTask去创建ReactContext

		(4) 在创建ReactContext过程中，我们把我们自己注入(MainReactPackage)的和系统生成(CoreModulesPackage)的package通过processPackage方法将其中的各个modules注入到了对应的Registry中

		(5) 最后通过CatalystInstanceImpl中的ReactBridge将java的注册表通过jni传输到了JS层。




