import React from 'react'

export default function Quiz() {
    return (
        <div className='container bg-light'>
        <div className='row quizForm'>

            <div className="col-12 col-lg-11 col-md-11 m-auto" >
                <h1 className="text-center text-info">Submit Your iQuiz</h1>
                <div className="form-group">
                 <input type="text"  className="form-control" placeholder="Enter Your Name"/>
                </div>
                <form className="w-100 row">
                 <div className="col-lg-6 col-md-6 col-12 m-auto">
                    <div className="form-group">
                        <label htmlFor="mcq">MCQ</label>
                       <p className="font-weight-bold">What is Lorem Ipsum?</p>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="radio" name="mcq" id="option1" />
                            <p>Ipsum Lorem</p>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="radio" name="mcq" id="option2" />
                            <p>Ipsum Lorem</p>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="radio" name="mcq" id="option3" />
                            <p>Ipsum Lorem</p>
                        </div>
                        <div className="form-check mt-2">
                            <input className="form-check-input" type="radio" name="mcq" id="option4" />
                            <p>Ipsum Lorem</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="msq">MSQ</label>
                        <p className="font-weight-bold">What is Lorem Ipsum?</p>
                        <div className="form-check mt-2">
                            <input type="checkbox" className="form-check-input" id="select1" />
                            <p>Ipsum Lorem</p>
                        </div>
                        <div className="form-check mt-2">
                            <input type="checkbox" className="form-check-input" id="select2" />
                            <p>Ipsum Lorem</p>
                        </div>
                        <div className="form-check mt-2">
                            <input type="checkbox" className="form-check-input" id="select3" />
                            <p>Ipsum Lorem</p>
                        </div>
                        <div className="form-check mt-2">
                            <input type="checkbox" className="form-check-input" id="select4" />
                            <p>Ipsum Lorem</p>
                        </div>
                    </div>
                                             
                 </div>
                 <div className="col-lg-6 col-md-6 col-12 m-auto">
                  
                    <div className="form-group">
                    <label htmlFor="mcq">True / False</label>
                    <p className="font-weight-bold">What is Lorem Ipsum?</p>
                        <select className="form-control mt-2" id="select" >
                        <option  disabled defaultValue="">Select</option>
                            <option>True</option>
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
