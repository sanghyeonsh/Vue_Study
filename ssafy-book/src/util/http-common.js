import axios from "axios";

// axios 객체 생성
export default axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

export const BOARD_URL = "http://localhost:9999/vue";
export const BOOK_URL = "http://localhost:9000/vue";
