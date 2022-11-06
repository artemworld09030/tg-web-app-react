import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./component/header/header";
import {Route, Routes} from 'react-router-dom';
import ProductList from "./component/productList/productList";
import Form from "./component/form/form";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path={''} insex element={<ProductList />} />
            <Route path={'form'} element={<Form />} />
        </Routes>
    </div>
  );
}

export default App;
