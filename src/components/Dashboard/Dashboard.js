import React, { useEffect } from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../chart/Chart';
import { dollar } from '../../utils/icons';
import { useGlobalContext } from '../../context/globalContext';
import History from '../History/History';

export default function Dashboard() {
  const { totalExpenses, totalIncome ,incomes,expenses , getIncomes , getExpenses} = useGlobalContext();

  useEffect(()=>{
    getExpenses();
    getIncomes();
  },[])

  return (
    <DashboardStyles>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className='stats-con'>
          <div className='chart-con'>
            <Chart />
            <div className='amount-con'>
              <div className='income'>
                <h2>Total income</h2>
                <p>{dollar} {totalIncome()}</p>
              </div>
              <div className='expense'>
                <h2>Total expense</h2>
                <p>{dollar} {totalExpenses()}</p>
              </div>
              <div className='balance'>
                <h2>Total Balance : </h2>
                <p>{dollar} {totalIncome() - totalExpenses()}</p>
              </div>
            </div>
          </div>
          <div className='history-con'>
            <History />
            <h2 className='salary-title'>Min <span>Salary</span>Max</h2>
            <div className='salary-item'>
              <p>
                {
                    Math.min(...incomes.map((item)=>{return item.amount})) =="Infinity" ? 0 : Math.min(...incomes.map((item)=>{return item.amount}))
                }
              </p>

              <p>
                {
                    Math.max(...incomes.map((item)=>{return item.amount})) == '-Infinity' ? 0 : Math.max(...incomes.map((item)=>{return item.amount}))
                }
              </p>
            </div>

            <h2 className='salary-title'>Min <span>Expense</span> Max</h2>
            <div className='salary-item'>
              <p>
                {
                 
                 Math.min(...expenses.map((item)=>{return item.amount})) =="Infinity" ? 0 : Math.min(...expenses.map((item)=>{return item.amount}))  
                }
              </p>

              <p>
                {
                 Math.max(...expenses.map((item)=>{return item.amount})) == '-Infinity'? 0 : Math.max(...expenses.map((item)=>{return item.amount}))
                  
                    
                }
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyles>
  )
}

const DashboardStyles = styled.div`
.stats-con{
display:grid;
grid-template-columns:repeat(5,1fr);
gap:2rem;

   .chart-con{
grid-column:1/4;
height:400px;

.amount-con{
 display:grid;
 grid-template-columns:repeat(4,1fr);
 gap:2rem;
 margin-top:2rem;

 .income , .expense{
 grid-column:span 2;
 }
 .income , .expense , .balance{
 background:#FCF6F9;
 border:2px solid #fff;
 box-shadwo:0px 1px 15px rgba(0,0,0,.06);
 border-radius:20px;
 padding:1rem;
 p{
 font-size:2.5rem;
 font-weight:700;
 }
 }
 .balance{
 grid-column:2/4;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;

 p{
 color:var(--color-green);
 opacity:0.6;
 font-size:3.5rem;
 }
 }
}
}
.history-con{
margin-right:20px;
padding-right:30px;
grid-column:4/-1;
h2{
margin :1rem 0;
display:flex;
align-item:center;
justify-content:space-between;
}
.salary-title{
font-size:1rem;
span{
font-size:1.4rem;
}
}
.salary-item{
background:$FCF6F9;
border:2px solid #FFFFFF;
box-shadow:0px 1px 15px rgbs(0,0,0,.06);
padding:1rem;
border-radius:20px;
display:flex;
justify-content:space-between;
align-items:center;
p{
font-weight:600;
font-size:1.2rem;
}
}
}
}
`;
