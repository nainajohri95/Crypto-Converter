import { useRef, useState } from "react"

function UserForm(){

    const [name, setName] = useState('');
    const nameInputRef = useRef(null);

    function handleSubmit(event){
        // to avoid form reload(down )
        event.preventDefault(); 
        // console.log('submit clicked');
        const nameInputValue = nameInputRef.current.value;
        alert(nameInputValue);
    }
    

     
    return(
        <form>
            <label>Name</label>
            {/* <input type="text" onChange={(event) => setName(event.target.value)}/> */}
            <input type="text" id="nameInput" ref={nameInputRef}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}
export default UserForm