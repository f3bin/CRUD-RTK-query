import "./Home.scss";
import useHome from "./useHome";

function Home() {
  const {
    isLoading,
    isError,
    isSubmit,
    handleHideUser,
    handleEditUser,
    handleSubmit,
    state,
    setState,
    users,
  } = useHome();

  return (
    <div className="Home">
      {isLoading && <p>Loading..</p>}
      {isError && <p>Error while rendering</p>}
      <h1>Active Users</h1>
      <div className="home-body">
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users
              ?.filter((user) => user.status === "active")
              .map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.birthDate}</td>
                  <td>
                    <button onClick={() => handleEditUser(user)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleHideUser(user)}>Hide</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <form className="input-form" onSubmit={handleSubmit}>
          <h3>Create User</h3>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={state.name}
            onChange={(e) =>
              setState((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <label>Birth Date:</label>
          <input
            type="date"
            value={state.birthDate}
            onChange={(e) =>
              setState((prev) => ({ ...prev, birthDate: e.target.value }))
            }
          />
          <button className={isSubmit ? "create-button" : "update-button"}>
            {isSubmit ? "Create" : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
