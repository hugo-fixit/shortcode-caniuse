# Hugo shortcodes for CanIUse

[CanIUse](https://caniuse.com/) 网站提供了各种前端技术的浏览器支持情况，本组件可以在 Hugo 中使用 `shortcode` 方式插入 CanIUse 网站的功能支持情况。

## 安装组件

和 [安装主题](https://fixit.lruihao.cn/zh-cn/documentation/installation/) 一样，安装方式有多种，选择其一即可，例如通过 Hugo Modules 安装：

```diff {title="hugo.toml"}
[module]
  [[module.imports]]
    path = "github.com/hugo-fixit/FixIt"
+ [[module.imports]]
+   path = "github.com/hugo-fixit/shortcode-caniuse"
```

## 注入 Partial

通过 FixIt 主题开放的自定义块，在 `layouts/partials/custom.html` 文件将 `shortcode-caniuse.html` 注入到 `custom-assets` 中：

```go-html-template
{{- define "custom-assets" -}}
  {{- partial "inject/shortcode-caniuse.html" . -}}
{{- end -}}
```

## 使用 Shortcode

在需要使用的页面中调用 `caniuse` shortcode：

```md
{{</* caniuse feature="flexbox" */>}}
或者
{{</* caniuse "flexbox" */>}}
```

> 点击 `caniuse.com` 网站上功能左边 `#` 号，URL 中的 `path-name` 即为 `feature` 参数。

详细描述前往 <https://fixit.lruihao.cn/zh-cn/components/dev-component/> 查看文档。
