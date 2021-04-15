<template>
<!-- ①textfieldへのcss追加: @focusin/outイベント発火 -->
<!-- ②submitbuttonの表示: v-ifでfocusがon(isEditingの値がtrue) and テキスト入力有り(titleExists)のときだけ活性化させる  -->
<!-- ③submitbuttonへのcss追加: titleExitingがtrueのときにbind  -->
    <form :class="classList" @submit.prevent="addList">
      <input   v-model="title"
                  type="text"
                  class="text-input"
                  placeholder="Add new list"
                  @focusin="startEditing"
                  @focusout="finishEditing"
      >

      <button type="submit"
                  class="add-button"
                  v-if="isEditing || titleExists">
        カードを追加
      </button>
    </form>
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
      isEditing: false
    }
  },
  computed: {
    classList() {
      const classList = ['addlist']

      if (this.isEditing) {
        classList.push('active')
      }

      if (this.titleExists) {
        classList.push('addable')
      }      
      return classList
    },
    titleExists() {
      return this.title.length > 0
    },
  },
  methods: {
    addList: function() {
      this.$store.dispatch('addlist', { title: this.title })
      this.title = ''
    },
    startEditing() {
      this.isEditing = true
    },
    finishEditing() {
      this.isEditing = false
    }
  }
}
</script>