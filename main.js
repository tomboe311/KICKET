const app = Vue.createApp({
    data() {
        return {
            name: 'KICKET',
            description: 'KICKET helps to generate random teams for table soccer',
            author: 'Thomas Boehringer',
            email: 'git@tboehringer.de',
            website: 'tboehringer.de'
        }
    },
    computed: {
        getCopyright() {
            return '&copy; 2021 Copyright: <a href="' + this.website + '"> ' + this.website + ' </a>'
        }
    }
})
