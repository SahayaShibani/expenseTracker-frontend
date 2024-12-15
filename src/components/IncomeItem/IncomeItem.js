import React from 'react'
import styled from 'styled-components'
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/icons';
import Button from '../Button/Button';
import { dateFormat } from '../../utils/dateFormat';

export default function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    iColor,
    type
}) {

    const categoryIcon = () => {
        
        switch (category) {
            case 'salary':
                return money;
            case 'freelance':
                return freelance;
            case 'investments':
                return stocks;
            case 'users':
                return users;
            case 'bitcoins':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return '';
        }
    }

    const expenseCatIcon = () => {
      
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaway':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return '';
        }
    }



    return (
        <IncomeItemStyled indicator={iColor}>
            <div className="icon">
             {
                type === 'expense' ? expenseCatIcon(): categoryIcon()
             }
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className='inner-content'>
                    <p>{dollar} {amount}</p>
                    <p>{calender}  {dateFormat(date)}</p>
                    <p>{comment} {description}</p>
                </div>

            </div>
            <div className="btn-icon">
                <Button name={""} icon={trash} bPad={'1rem'} bRad={"50%"} bg={'var(--primary-color)'} color={"#fff"} hColor={"var(--color-green"} iColor={"#fff"} onClick={()=>{
                    console.log('====================================');
                    console.log(id);
                    console.log('====================================');
                    deleteItem(id)}}/>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background:#FCF6F9;
    border:2px solid #FFF;
    box-shadow:0px 1px 15px rgba(0,0,0,.06);
    border-radius:20px;
    padding:1rem;
    margin-bottom:1rem;
    display:flex;
    align-items:center;
    gap:1rem;
    width:95%;
    color:#222260;
    .icon{
    width:80px;
    height:80px;
    border-radius:20px;
    background:#F5F5F5;
    display:flex;
    align-items:center;
    justify-content:center;
    border:2px solid #FFFFFF;
    i{
    font-size:2.6rem;
    }
    }
    .content{
    flex:1;
    display:flex;
    flex-direction:column;
    gap:.2rem;
    h5{
       font-size:1.3rem;
       padding-left:2rem;
       position:relative;
       &::before{
       content:'';
       position:absolute;
       left:0;
       top:50%;
       transform:translateY(-50%);
       width:.8rem;
       height:.8rem;
       border-radius:50%;
       background:${props => props.indicator};
       }
    }
       .inner-content{
       display:flex;
       align-item:center;
       gap:1.5rem;
       p{
       display:flex;
       align-items:center;
       gap:0.5rem;
       color:var(--primary-color);
       opacity:0.8;
       }
       }
    }

`;