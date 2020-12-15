import React, {useState} from "react";

import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import styled from '@emotion/styled';
import { PlayerStats  } from "./PlayerStats";

const Input = styled.input`
padding: 15px;
margin: 15px;
background-color: white;
font-size: 17px;
border: 2px solid grey;
border-radius: 10px;
color:#525c61;
width: 60%;
`
const Button = styled.button`
padding: 15px;
margin: 15px;
background-color: white;
font-size: 17px;
border: 2px solid grey;
border-radius: 10px;
color:#525c61;
`


const fetchUsername = async (key) => {
  if(key!==""){
  const response = await fetch(`http://localhost:5000/ritoapi/${key}`);
  return response.json();}
};

export const Search = () => {
  const [username, setUsername] = useState("");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const { data, status } = useQuery(input, fetchUsername);



  function onSubmit(e) {
    e.preventDefault();
    setInput(username);   
  }

  
if (data && data.length > 0) {
  const summoner = data[0].summonerName;

  if (!history.includes(summoner)) {
    if (history.length < 10) {
      setHistory([...history, summoner]);
    } else {
      history.splice(0, 1);
      setHistory([...history, summoner]);
    }
  }

  localStorage.setItem("array", history);
} else {
}



  return (
    
    <div>
      <div>
        <form onSubmit={onSubmit}>
          
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your summoner name"
          />
          <Button type="submit">Search</Button>
        </form>
      </div>
      <ReactQueryDevtools initialIsOpen />
      
  {input===""? <div></div> : 
     
      <div>
        <h2>{input}</h2>
        

        {status === "loading" ? (
          <div>loading</div>
        ) : status === "error" ? (
          <div>error</div>
        ) : status === "success" && data.length<1 ? (
          <div>unranked</div>
        ) : status === "success" &&  data.status  ? (
          <div>not found</div>
        ) : (
          
           <div>
             {data.map(stats=>
                        <div key={stats.leagueId}>  
                          <PlayerStats stats={stats}                                   />
                        </div>
            )}</div> 
          
        )}
      </div>}
    </div>
    
  );
};





