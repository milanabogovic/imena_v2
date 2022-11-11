import { useEffect, useState } from "react";
import NameDetails from "./NameDetails";
import { sendRequest } from "../api/sendRequest";
import { genderize, nationalize, agify } from "../api/apiList";

const DisplayNameDetails = ({ name }) => {
    const [gender, setGender] = useState();
    const [nation, setNation] = useState();
    const [age, setAge] = useState();
    useEffect(() => {
        if (name && name.length) {
            ( async() => {
                const _gender = await sendRequest(genderize, name);
                const _nation = await sendRequest(nationalize, name);
                const _age = await sendRequest(agify, name);  
                setGender(_gender.gender);
                setNation(_nation.country[0].country_id);
                setAge(_age.age);
            }) ();
        }
    }, [name])
    return ( 
        <>
            <ul>
                { (gender && nation && age) && ( 
                    <>
                        <NameDetails detail = { gender } />
                        <NameDetails detail = { nation } />
                        <NameDetails detail = { age } />
                    </>
                 ) }
            </ul>
        </>
    );
}
 
export default DisplayNameDetails;