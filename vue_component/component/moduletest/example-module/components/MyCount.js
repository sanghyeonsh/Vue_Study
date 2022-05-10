export default {
  template: '#MyCount',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    send() {
      bus.$emit('updateLog', this.count);
      this.count = '';
    },
  },
};
