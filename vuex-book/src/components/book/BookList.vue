<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <h3 class="underline">도서목록</h3>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button variant="outline-primary" @click="movePage">등록</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-if="books.length">
        <b-table-simple hover responsive>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>번호</b-th>
              <b-th>ISBN</b-th>
              <b-th>제목</b-th>
              <b-th>저자</b-th>
              <b-th>가격</b-th>
            </b-tr>
          </b-thead>
          <tbody>
            <!-- 하위 component인 ListRow에 데이터 전달(props) -->
            <list-row
              v-for="(book, index) in books"
              :key="index"
              :no="`${index + 1}`"
              :isbn="book.isbn"
              :title="book.title"
              :author="book.author"
              :price="book.price"
            />
          </tbody>
        </b-table-simple>
      </b-col>
      <!-- <b-col v-else class="text-center">도서 목록이 없습니다.</b-col> -->
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import ListRow from "@/components/book/include/ListRow.vue";

export default {
  name: "booklist",
  components: {
    ListRow,
  },
  computed: {
    // vuex의 getters에 등록된 함수 얻기.
    ...mapGetters(["books"]),
  },
  created() {
    // vuex의 getBooks라는 ations 호출.
    this.$store.dispatch("getBooks");
  },
  methods: {
    movePage() {
      this.$router.push({ name: "book-create" });
    },
  },
};
</script>
