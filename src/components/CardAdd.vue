<template>
    <form :class="classList" @submit.prevent="addCardToList">
    <input v-model="body"
    type="text"
    class="text-input"
    placeholder="Add new card"
    @focusin="startEditing"
    @focusout="finishEditing"
    />

    <button  
    type="submit"
    class="add-button"
    v-if="isEditing || bodyExists">カードを追加</button>
    </form>
</template>

<script>
export default {
    props: {
        listIndex: {
            type: Number,
            require: true,
        }
    },
    data: function() {
        return {
            body: '',
            isEditing: false
        }
    },
    computed: {
        classList() {
            const classList = ['addcard']
            
            if(this.isEditing) {
                classList.push('active')
            }
            if(this.bodyExists) {
                classList.push('addable')
            }
            return classList
        },
        bodyExists() {
            return this.body.length > 0
        }
    },
    methods: {
        addCardToList: function() {
            this.$store.dispatch('addCardToList', {body: this.body, listIndex: this.listIndex })
        },
        startEditing: function() {
            this.isEditing = true
        },
        finishEditing: function() {
            this.isEditing = false
        }
    }
}
</script>