<template>
    <div>
        <header>
            my-task
        </header>
        <main>
            <p class="info-line">合計: 0 件</p>
            <list-add />
        </main>
    </div>
</template>

<script>
import ListAdd from './ListAdd.vue'
export default {
    components: {
        ListAdd
    },
}
</script>

