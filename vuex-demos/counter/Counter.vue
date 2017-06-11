<template>
    <div id="app">
        Clicked: {{$store.state.count}} times, count is {{evenOrOdd}}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment If Odd</button>
        <button @click="incrementAsync">Increment Async</button>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        computed: mapGetters([
                'evenOrOdd'
        ]),

        methods: mapActions([
                'increment',
                'decrement',
                'incrementIfOdd',
                'incrementAsync'
        ])
    }
</script>