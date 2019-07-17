<template>
    <div>
        <div class="markdown-body" v-html="content"></div>
    </div>
</template>

<script>
    import 'github-markdown-css/github-markdown.css'
    export default {
        name: "Index",
        data() {
            return {
                content: '',
            }
        },
        mounted() {
            this.load();
        },
        methods: {
            load() {
                let path = this.$route.path;
                if (path[path.length - 1] === '/') { // directory
                    this.get(path, "README.md");
                } else {
                    let index = path.lastIndexOf("/");
                    let directory = path.substring(0, index + 1);
                    let file = path.substring(index + 1, path.length);
                    this.get(directory, file + ".md");
                }
            },
            get(directory, file) {
                this.api.get(directory + file).then(response => {
                    let markdown = response.data.replace(/README\.md\)/g, ")");
                    markdown = markdown.replace(/\.md\)/g, ")");
                    this.content = this.markdown.render(markdown);
                }).catch(error => {
                    alert(JSON.stringify(error))
                })
            }
        }
    }
</script>

<style scoped>
    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }

    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }
</style>
