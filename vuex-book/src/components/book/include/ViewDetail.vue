<template>
  <b-row class="mb-1">
    <b-col>
      <b-card
        :header-html="
          `<h3>${book.title}</h3><h5>(${book.isbn})</h5><div><h6>${
            book.author
          }</h6></div>
            <div><h6>${numberWithCommas(book.price)}원</h6></div>`
        "
        class="mb-2"
        border-variant="dark"
        no-body
      >
        <b-card-body class="text-left">
          <div>
            <template v-for="(msg, index) in message">
              {{ msg }}<br :key="index" />
            </template>
          </div>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "viewdetail",
  computed: {
    message: function() {
      // 상세설명부분 개행.
      if (this.book.content) return this.book.content.split("\n");
      return "";
    },
  },
  props: {
    // 상위 component에서 전달한 book객체를 받는다.
    book: Object,
  },
  methods: {
    numberWithCommas(x) {
      if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    enterToBr(str) {
      if (str) return str.replace(/(?:\r\n|\r|\n)/g, "<br />");
    },
  },
};
</script>
