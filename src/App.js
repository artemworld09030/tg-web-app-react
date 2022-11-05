import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, [])

    const noClose = () => {
        tg.close( )
    }

  return (
    <div className="App">
      work
        <button onClick={noClose}>Закрыть</button>
    </div>
  );
}

export default App;
