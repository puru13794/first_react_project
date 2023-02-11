import React from 'react'
import NewBill from './NewBill.js'

import './NewBill.css'

const BillForm = (variable) => {
    const chilToParent = (props) => {
        const newbill = {
            ...props,
            id: Math.random().toString()
        };
        // console.log(newbill);
        variable.newbillform(newbill);
    }

    return <div className='new-expense'>
        <NewBill onNewNewBill={chilToParent}/>
    </div>
}

export default BillForm 