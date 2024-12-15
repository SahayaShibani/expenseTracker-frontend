import styled from "styled-components";
import bg from './img/bg.jpg';
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Expenses from "./components/Expenses/Expenses";
import Incomes from "./components/Incomes/Incomes";
import { useGlobalContext } from "./context/globalContext";

function App() {
  const [active, setActive] = useState(1);

 const global = useGlobalContext();

 console.log(global);
 

  const displaydata =() =>{
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
         return <Dashboard/>
      case 3:
        return <Incomes/>
      case 4:
         return <Expenses/>
      default:
         return <Dashboard/>
    }
  }
const orbMemo = useMemo(()=>{
    return <Orb/>
},[]);



  return (
    <AppStyled bg={bg} className="App">
      {
        orbMemo
      }
      <Orb />
      <MainLayout>
        <Navigation
         active={active}  setActive= {setActive}/>
        <main>
          {displaydata()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
height:100vh;
background-image:url(${props => props.bg});
position:relative;
main{
flex:1;
background:rgba(252 , 246,249,0.78);
border:3px solid blur(4.5px);
border-radius:32px; 
overflow-x:hidden;
&::-webkit-scrollbar{
width:0;
}
}
`;

export default App;
