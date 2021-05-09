import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios'
import _ from 'lodash';
export default function Submissions() {
   const [answers,setAnswers]=useState([]);
   const {id}=useParams()
 useEffect(() => {
        axios.get('http://localhost:3002/answers/').then((res) => {
            const data = res.data.filter((answer) => answer.questioId === id)
            setAnswers(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div className="container quizList">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Submissions</th>
                </tr>
            </thead>
            <tbody>
            {answers.map((answer,index)=><tr key={answer.id}><td>{index+1}</td>
                    <td>{answer.user}</td>
                    <td>1. {answer.mcqAnswer}, 2. {answer.msqAnswer.map(option=>option)}, 3. {answer.trueFalseAnswer}</td>
                    </tr>)}
                   
            </tbody>
        </table>
    </div>
    )
}
