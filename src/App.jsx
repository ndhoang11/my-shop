
import Header from './my-web/Header';
import Footer from './my-web/Footer';
import Body from './my-web/Body';
import Auth from './my-web/Auth';
import './my-web/styles/main.css'
import './my-web/styles/base.css'
import './my-web/styles/grid.css'
import './my-web/styles/responsive.css'


import { useEffect, useState } from 'react';


function App() {
  
  const [on, setOn] = useState(false);

  const [searchText, setSearchText] = useState('');
  return (
    <div>
      <Header setSearchText={setSearchText} searchText={searchText} on={on} setOn={setOn} />
      <Body searchText={searchText} />
      <Footer></Footer>
       {on && <Auth setOn={setOn} /> }
    </div>
  );
}

export default App;
