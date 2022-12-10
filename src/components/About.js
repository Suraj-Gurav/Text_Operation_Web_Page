import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';

function App() {
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const translate = (e) => {
    // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios.post('https://libretranslate.de/translate',params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res=>{
      console.log(res.data)
      setOutput(res.data.translatedText)
    })
  };

  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, []);

  //  curl -X GET "https://libretranslate.de/languages" -H  "accept: application/json"
  const [mode, setMode] = useState("light");
  const bgColor=()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
    }else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }
  return (
    <>
    
    <Navbar title="TextOperation" page="Home"  mode={mode} bgColor={bgColor}/>
   
    <div className="container mt-5 px-5">

      <div className="mb-3 text-center">
        Translate ({from}) :
        <select class="btn btn-primary dropdown-toggle mx-2" onChange={(e) => setFrom(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
        To ({to}) :
        <select class="btn btn-primary dropdown-toggle mx-2" onChange={(e) => setTo(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      
      <div>
        <textarea className="form-control" rows="8"  onInput={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      <div className="mt-3" >
        <button className="btn btn-primary" onClick={e =>translate()}>Translate</button>
      </div>
      <div>
        <h3>Output : </h3>
        <p>{output}</p>
      </div>
      
    </div>
    </>
  );
}

export default App;