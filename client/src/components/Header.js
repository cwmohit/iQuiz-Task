import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext,setUserContext} from '../App';
export default function Header({setUser}) {

    const userLogin = useContext(UserContext);
    const setUserLog = useContext(setUserContext);
   console.log(userLogin)
    return (
        <div className="container-fluid bg-dark mb-2">
            <nav className="container navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand text-info" to="/">iQuiz</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        {
                            userLogin.userLogin && <li className="nav-item"><Link className="nav-link" to="/QuizList">QuizList</Link> </li>
                        }
                        {
                            userLogin.userLogin ? <li className="nav-item"><Link className="nav-link" to="/Auth" onClick={()=>setUserLog({userLogin: false, userId: ""})}>Logout</Link> </li>
                             : <li className="nav-item">
                            <Link className="nav-link" to="/Auth">Login</Link>
                        </li> 
                        }
                    </ul>

                </div>
            </nav>

        </div>
    )
}
