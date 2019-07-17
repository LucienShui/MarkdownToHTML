# It works!

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

## You can view these links below

+ [/about](./about.md)
+ [/foo](./foo.md)
+ [/foo/](./foo/README.md)
+ [/foo/bar](./foo/bar.md)
