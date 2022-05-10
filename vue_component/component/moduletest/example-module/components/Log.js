export default {
  template: '#Log',
  data() {
    return {
      count: 0,
      list: [],
    };
  },
  methods: {
    updateLog(data) {
      this.count += data;
      this.list.push(`${data}을 받았습니다.`);
    },
  },
  created: function () {
    bus.$on('updateLog', this.updateLog);
  },
};
