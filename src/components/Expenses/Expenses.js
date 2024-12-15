import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';


export default function Expenses() {
    const {  getExpenses , totalExpenses , expenses , deleteExpense , addExpense} = useGlobalContext();
    
    useEffect(()=>{
        getExpenses();
    },[])

    return (
        <IncomeStyled>
            <InnerLayout>
                <h2>Expenses</h2>
                <h2 className='total-income'>Total Expenses: <span>${totalExpenses()}</span></h2>
                <div className='income-content'>
                    <div className='form-container'>
                    <ExpenseForm/>
                    </div>
                    <div className='incomes'>
                       {
                        expenses.map((expense)=>{
                                const {_id , title , amount , date , category , description,type} = expense;
                                return <IncomeItem 
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                category={category}
                                iColor="var(--color-green)"
                                date={date}
                                deleteItem = {deleteExpense}
                                type={type}
                                 />
                        })
                       }
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
 display:flex;
 overflow:auto;

 .total-income{
 display:flex;
 justify-content:center;
 align-items:center;
 background:#FCF6F9;
 border:2px solid #FFF;
  box-shadow:2px 2px 12px rgba(0,0,0,.06);
  border-radius:20px;
  padding:1rem;
  margin:1rem 0;
  font-size:2rem;
  gap:.5rem;

  span{
  font-size:2.5rem;
  font-weight:800;
  color:var(--color-green);
  }
 }

 .income-content{
    display:flex;
    gap:2rem;

    .incomes{
    flex:1;

    }
    .form-container{
    box-shadow:2px 2px 12px rgba(0,0,0,.06);
    }
 }
`;
