import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';


export default function Incomes() {
    const { addIncome,getIncomes , incomes , deleteIncome , totalIncome} = useGlobalContext();
    
    useEffect(()=>{
        getIncomes();
    },[])

    return (
        <IncomeStyled>
            <InnerLayout>
                <h2>Incomes</h2>
                <h2 className='total-income'>Total Income: <span>${totalIncome()}</span></h2>
                <div className='income-content'>
                    <div className='form-container'>
                    <Form />
                    </div>
                    <div className='incomes'>
                       {
                        incomes.map((income)=>{
                                const {_id , title , amount , date , category , description} = income;
                                return <IncomeItem 
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount}
                                category={category}
                                iColor="var(--color-green)"
                                date={date}
                                deleteItem = {deleteIncome}
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