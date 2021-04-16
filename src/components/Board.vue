<template>
    <div>
        <header>
            my-task
        </header>
        <main>
            <p class="info-line">合計: {{ totalListsInBoard }} 件</p>
            <draggable :list="lists"
                class="list-index"
                @end="movingList">
                <list v-for="(item, index) in lists"
                    :key="item.id"
                    :title="item.title"
                    :cards="item.cards"
                    :listIndex="index"
                    @change="movingCard"
                />
            
            <list-add />
            </draggable>
        </main>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import ListAdd from './ListAdd.vue'
import List from './List.vue'
import { mapState } from 'vuex'
export default {
    components: {
        draggable,
        ListAdd,
        List,
    },
    computed: {
        ...mapState([
            'lists'
        ]),
        totalListsInBoard() {
            return this.lists.length
        }
    },
    methods: {
        movingList: function() {
            this.$store.dispatch('updateLists', { lists: this.lists })
        },
        movingCard: function() {
            this.$store.dispatch('updateLists', { lists: this.lists })
        }
    }
}
</script>

