import React from "react";
import "./NonActive.scss";

import useNonActive from "./useNonActive";

const NonActive = () => {
 const {handleDelete,users,isLoading,isError} =useNonActive();
  return (
    <div className="non-active-container">
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Error fetching data</h3>}
      <h1>Non Active Users</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Birth date</th>
          <th>Delete</th>
        </tr>
        {users
          ?.filter((user) => user.status === "non-active")
          .map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.birthDate}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default NonActive;
