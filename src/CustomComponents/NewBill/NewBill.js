import React, {useState} from "react";
import './BillForm.css'

const NewBill = (props) => {
    const[enteredvalue, ChangeIt] = useState('');
    const[enteredamountvalue, Changeamount] = useState('');
    const[entereddatevalue, ChangeItdate] = useState('');
    const titleHandler = (e) => {
        ChangeIt(e.target.value);
        // console.log(e.target.value)
    }
    const amountHandler = (e) => {
        Changeamount(e.target.value);
        // console.log(e.target.value)
    }
    const DateHandler = (e) => {
        ChangeItdate(e.target.value);
        // console.log(e.target.value)
    }

    const SubmitHandler = (e) => {
      e.preventDefault();
      const data = {
        title : enteredvalue,
        amount : enteredamountvalue,
        date : new Date(entereddatevalue)
      }
      props.onNewNewBill(data);
      // console.log(data);
      ChangeIt('');
      Changeamount('');
      ChangeItdate('');
    }
    return <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
              <div className='new-expense__control'>
                  <label>Title</label>
                  <input type="text" value={enteredvalue} onChange={titleHandler} />
              </div><div className='new-expense__control'>
                  <label>Amount</label>
                  <input type="number" min="0.01" step='0.01'  value={enteredamountvalue} onChange={amountHandler}/>
              </div>
              <div className='new-expense__control'>
                  <label>Date</label>
                  <input type="date" min='2020-01-01' max='2022-01-01'  value={entereddatevalue} onChange={DateHandler}/>
              </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Bill</button>
            </div>
          </form>
}


export default NewBill;