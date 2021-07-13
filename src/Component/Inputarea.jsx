import React, { useState } from 'react';

function Inputarea() {
    const [input, setInput] = useState("")

    return (
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => { }}>Add</button>
        </div>
    )
}

export default Inputarea;
