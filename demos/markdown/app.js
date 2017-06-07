/**
 * Created by xulingming on 2017/6/7.
 */
new Vue({
    el: '#editor',
    data: {
       input: '# hello'
    },
    computed: {
        compiledHtml: function () {
            return marked(this.input, {santize: true});
        }
    },
    methods: {
        update: _.debounce(function (e) {
            this.input = e.target.value;
        }, 300)
    }
});