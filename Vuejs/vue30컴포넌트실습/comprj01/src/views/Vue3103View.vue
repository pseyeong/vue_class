<!-- vuefc 탭 -->
<!-- 부모의 데이터를 자식에게 내린다. -->

<style scoped></style>

<template>
  <div id="app">
    <h2>컴포넌트 등록</h2>
    <Vue3103Comp v-bind:localmsg="localmsg1"></Vue3103Comp>
    <Vue3103Comp v-bind:localmsg="localmsg2"></Vue3103Comp>
  </div>
</template>
<!--
  //변수
    localmsg1, localmsg2
  //함수

  //부모 자식

  localmsg="localmsg2"
  localmsg => 자식
  localmsg2 => 부모


 -->

<script>
import Vue3103Comp from '../components/vue3103/Vue3103Comp.vue';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      localmsg1: '부모 컴포넌트에서 자식 컴포넌트로 넘겨진 메세지1',
      localmsg2: '부모 컴포넌트에서 자식 컴포넌트로 넘겨진 메세지2',
    };
  },
  components: {
    //부모에 설정
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    Vue3103Comp: Vue3103Comp,
  },
};
</script>
