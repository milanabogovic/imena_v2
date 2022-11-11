import { useState } from "react";
import InputNameForm from "./components/InputNameForm";
import DisplayNameDetails from "./components/DisplayNameDetails";

const App = () => {
    const [name, setName] = useState(null);
    return ( 
        <>
            <InputNameForm setName = { setName } />
            { name && <DisplayNameDetails name = { name } /> }
        </>
     );
}
 
export default App;