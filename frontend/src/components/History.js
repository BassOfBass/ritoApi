import React from "react";

import { useQuery } from "react-query";
import { PlayerStats } from "./PlayerStats";

function getUsernames() {
  let names = localStorage.getItem("array").split(",");

  let requests = names.map((name) =>
    fetch(`http://localhost:5000/ritoapi/${name}`)
  );
  return Promise.all(requests)
    .then((responses) => {
      return responses;
    })
    .then((responses) =>
      Promise.all(
        responses.map((r) => {
          return r.json();
        })
      )
    )
    .then((data) => data);
}

export function History() {
  const { data, isLoading } = useQuery("emptyQuery", getUsernames);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div>
      {localStorage.getItem("array").length<1 ? (
        <div>form is null</div>
      ) : (
        <div>
          {
            <div>
              {data.map((data) =>
                data.length < 2 ? (
                  <div key={data.leagueId}>
                    <h2>{data[0].summonerName}</h2>

                    <PlayerStats stats={data[0]} />
                  </div>
                ) : (
                  <div key={data.leagueId}>
                    <h2>{data[0].summonerName}</h2>
                    <PlayerStats stats={data[0]} />
                    <PlayerStats stats={data[1]} />
                  </div>
                )
              )}
            </div>
          }
        </div>
      )}
    </div>
  );
}
