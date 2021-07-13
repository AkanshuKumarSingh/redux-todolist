import React, { useState } from 'react'
import { connect } from 'react-redux';

function Todo(props) {
    console.log(props);

    const [inputData, setInputData] = useState("");

    return (
        <>
            <div className="main-div"></div>
            <div className="child-div">
                <figure>
                    <figcaption>Add Your list</figcaption>
                </figure>

                <div className="addItems">
                    <input type="text" placeholder="Add Items..."
                        value={inputData}
                        onChange={(event) => { setInputData(event.target.value) }}
                    ></input>
                    <button onClick={() => {
                        props.addNote(inputData)
                        setInputData("");
                    }}>ADD</button>
                </div>
            </div>
            <div className="child-div">
                {props.list.map((item, i) => {
                    return (
                        <div>
                            {item}
                            <button onClick={() => {
                                props.deleteNote(i);
                                setInputData("");
                            }
                            }>Delete</button>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

const mapStateToProps = store => {
    console.log("in map state to prop", store);
    // state varible changes
    return store;
}
const mapDispatchtoProps = dispatch => {
    // action
    // handler function
    return {
        addNote: (val) => {
            //dispatch action
            return dispatch({ type: 'add_note', payload: val })
        },
        deleteNote: (idx) => {
            return dispatch({ type: 'delete_note', payload: idx });
        }
    }
}


const HigherOrderComponent = connect(mapStateToProps, mapDispatchtoProps)(Todo);

export default HigherOrderComponent;