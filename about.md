# MarkdownToHTML

MarkdownToHTML is a javascript that can convert & map `.md` file into normal web site

+ `/foo/README.md` would be mapped to `/foo/`
+ `/foo/bar.md` would be mapped to `/foo/bar`
+ `/foo/bar/README.md` would be mapped to `/foo/bar/`

**If `/foo/bar` and `/foo/bar/` exist at the same time, `/foo/bar` would be ignored, then redirect to `/foo/bar/` due to something I don't know :(**

## Usage

Download [build](https://github.com/LucienShui/MarkdownToHTML/archive/build.zip) and decompress it

Put files into web root, and some `.md` file

Insert code below into web site Nginx config file

```nginx
location / {
    try_files $uri $uri/ /index.html;
    location ~ .*\.(js|css)?$ {
        gzip_static on;
    }
}
```

More information about server configurations please see: [HTML5 History Mode | Vue Router](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)

## Example

This example's file tree looks like this

```plain
WebRoot
├── README.md
├── about.md
├── foo.md
├── foo
│   ├── README.md
│   └── bar.md
├── favicon.ico
├── index.html
├── css
│   ├── app.xxx.css.gz
│   └── chunk-vendors.xxx.css.gz
└── js
    ├── app.xxx.js.gz
    └── chunk-vendors.xxx.js.gz
```

And it will map your `.md` file to below normal website

```plain
WebRoot/
├── about
├── foo
└── foo/
    └── bar
```
