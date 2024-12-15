import { createContext, useContext, useState } from "react";

const BaseUrl = "https://expensetracker-backend-uvxs.onrender.com/api";


const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    // incomes

    const addIncome = async (income) => {
        try {
            const response = await fetch(`${BaseUrl}/add-income`, {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(income)
            })
            const data = await response.json();
            getIncomes()
            console.log(data);

            if(data.error){
                setError(data.message)
            }

        }
        catch (err) {
            setError(err.message);
            console.log("error ",error);
            
            console.log(err);

        }
    }

    const getIncomes = async () => {
        try {
            
            const response = await fetch(`${BaseUrl}/get-incomes`)
            const data = await response.json();
            setIncomes(data)
            console.log(data);

        }
        catch (err) {
           
            
            
            console.log(err);

        }
    }

    const deleteIncome = async (id) => {
        const res = await fetch(`${BaseUrl}/delete-income/${id}`, {
            method: "delete"
        })
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
      
        incomes.forEach(income => {
            totalIncome += income.amount;
        })
        return totalIncome;
    }

     // incomes
    
     const addExpense = async (income) => {
        try {
            const response = await fetch(`${BaseUrl}/add-expense`, {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(income)
            })
            const data = await response.json();
            getExpenses()
            console.log("Error ",data.error);

            if(data.error){
                setError(data.message);
            }

        }
        catch (err) {
            setError(err.message)
            console.log(err);

        }
    }

    const getExpenses = async () => {
        try {
            const response = await fetch(`${BaseUrl}/get-expenses`)
            const data = await response.json();
            setExpenses(data)
            console.log(data);
        }
        catch (err) {
            console.log(err);

        }
    }

    const deleteExpense = async (id) => {
        const res = await fetch(`${BaseUrl}/delete-expense/${id}`, {
            method: "delete"
        })
        getExpenses();
    }

    const totalExpenses = () => {
        let totalExpense = 0;
       
        expenses.forEach(expense => {
            totalExpense += expense.amount;
        })
        console.log('====================================');
        console.log("Total Expense",totalExpense);
        console.log('====================================');
        return totalExpense;
    }

    const transactionHistory= () =>{
        const history = [...incomes , ...expenses];
         history.sort((a,b)=>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })
        return history.slice(0,3);
    }




    return (
        <GlobalContext.Provider value={{ addIncome, getIncomes, incomes, deleteIncome, totalIncome ,addExpense,getExpenses,deleteExpense,totalExpenses , expenses , transactionHistory , error , setError}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}