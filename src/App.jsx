import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [data, setData] = useState('https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F26%2Ftiny-white-kitten-873941684-2000.jpg');

  const getData = async () => {
    const response = await axios.get('https://aws.random.cat/meow')
    setData(response.data.file)
  }

  return (
    <div className="App">
      <div className="app-container">
        <div className="app-item">
          <img src={data} alt="cat_img" />
        </div>
      </div>
      <button onClick={getData} > Random cat button 😺 </button>
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
    </div>
  );
}

export default App;
