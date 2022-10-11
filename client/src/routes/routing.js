import {Routes, Route} from "react-router-dom";
import OtherPage from '../otherPage';
import Fib from '../fib';
const Routing = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Fib/>}/>
            <Route path="/otherpage" element={<OtherPage/>}/>
        </Routes>
    )
}

export default Routing;