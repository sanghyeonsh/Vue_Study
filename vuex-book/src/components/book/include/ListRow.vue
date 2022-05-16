<template>
  <b-tr>
    <b-td class="text-center">{{ no }}</b-td>
    <b-td>{{ isbn }}</b-td>
    <b-th>
      <router-link :to="`book/view?isbn=${isbn}`">{{ title }}</router-link>
    </b-th>
    <b-td>{{ author }}</b-td>
    <b-td>{{ numberWithCommas(price) }}원</b-td>
  </b-tr>
</template>

<script>
export default {
  name: "listrow",
  props: {
    // 상위 component에서 전달한 도서정보를 받는다.
    no: String,
    isbn: String,
    title: String,
    author: String,
    price: Number,
  },
  methods: {
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>
