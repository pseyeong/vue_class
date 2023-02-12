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
        <div class="content" data-role="content">
          컨텐츠
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default React.memo(App);
