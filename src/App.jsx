// import "./App.css";
// import BodyComponent from "./my-web/BodyComponent";
import Header from './my-web/Header';
import Body from './my-web/Body';
import Footer from './my-web/Footer';
import Auth from './my-web/Auth';

// import Toggle from "./State/Toggle";
// import YoutubeList from "./components/Youtube/YoutubeList";
import './my-web/styles/responsive.css';
import './my-web/styles/base.css';
import './my-web/styles/grid.css';
import './my-web/styles/main.css';

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
