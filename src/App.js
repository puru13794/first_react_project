import React, {useState} from 'react';
import FirstComponent from "./CustomComponents/FirstComponent.js";
import './App.css'
import Card from './CustomComponents/Card.js'
import BillForm from './CustomComponents/NewBill/BillForm.js';
import FilterComponent from './CustomComponents/FilterComponent.js'
const dummy = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const[year, SetYear] = useState('2019')
  const[expenses, SetExpenses] = useState(dummy)

  const finalprops = (props) => {
    // console.log(props);
    SetExpenses((expenses) => {
      return  [props, ...expenses]
    });
  }
  const YearHandler = (yearprops) => {
    // console.log(yearprops)
    SetYear(yearprops);
  }
  return (<div>
    
    <BillForm newbillform={finalprops}/>
    <Card className="expenses">
      <FilterComponent selected={year} onYearchange={YearHandler}/>
      {expenses.map(expense => <FirstComponent title= {expense.title} amount={expense.amount} date={expense.date} />)}
    </Card>
    </div>
  );
}

export default App;
