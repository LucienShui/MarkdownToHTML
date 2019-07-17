<template>
    <div>
        <div v-html="content"></div>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                content: '',
            }
        },
        mounted() {
            this.load();
        },
        watch: {
            '$route.params.key': function () {
                this.load();
            }
        },
        methods: {
            load() {
                let path = this.$route.path;
                if (path[path.length - 1] === '/') { // directory
                    this.content = "<p>Directory: " + path + "</p>";
                    this.get(path, "README.md");
                } else {
                    let index = path.lastIndexOf("/");
                    let directory = path.substring(0, index + 1);
                    let file = path.substring(index + 1, path.length);
                    this.content = "<p>Directory: " + directory +  "</p><p>File: " + file +  "</p>"
                }
            },
            get(directory, file) {
                this.api.get(directory + file).then(response => {
                    this.content = response;
                })
            }
        }
    }
</script>

<style scoped>

</style>
