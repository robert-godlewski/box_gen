import React, {useState} from 'react';

const BoxForm = (props) => {
    const {boxColorList, setBoxColorList} = props;
    const [color, setColor] = useState("");

    const addColor = (e) => {
        e.preventDefault();
        setBoxColorList([...boxColorList, color]);
    };

    return (
        <div>
            <form onSubmit={addColor}>
                <div>
                    <label>Color </label>
                    <input type="text" name="color" onChange={(e) => setColor(e.target.value)}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    );
}

export default BoxForm;