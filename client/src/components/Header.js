import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext,setUserContext} from '../App';
export default function Header() {

    const userLogin = useContext(UserContext);
    const setUser = useContext(setUserContext);
    const userLogout=()=>{
        localStorage.removeItem("user");
        setUser({
            userLogin: false, userId: ""
        })
    }
   console.log(userLogin)
    return (
        <div className="container-fluid bg-primary mb-2">
            <nav className="container navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand " to="/">iQuiz</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home </Link>
                        </li>
                        {
                            userLogin.userLogin && <li className="nav-item"><Link className="nav-link text-white" to="/QuizList">QuizList</Link> </li>
                        }
                        {
                            userLogin.userLogin ? <li className="nav-item"><Link className="nav-link btn btn-danger text-white" to="/Auth" onClick={userLogout}>Logout <i className="fa fa-sign-in" aria-hidden="true"></i></Link> </li>
                             : <li className="nav-item">
                            <Link className="nav-link btn btn-danger text-white" to="/Auth">Login <i className="fa fa-sign-in" aria-hidden="true"></i></Link>
                        </li> 
                        }
                    </ul>

                </div>
            </nav>

        </div>
    )
}
