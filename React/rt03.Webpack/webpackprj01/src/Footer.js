function Footer({ ...props }) {
  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <div w3-include-footer="footer.html">
      <footer data-role="footer">
        <h1>React Footer</h1>
      </footer>
    </div>
  );
}
export default Footer; // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
