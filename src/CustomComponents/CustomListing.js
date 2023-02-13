import React from 'react';

import FirstComponent from "./FirstComponent.js";
import './CustomListing.css';


const CustomListing = props => {
    if(props.items.length === 0){
        return <h2 claaName="expenses-list__fallback">No shit found!!!!</h2>
    }
    return(<ul className="expenses-list">
        {props.items.map(expense => <FirstComponent key={expense.id} title= {expense.title} amount={expense.amount} date={expense.date} />)}
    </ul>)
}



export default CustomListing;