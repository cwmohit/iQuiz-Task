import React from 'react'
import {Link} from 'react-router-dom'
export default function QuizList() {
    console.log("QuizList")
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
                    <tr>
                        <th scope="row">1</th>
                        <td><Link to='/Quiz/'>Click Here</Link></td>
                        <td><Link to='/Submissions/1'>Click Here</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td><Link to='/Quiz/'>Click Here</Link></td>
                        <td><Link to='/Submissions/2'>Click Here</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td><Link to='/Quiz/'>Click Here</Link></td>
                        <td><Link to='/Submissions/3'>Click Here</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td><Link to='/Quiz/'>Click Here</Link></td>
                        <td><Link to='/Submissions/4'>Click Here</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td><Link to='/Quiz'>Click Here</Link></td>
                        <td><Link to='/Submissions/5'>Click Here</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
