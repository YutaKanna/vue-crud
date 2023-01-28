<template>
  <nav class="filter-nav">
    <!-- currentをHomeHoge.vueから受け取る -->
    <!-- activeクラスをそれぞれつくように設定する -->
    <button @click="updateFilter('all')" :class="{active: current === 'all'}">すべて表示</button>
    <button @click="updateFilter('completed')"  :class="{active: current === 'completed'}">完了</button>
    <button @click="updateFilter('ongoing')" :class="{active: current === 'ongoing'}">未完了</button>
  </nav>
</template>

<script>
export default {
  props: ['current'],
  methods: {
    updateFilter(by) {
      this.$emit('filterChange', by)
    }
  }
}
</script>
