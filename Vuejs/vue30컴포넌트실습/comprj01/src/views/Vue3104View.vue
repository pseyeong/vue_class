<style scoped></style>

<template>
  <div id="app">
    <p>
      <button v-on:click="clickAddBox">박스 추가</button>
    </p>
    <p>
      <b v-for="(val, i) in arr" v-bind:key="i">
        {{ val }}
        <component-box v-bind:num="val"></component-box>
      </b>
    </p>
  </div>
</template>

<!--
  변수
  arr:[]
  함수
  clickAddBox
  컴포넌트
  component-box
 -->
<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import Vue3104Counter from '../components/vue3104/Vue3104Counter.vue';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      arr: [0, 1, 2, 3, 4, 5],
    };
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    clickAddBox(e) {
      console.log(e.target);
      //this.$data.arr.push(this.$data.arr.length); // 하나씩 증가 // 비추
      //많이 쓰는 방법 -> 스프레드 ... // 추천
      this.$data.arr = [...this.$data.arr, this.$data.arr.length];
    },
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    'component-box': Vue3104Counter,
  },
};
</script>
