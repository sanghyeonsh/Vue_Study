<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <h3 v-if="type == 'create'" class="underline">SSAFY 도서 등록</h3>
        <h3 v-else class="underline">SSAFY 도서 수정</h3>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-left">
        <b-form>
          <b-form-group
            id="isbn-group"
            label="도서번호(ISBN):"
            label-for="isbn"
            description="ISBN을 입력하세요."
          >
            <b-form-input
              v-if="type == 'create'"
              id="isbn"
              ref="isbn"
              v-model="isbn"
              type="text"
              required
              placeholder="ISBN 입력..."
            />
            <b-form-input
              v-else
              id="isbn"
              ref="isbn"
              v-model="isbn"
              type="text"
              required
              placeholder="ISBN 입력..."
              readonly
            />
          </b-form-group>
          <b-form-group
            id="title-group"
            label="도서제목:"
            label-for="title"
            description="도서제목을 입력하세요."
          >
            <b-form-input
              id="title"
              ref="title"
              v-model="title"
              type="text"
              required
              placeholder="도서제목 입력..."
            />
          </b-form-group>
          <b-form-group
            id="author-group"
            label="저자:"
            label-for="author"
            description="저자를 입력하세요."
          >
            <b-form-input
              id="author"
              ref="author"
              v-model="author"
              type="text"
              required
              placeholder="저자 입력..."
            />
          </b-form-group>
          <b-form-group
            id="price-group"
            label="가격:"
            label-for="price"
            description="가격을 입력하세요."
          >
            <b-form-input
              id="price"
              ref="price"
              v-model="price"
              type="text"
              required
              placeholder="가격 입력..."
            />
          </b-form-group>

          <b-form-group
            id="content-group"
            label="도서내용:"
            label-for="content"
            ref="content"
          >
            <b-form-textarea
              id="content"
              v-model="content"
              placeholder="도서내용 입력..."
              rows="10"
              max-rows="15"
            ></b-form-textarea>
          </b-form-group>

          <b-button
            v-if="type == 'create'"
            variant="primary"
            class="m-1"
            @click="checkValue"
            >도서등록</b-button
          >
          <b-button v-else variant="success" class="m-1" @click="checkValue"
            >도서수정</b-button
          >
          <b-button variant="primary" class="m-1" @click="moveList"
            >목록</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </b-container>
  <!-- <div class="regist">
    <h1 class="underline">SSAFY 도서 수정</h1>
    <div class="regist_form">
      <label for="isbn">도서번호</label>
      <input v-if="type == 'create'" type="text" id="isbn" name="isbn" v-model="isbn" ref="isbn" />
      <input v-else type="text" id="isbn" name="isbn" v-model="isbn" ref="isbn" readonly /><br />
      <label for="title">도서명</label>
      <input type="text" id="title" name="title" v-model="title" ref="title" /><br />
      <label for="author">저자</label>
      <input type="text" id="author" name="author" v-model="author" ref="author" /><br />
      <label for="price">가격</label>
      <input type="number" id="price" name="price" v-model="price" ref="price" /><br />
      <label for="content">설명</label><br />
      <textarea id="content" name="content" v-model="content" ref="content" cols="35" rows="5"></textarea><br />
      <button v-if="type == 'create'" @click="checkValue">등록</button>
      <button v-else @click="checkValue">수정</button>
      <button @click="moveList">목록</button>
    </div>
  </div> -->
</template>

<script>
import http from "@/util/http-common";

export default {
  name: "writeform",
  props: {
    type: { type: String },
  },
  data() {
    return {
      isbn: "",
      title: "",
      author: "",
      price: "",
      content: "",
    };
  },
  created() {
    if (this.type === "modify") {
      // 도서 수정 페이지일 경우 isbn에 해당하는 도서 정보를 서버로 부터 얻기.
      http.get(`/book/${this.$route.params.isbn}`).then(({ data }) => {
        this.isbn = data.isbn;
        this.title = data.title;
        this.author = data.author;
        this.price = data.price;
        this.content = data.content;
      });
    }
  },
  methods: {
    // 입력값 체크하기 - 체크가 성공하면 registBook 호출
    checkValue() {
      // 사용자 입력값 체크하기
      // isbn, 제목, 저자, 가격, 설명이 없을 경우 각 항목에 맞는 메세지를 출력
      let err = true;
      let msg = "";
      !this.isbn &&
        ((msg = "isbn 입력해주세요"), (err = false), this.$refs.isbn.focus());
      err &&
        !this.title &&
        ((msg = "제목 입력해주세요"), (err = false), this.$refs.title.focus());
      err &&
        !this.author &&
        ((msg = "저자 입력해주세요"), (err = false), this.$refs.author.focus());
      err &&
        !this.price &&
        ((msg = "가격 입력해주세요"), (err = false), this.$refs.price.focus());
      err &&
        !this.content &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.content.focus());

      if (!err) alert(msg);
      // 만약, 내용이 다 입력되어 있다면 registBook 호출
      else this.type == "create" ? this.registBook() : this.modifyBook();
    },
    registBook() {
      // 저장할 도서 정보를 서버로 전송.
      http
        .post("/book/", {
          isbn: this.isbn,
          title: this.title,
          author: this.author,
          price: this.price,
          content: this.content,
        })
        .then(({ data }) => {
          let msg = "등록 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "등록이 완료되었습니다.";
          }
          alert(msg);
          this.moveList();
        });
    },
    modifyBook() {
      // 수정할 도서정보를 서버로 전송
      http
        .put(`/book/${this.isbn}`, {
          isbn: this.isbn,
          title: this.title,
          author: this.author,
          price: this.price,
          content: this.content,
        })
        .then(({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
          }
          alert(msg);
          this.$router.push("/book");
        });
    },
    moveList() {
      this.$router.push("/book");
    },
  },
};
</script>
