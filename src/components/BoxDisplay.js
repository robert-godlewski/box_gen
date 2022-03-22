import React from 'react';

const BoxDisplay = (props) => {
    const { boxColorList } = props;

    return (
        <div>
            {
                boxColorList.map((color, index) => (
                    <div key={index} style={{
                        display: 'inline-block',
                        margin: '10px',
                        backgroundColor: color,
                        width: '50px',
                        height: '50px'
                    }}></div>
                ))
            }
        </div>
    )
}

export default BoxDisplay;