# MarkdownToHTML

MarkdownToHTML is a javascript tha can convert & map `.md` file in web root into a normal web site

+ `/foo/README.md` would be mapped to `/foo/`
+ `/foo/bar.md` would be mapped to `/foo/bar`
+ `/foo/bar/README.md` would be mapped to `/foo/bar/`

**If `/foo/bar` and `/foo/bar/` exist at the same time, `/foo/bar` would be ignored, then redirect to `/foo/bar/` due to something I don't know :(**

## Usage

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
│   ├── app.8a5d8bef.css.gz
│   └── chunk-vendors.cb82569e.css.gz
└── js
    ├── app.7f74ebee.js.gz
    └── chunk-vendors.04757191.js.gz
```

And it will map your `.md` file to below normal website

```plain
WebRoot/
├── about
├── foo
└── foo/
    └── bar
```
