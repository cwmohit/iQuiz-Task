import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function QuizList() {
    const [questions, setQuestions] = useState([])
    const user = JSON.parse(localStorage.getItem("user")).user;
    console.log(user)
    useEffect(() => {
        axios.get('http://localhost:3001/questions/').then((res) => {
            const data = res.data.filter((question) => question.userId === user)
            setQuestions(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(questions)
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
                    <tr >
                        <th scope="row" >1</th>
                        <td><Link to='/quiz'>Click Here</Link></td>
                        <td><Link to='/Submissions/1'>Click Here</Link></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
