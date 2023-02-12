import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

//rfc 단축키

function App({ ...props }) {
  return (
    <div>
      <Header></Header>
      <section id="page1" data-role="page">
        <div className="content" data-role="content">
          컨텐츠
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default React.memo(App);
//class는 예약어라서 className으로 써야함
//html이 아니라 자바스크립트로 봐야함
