export default {
  template: `
    <div>
        <h1>SSAFY 도서 삭세</h1>
        <div>삭제중...</div>
    </div>
    `,
  created() {
    // url에서 파라미터정보 얻기.
    const params = new URL(document.location).searchParams;
    // localStorage에서 booklist로 저장된 도서 목록을 얻어온 후 JSON객체로 parsing한다.
    const booklist = JSON.parse(localStorage.getItem("booklist"));
    // 도서목록에서 삭제할 isbn에 해당하지 않는 도서를 검색 booklist의 books 저장한다.
    booklist.books = booklist.books.filter((book) => {
      return book.isbn != params.get("isbn");
    });
    // 도서목록 booklist객체를 booklist라는 이름으로 localStorage에 저장한다.
    localStorage.setItem("booklist", JSON.stringify(booklist));

    alert("삭제가 완료되었습니다.");
    // list.html 페이지로 이동.
    location.href = "./list.html";
  }
};
