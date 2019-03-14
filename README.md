# gitbook-plugin-favicon-custom

将自己的图标添加到gitbook主题。
favicon.ico和apple-touch-icon-precomposed-152.png

插件删除位于`"_book/gitbook/images/favicon.ico"`的gitbook favicon，用自己的favicon代替。apple-touch-icon-precomposed-152.png同理

## Install via gitbook

### In book.json

* 添加 `plugin-favicon-custom` 到 `plugins` 数组中
* 在`pluginsConfig`中配置`favicon`的路径

#### book.json
```json
{
	"plugins" : ["favicon-custom"],
	"pluginsConfig" : {
		"favicon": "path/favicon.ico",
		"appleTouchIconPrecomposed152": "path/logo.png"
	}
}
```

### using gitbook-cli

```bash
gitbook install
```