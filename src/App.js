import React, {useState} from 'react';
import './App.css'
import Card from './CustomComponents/Card.js'
import BillForm from './CustomComponents/NewBill/BillForm.js';
import FilterComponent from './CustomComponents/FilterComponent.js'
import CustomListing from './CustomComponents/CustomListing.js'
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
  const[year, SetYear] = useState('2021')
  const[expenses, SetExpenses] = useState(dummy)
  const[variable, SetVariable] = useState(false);

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

  const FilterHandler = expenses.filter(a => {
    return a.date.getFullYear().toString() === year; 
  });

  const ShowForm = () => {
    SetVariable(true)
  }
  
  return (<div className="new-expenses">
    {variable && <BillForm newbillform={finalprops}/>}
    {!variable  && <button onClick={ShowForm}>ADD A BILL</button>}
    <Card className="expenses">
      <FilterComponent selected={year} onYearchange={YearHandler}/>
      <li>
      <CustomListing items={FilterHandler} />
      </li>
    </Card>
    </div>
  );
}

export default App;
