const InputNameForm = ({ setName }) => {
    const submitName = (name) => {
        setName(name);
    }
    return ( 
        <form onSubmit={ (e) => { e.preventDefault(); submitName(e.target.children[0].value.trim()); } }>
            <input type="text" placeholder="eg. John Doe"></input>
        </form>
    );
}
 
export default InputNameForm;