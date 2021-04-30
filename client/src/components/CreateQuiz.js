import React from 'react';

export default function CreateQuiz() {
    return (
        <div className='container bg-light'>
            <div className='row quizForm'>
                <div className="col-12 col-lg-11 col-md-11 m-auto" >
                    <h1 className="text-center text-info">Create a iQuiz</h1>

                    <form className="w-100 row">
                     <div className="col-lg-6 col-md-6 col-12 m-auto">
                        <div className="form-group">
                            <label htmlFor="mcq">MCQ</label>
                            <input type="text" className="form-control" id="mcq" aria-describedby="mcq" placeholder="Question 1 (MCQ)" />
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="radio" name="mcq" id="option1" />
                                <label className="form-check-label" htmlFor="option1">
                                    <input type="text" placeholder="Option 1" />
                                </label>
                            </div>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="radio" name="mcq" id="option2" />
                                <label className="form-check-label" htmlFor="option2">
                                    <input type="text" placeholder="Option 2" />
                                </label>
                            </div>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="radio" name="mcq" id="option3" />
                                <label className="form-check-label" htmlFor="option3">
                                    <input type="text" placeholder="Option 3" />
                                </label>
                            </div>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="radio" name="mcq" id="option4" />
                                <label className="form-check-label" htmlFor="option4">
                                    <input type="text" placeholder="Option 4" />
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="msq">MSQ</label>
                            <input type="text" className="form-control" id="msq" placeholder="Question 2 (MSQ)" />
                            <div className="form-check mt-2">
                                <input type="checkbox" className="form-check-input" id="select1" />
                                <input type="text" placeholder="Option 1" />
                            </div>
                            <div className="form-check mt-2">
                                <input type="checkbox" className="form-check-input" id="select2" />
                                <input type="text" placeholder="Option 2" />
                            </div>
                            <div className="form-check mt-2">
                                <input type="checkbox" className="form-check-input" id="select3" />
                                <input type="text" placeholder="Option 3" />
                            </div>
                            <div className="form-check mt-2">
                                <input type="checkbox" className="form-check-input" id="select4" />
                                <input type="text" placeholder="Option 4" />
                            </div>
                        </div>
                                                 
                     </div>
                     <div className="col-lg-6 col-md-6 col-12 m-auto">
                      
                        <div className="form-group">
                        <label htmlFor="mcq">True / False</label>
                            <input type="text" className="form-control" id="truefalse" aria-describedby="truefalse" placeholder="Question 3 (MCQ)" />
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
