import React from 'react';
import minus from "../Asserts/minus.png";
import plus from "../Asserts/plus.png";
import {useDispatch, useSelector} from 'react-redux';
import { COUNTER_KEY } from '../redux/counterRedux/counter.reducer';
import { increaseCounter, decreaseCounter } from '../redux/counterRedux/counter.action';

const Counter = () => {

    let dispatch = useDispatch()

    let increaseBtn = () =>{
        dispatch(increaseCounter())
    }

    let decreaseBtn = () =>{
        dispatch(decreaseCounter())
    }    


    
    //view data from store
    let viewCounter = useSelector((state) =>{
        return state[COUNTER_KEY]
    })
    return(
       <div>
           <div className="container">
                <div className="row mt-5">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="card headerColor">
                            <div className="card-header" style={{backgroundColor: "#0526ad"}}>
                                <h2 className="font-weight-bold">
                                    <b>REDUX COUNTER-APP</b>
                                </h2>
                            </div>
                            <div className="card-body d-flex justify-content-center">
                                <div className="mx-4 mt-3">
                                    <img src={minus} alt="minus" width='100' height='80' className='clickEffect' onClick={decreaseBtn} />
                                </div>
                                <div className="box mx-4 text-center" style={{color: 'black'}}>
                                    <span>{viewCounter.count}</span>
                                </div>
                                <div className="mx-4 mt-3">
                                    <img src={plus} alt="plus" width='100' height='80' className='clickEffect' onClick={increaseBtn} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
           </div>
       </div>
    )
}
export default Counter;