import React, { useState } from 'react';
import './FirstComponent.css'
import DateComponent from './DateComponent'
import Card from './Card'


function FirstComponent(props){
  const [title, SetTitle] = useState(props.title);
    const eventHandler = () => {
      SetTitle("Done!!!");
    }
    return (<Card className='expense-item'>
            <DateComponent date={props.date}/>
            <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{props.amount}</div>
            <button onClick={eventHandler}>Title Change</button>
            </div>
          </Card>)
}

export default FirstComponent;