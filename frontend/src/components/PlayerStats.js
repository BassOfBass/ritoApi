
import React from 'react';

export const PlayerStats  = ({stats}) => {
  
    const winrate =(w,l) => {
       const wr =  (parseInt(w,10)/(parseInt(l,10)+parseInt(w,10)))*100
        console.log(w,l)
       return Math.round(wr)
    }
  

    return (
        <div>
        <div>{`Ranked ${stats.queueType.split('_')[1].toLocaleLowerCase()}`}</div>
        <div>{stats.tier.toLocaleLowerCase()[0].toUpperCase()+stats.tier.toLocaleLowerCase().substring(1)+" "+stats.rank}</div> 
        <div>{`${stats.leaguePoints} LP / W: ${stats.wins} L: ${stats.losses} WR: ${winrate(stats.wins,stats.losses)}%`}</div>
        <br></br>
        </div>
      )
}

 

 