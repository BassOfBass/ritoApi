
import React from 'react';

import styled from '@emotion/styled'

const Button = styled.button`
padding: 14px;
margin: 10px;
background-color: white;
font-size: 17px;
border-radius: 10px;
color:#525c61;
border: none;

` 

const Nav = styled.nav`
padding: 20px;
background-color: #03a1fc;
font-size: 24px;
color:black;

display: flex;
justify-content: flex-end;


` 


export const Navbar = ({setPage}) => {
 
    return (
      <Nav>
        <Button onClick={()=>setPage('Home')}>Home</Button>
        <Button onClick={()=>setPage('History')}>History</Button>       
     </Nav>

      );
}
 
