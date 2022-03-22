import React, {useState} from 'react';

const BoxForm = (props) => {
    const {boxColorList, setBoxColorList} = props;
    const [color, setColor] = useState("");
    const [size, setSize] = useState(50);

    // const addColor = (e) => {
    //     e.preventDefault();
    //     setBoxColorList([...boxColorList, color]);
    //     setColor("");
    // };

    const addBox = (e) => {
        e.preventDefault();
        setBoxColorList([
            ...boxColorList, 
            {
                color: color, 
                size: size + "px"
            }
        ]);
        setColor("");
        setSize(50);
    };

    return (
        <div>
            <form onSubmit={addBox}>
                <div>
                    <label>Color </label>
                    <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)}/>
                </div>
                <div>
                    <label>Size (in px)</label>
                    <input type="number" name="size" value={size} onChange={(e) => setSize(e.target.value)}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    );
}

export default BoxForm;