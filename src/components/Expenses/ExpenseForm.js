import React, { useState } from 'react'
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/icons';

export default function ExpenseForm() {

    const { addExpense ,getExpenses , error , setError} = useGlobalContext();

        const [inputState, setInputState] = useState({
            title: "",
            amount: "",
            date: "",
            category: "",
            description: ""
        })
    
        const { title, amount, date, category, description } = inputState;
    
        const handleInput = (e) => {
            const { name, value } = e.target;
            setInputState({ ...inputState, [name]: value })
            setError('')
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            addExpense(inputState);
            setInputState({
                title: "",
                amount: "",
                date: "",
                category: "",
                description: ""
            })
            getExpenses();
        }
    
  return (
   <ExpenseFormStyled onSubmit={handleSubmit}>
    { error && <p className='error'>{error}</p>}
               <div className='input-control'>
                   <input type='text' value={title} name="title" placeholder='Expense Title' onChange={handleInput} />
               </div>
               <div className='input-control'>
                   <input type='text' value={amount} name="amount" placeholder='Expense amount' onChange={handleInput} />
               </div>
               <div className='input-control'>
                   <DatePicker id='date' placeholderText='Enter a date' selected={date} dateFormat="dd/mm/yyyy" onChange={(date) => {
                       setInputState({ ...inputState, date: date })
                   }} />
               </div>
               <div className='selects input-control'>
                   <select required value={category} name='category' id='category' onChange={handleInput}>
                       <option value="" disable> Select option</option>
                       <option value="education">Education</option>
                       <option value="health">Health</option>
                       <option value="groceries">Groceries</option>
                       <option value="subscriptions">Subscription</option>
                       <option value="takeaway">Takeaway</option>
                       <option value="clothing">Clothing</option>
                       <option value="travelling">Travelling</option>
                       <option value="other">Other</option>
                   </select>
               </div>
   
               <div>
                   <textarea name='description' value={description} onChange={handleInput} id='description' cols='30' rows='4'></textarea>
               </div>
               <div className='submit-btn'>
                 <Button name={"Add Expense"} icon={plus} bPad={'.8rem 1.6rem'} bRad={"30px"} bg={'var(--color-accent)'} color={"#fff"} hColor={"red"}
                 />
               </div>
   
           </ExpenseFormStyled>
  )
}

const ExpenseFormStyled = styled.form`
display:flex;
flex-direction:column;
gap:2rem;
padding:20px;

input , textarea , select{
font-family : inherit;
font-size:inherit;
outline:none;
border:none;
padding:.5rem 1rem;
border-radius:5px;
border:2px solid #fff;
background:transparent;
resize:none;
box-shadow:0px 1px 15px rgba(0,0,0,0.06);
color:rgba(34,34,96,0.9);

&::placeholder{
color:rgba(34,34,96,0.4)}
}

.input-control{
input{
width:90%;
}
}

.selects{
display:flex;
justify-content:flex-end;
select{
color:rgba(34,34,96,0.4)
&:focus , &:active{
color:rgba(34,34,96,1)}
}
}

.submit-btn{
button{
box-shadow:0px 1px 15px rgba(0,0,0,.06);
&:hover{
background:var(--color-green) !important}
}
}

`;

