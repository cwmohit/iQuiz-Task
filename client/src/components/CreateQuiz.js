import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default function CreateQuiz() {
   const [id,setId] = useState('')
    const [mcq, setMcq] = useState({
        question: "", option1: "", option2: "", option3: "", option4: "", answer: ""
    });
    const [msq, setMsq] = useState({
        question: "", option1: "", option2: "", option3: "", option4: "", answer: []
    })
    const [trueFalse, setTrueFalse] = useState({
        question: "", answer: ""
    })

    
    
    const formHandleSubmit = (e) => {
        e.preventDefault();
        let user = JSON.parse(localStorage.getItem("user")).user;
        axios.post('http://localhost:3002/questions', {
            id: id,
            userId: user,
            mcq, msq, trueFalse
        }).then((Response) => {
            console.log(Response);
            setMcq({
                question: "", option1: "", option2: "", option3: "", option4: "", answer: ""
            })
            setMsq({
                question: "", option1: "", option2: "", option3: "", option4: "", answer: []
            })
            setTrueFalse({
                question: "", answer: ""
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    const settingMsg = (option) => {
        const result = msq.answer.find(ansoption => ansoption === option);
        console.log(result)
        if (result === undefined) {
            setMsq({
                ...msq, answer: [...msq.answer, option]
            })
        } else {
            const updateResult = msq.answer.filter((ans) => ans !== option)
            setMsq({
                ...msq, answer: updateResult
            })
        }
    }


    return (
        <div className='container bg-light'>
            <div className='row quizForm'>
                <div className="col-12 col-lg-11 col-md-11 m-auto" >
                    <h1 className="text-center text-info">Create a iQuiz</h1>

                    <form className="w-100 row" onSubmit={formHandleSubmit}>
                        <div className="col-lg-6 col-md-6 col-12 m-auto">
                            <div className="form-group">
                                <label htmlFor="mcq">MCQ</label>
                                <input type="text" onChange={(e) => setMcq({ ...mcq, question: e.target.value })} value={mcq.question} className="form-control" id="mcq" aria-describedby="mcq" placeholder="Question 1 (MCQ)" />
                                <div className="form-check mt-2">
                                    <input onClick={(e) => setMcq({ ...mcq, answer: "A" })} className="form-check-input" type="radio" name="mcq" id="option1" />
                                    <label className="form-check-label" htmlFor="option1">
                                        <input onChange={(e) => setMcq({ ...mcq, option1: e.target.value })} type="text" placeholder="Option 1" value={mcq.option1} />
                                    </label>
                                </div>
                                <div className="form-check mt-2">
                                    <input onClick={(e) => setMcq({ ...mcq, answer: "B" })} className="form-check-input" type="radio" name="mcq" id="option2" />
                                    <label className="form-check-label" htmlFor="option2">
                                        <input onChange={(e) => setMcq({ ...mcq, option2: e.target.value })} value={mcq.option2} type="text" placeholder="Option 2" />
                                    </label>
                                </div>
                                <div className="form-check mt-2">
                                    <input onClick={(e) => setMcq({ ...mcq, answer: "C" })} className="form-check-input" type="radio" name="mcq" id="option3" />
                                    <label className="form-check-label" htmlFor="option3">
                                        <input onChange={(e) => setMcq({ ...mcq, option3: e.target.value })} value={mcq.option3} type="text" placeholder="Option 3" />
                                    </label>
                                </div>
                                <div className="form-check mt-2">
                                    <input onClick={(e) => setMcq({ ...mcq, answer: "D" })} className="form-check-input" type="radio" name="mcq" id="option4" />
                                    <label className="form-check-label" htmlFor="option4">
                                        <input onChange={(e) => setMcq({ ...mcq, option4: e.target.value })} value={mcq.option4} type="text" placeholder="Option 4" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="msq">MSQ</label>
                                <input value={msq.question} onChange={(e) => setMsq({ ...msq, question: e.target.value })} type="text" className="form-control" id="msq" placeholder="Question 2 (MSQ)" />
                                <div className="form-check mt-2">
                                    <input onClick={() => settingMsg("A")} type="checkbox" className="form-check-input" id="select1" />
                                    <input value={msq.option1} onChange={(e) => { setMsq({ ...msq, option1: e.target.value }) }} type="text" placeholder="Option 1" />
                                </div>
                                <div className="form-check mt-2">
                                    <input onClick={() => settingMsg("B")} type="checkbox" className="form-check-input" id="select2" />
                                    <input value={msq.option2} onChange={(e) => { setMsq({ ...msq, option2: e.target.value }) }} type="text" placeholder="Option 2" />
                                </div>
                                <div className="form-check mt-2">
                                    <input onClick={() => settingMsg("C")} type="checkbox" className="form-check-input" id="select3" />
                                    <input value={msq.option3} onChange={(e) => { setMsq({ ...msq, option3: e.target.value }) }} type="text" placeholder="Option 3" />
                                </div>
                                <div className="form-check mt-2">
                                    <input onClick={() => settingMsg("D")} type="checkbox" className="form-check-input" id="select4" />
                                    <input value={msq.option4} onChange={(e) => { setMsq({ ...msq, option4: e.target.value }) }} type="text" placeholder="Option 4" />
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-6 col-12 m-auto">

                            <div className="form-group">
                                <label htmlFor="mcq">True / False</label>
                                <input value={trueFalse.question} onChange={(e) => setTrueFalse({ ...trueFalse, question: e.target.value })} type="text" className="form-control" id="truefalse" aria-describedby="truefalse" placeholder="Question 3 (MCQ)" />
                                <select value={trueFalse.answer} onChange={(e) => setTrueFalse({ ...trueFalse, answer: e.target.value })} className="form-control mt-2" id="select" >
                                    <option disabled defaultValue="">Select</option>
                                    <option defaultValue="True">True</option>
                                    <option defaultValue="False"> False</option>
                                </select>
                            </div>
                        </div>
                        <button onClick={()=>setId(uuid())} type="submit" data-toggle="modal" data-target="#exampleModal" className="btn my-3 btn-outline-primary">Submit</button>
                    </form>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Your Quiz Generated Successfully</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                   <p className="text-info">visit -http://localhost:3000/#/Quiz/{id}</p>
      </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
