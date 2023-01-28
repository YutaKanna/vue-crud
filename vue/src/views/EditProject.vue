<template>
  <!-- AddProject.vueのtemplateとほぼ同じ -->
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required />
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>更新する</button>
  </form>
</template>

<script>

export default {
  props: ['id'], //index.jsでpropsを設定したため使える
  data() {
    return {
      //元々のデータが編集画面でみえるようにしたい
      title: '',
      details: '',
      uri: 'http://localhost:8080/projects/' + this.id
    }
  },
  mounted() {
    fetch(this.uri)
      .then(res => res.json())
      .then(data => {
        // dataはクリックしたidのプロジェクトデータ
        this.title = data.title //titleにクリックしたdataのtitleを入れる
        this.details = data.details //上に同じ、編集画面で表示できるように。
      })
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: 'PATCH', //変更部分だけほしいのでPATCH
        headers: { 'Content-Type': 'application/json' },
        // 変更部分titleとdetailsをオブジェクトからJSONへ変換
        body: JSON.stringify({ title: this.title, details: this.details })
      })
        .then(() => {
          // Home.vueにリダイレクト
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
