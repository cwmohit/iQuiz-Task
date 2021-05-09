import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function QuizList() {
    const [questions, setQuestions] = useState([])
    const user = JSON.parse(localStorage.getItem("user")).user;
    console.log(user)
    useEffect(() => {
        axios.get('http://localhost:3002/questions/').then((res) => {
            const data = res.data.filter((question) => question.userId === user)
            setQuestions(data)
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
                        <th scope="col">iQuiz</th>
                        <th scope="col">Submissions</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question,index)=><tr key={question.id}><td>{index+1}</td>
                    <td><Link to={`/quiz/${question.id}`}>Click here</Link></td>
                    <td><Link to={`/Submissions/${question.id}`}>Click Here</Link></td>
                    </tr>)}
                   

                </tbody>
            </table>
        </div>
    )
}
