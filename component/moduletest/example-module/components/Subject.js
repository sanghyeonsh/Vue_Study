export default {
  template: '<button v-on:click="addCount">{{title}} - {{ count }}</button>',
  props: ['title'],
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    addCount: function () {
      this.count += 1;
      // 부모 v-on:이름 에 해당하는 이름의 이벤트를 호출
      this.$emit('addtotcount');
    },
  },
};
