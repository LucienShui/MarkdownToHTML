<template>
    <div id="app">
        <router-view/>
        <footer class="footer">
            <p>&copy;&nbsp;2019&nbsp;Powered&nbsp;by&nbsp;<a target="_blank"
               href="https://github.com/LucienShui/MarkdownToHTML">MarkdownToHTML</a></p>
        </footer>
    </div>
</template>

<style>
.footer {
    text-align: center;
}

.footer a:active,
.footer a:hover {
    outline-width: 0;
}

.footer a:hover {
    text-decoration: underline;
}

.footer a:not([href]) {
    color: inherit;
    text-decoration: none;
}

.footer a {
    background-color: transparent;
    color: #0366d6;
    text-decoration: none;
}
</style>
