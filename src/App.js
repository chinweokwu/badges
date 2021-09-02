/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "./action";
import data from "./data.json";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const App = () => {
  const { usersData, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(data));
  }, []);

  return (
    <>
      {isLoading && <div className="loading">Data loading...</div>}
      {usersData.map((user) => {
        return (
          <div key={user.id} className="container">
            <div className="content">
              <h1>{user.name}</h1>
              <span>{user.email}</span>
              <h3>{user.post}</h3>
              Votes: {user.votes}
              {user.votes >= 5 ? (
                <div>
                  <FontAwesomeIcon icon={["fab", "jedi-order"]} size="3x" />
                </div>
              ) : (
                <p>Get up to five votes to have a badge</p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default App;
