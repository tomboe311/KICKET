app.component('kfooter', {
    props: {
        copyright: {
            type: String,
            rquired: true
        }
    },
    template:
    /*html*/
    `
    <footer class="footer">
        <div class="container text-center">
            <span class="text-muted" v-html="copyright"></span>
        </div>
    </footer>`
})