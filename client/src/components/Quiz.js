import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import uuid from 'react-uuid';
import _ from 'lodash';
export default function Quiz() {
   const [quizData,setQuizData]=useState([])
   const [name,setName]=useState("");
   const [mcqAnswer,setMcqAnswer]=useState("")
   const [msqAnswer,setMsqAnswer]=useState([]);
   const [trueFalseAnswer,setTrueFalseAnswer]=useState("");
    let {id}=useParams()
   
    useEffect(()=>{
     axios.get(`http://localhost:3002/questions/${id}`).then((res)=>{
        setQuizData(res.data)
     }).catch((err)=>{
         console.log(err)
     })
    },[])


    const clickMsq=(option)=>{
        const result = msqAnswer.find(ansoption => ansoption === option);
        console.log(result)
        if (result === undefined) {
            setMsqAnswer([
                ...msqAnswer, option
            ])
        } else {
            const updateResult = msqAnswer.filter((ans) => ans !== option)
            setMsqAnswer(updateResult)
        }
    }
    const onHandleSubmit=(e)=>{
     e.preventDefault();
     let userId = uuid()
     axios.post('http://localhost:3002/answers', {
        questioId: id,
        id: userId,
        user: name,
        mcqAnswer: mcqAnswer, 
        msqAnswer: msqAnswer, 
        trueFalseAnswer: trueFalseAnswer
    }).then((res)=>{
        alert("Your Response has been submitted successfully")
        setName("")
    }).catch((err)=>{
        console.log(err)
    })
    }
    return (
        <div className='container bg-light'>
        <div className='row quizForm'>

            <div className="col-12 col-lg-11 col-md-11 m-auto" >
                <h1 className="text-center text-info">Submit Your iQuiz</h1>
                <div className="form-group">
                 <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Enter Your Name"/>
                </div>
                <form className="w-100 row" onSubmit={onHandleSubmit}>
                 <div className="col-lg-6 col-md-6 col-12 m-auto">
                    <div className="form-group">
                        <label htmlFor="mcq">MCQ</label>
                       <p className="font-weight-bold">{_.get(quizData, ['mcq', 'question'])}</p>
                        <div className="form-check mt-2">
                            <input onClick={()=>setMcqAnswer("A")} className="form-check-input" type="radio" name="mcq" id="option1" />
                            <p>{_.get(quizData, ['mcq', 'option1'])}</p>
                        </div>
                        <div className="form-check mt-2">
                            <input onClick={()=>setMcqAnswer("B")}  className="form-check-input" type="radio" name="mcq" id="option2" />
                            <p>{_.get(quizData, ['mcq', 'option2'])}</p>
                        </div>
                        <div className="form-check mt-2">
                            <input onClick={()=>setMcqAnswer("C")}  className="form-check-input" type="radio" name="mcq" id="option3" />
                            <p>{_.get(quizData, ['mcq', 'option3'])}</p>
                        </div>
                        <div className="form-check mt-2">
                            <input onClick={()=>setMcqAnswer("D")}  className="form-check-input" type="radio" name="mcq" id="option4" />
                            <p>{_.get(quizData, ['mcq', 'option4'])}</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="msq">MSQ</label>
                        <p className="font-weight-bold">{_.get(quizData, ['msq', 'question'])}</p>
                        <div className="form-check mt-2">
                            <input onClick={(e)=>clickMsq("A")} type="checkbox" className="form-check-input" id="select1" />
                            <p>{_.get(quizData, ['msq', 'option1'])}</p>
                        </div>
                        <div className="form-check mt-2">
                            <input onClick={(e)=>clickMsq("B")} type="checkbox" className="form-check-input" id="select2" />
                            <p>{_.get(quizData, ['msq', 'option2'])}</p>
                        </div>
                        <div className="form-check mt-2">
                            <input onClick={(e)=>clickMsq("C")} type="checkbox" className="form-check-input" id="select3" />
                            <p>{_.get(quizData, ['msq', 'option3'])}</p>
                        </div>
                        <div className="form-check mt-2">
                            <input onClick={(e)=>clickMsq("D")} type="checkbox" className="form-check-input" id="select4" />
                            <p>{_.get(quizData, ['msq', 'option4'])}</p>
                        </div>
                    </div>
                                             
                 </div>
                 <div className="col-lg-6 col-md-6 col-12 m-auto">
                  
                    <div className="form-group">
                    <label htmlFor="mcq">True / False</label>
                    <p className="font-weight-bold">{_.get(quizData, ['trueFalse', 'question'])}</p>
                        <select onChange={(e)=>setTrueFalseAnswer(e.target.value)} value={trueFalseAnswer} className="form-control mt-2" id="select" >
                            <option>Choose...</option>
                            <option >True</option>
                            <option>False</option>
                        </select>
                    </div>
                 </div>
                    <button type="submit" className="btn my-3 btn-outline-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
    )
}
