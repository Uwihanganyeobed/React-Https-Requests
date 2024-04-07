// Importing necessary components and functions from external libraries and files
import { Button, EditableText } from "@blueprintjs/core"; // Importing Button and EditableText components from BlueprintJS
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import "./App.css"; // Importing styles for the component

// Creating a functional component called DEVGET
function DEVGET() {
  // Declaring state variable users and function setUsers using useState hook
  const [users, setUsers] = useState([]);

  // Using useEffect hook to fetch data from an API when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Fetching data from a JSONPlaceholder API
      .then((response) => response.json()) // Parsing the response as JSON
      .then((json) => setUsers(json)); // Updating the users state with the fetched data
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Rendering JSX elements
  return (
    <div className="App">
      {" "}
      {/* Container div with class name App */}
      <table className="bp4-html-table .modifier">
        {" "}
        {/* Table with BlueprintJS and custom styles */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping over the users array to render table rows */}
          {users.map((user) => (
            <tr key={user.id}>
              {" "}
              {/* Each row has a unique key based on user's id */}
              <td>{user.id}</td> {/* Displaying user's id */}
              <td>{user.name}</td> {/* Displaying user's name */}
              <td>
                <EditableText value={user.email} />{" "}
                {/* EditableText component to display and edit user's email */}
              </td>
              <td>
                <EditableText value={user.website} />{" "}
                {/* EditableText component to display and edit user's website */}
              </td>
              <td>
                <Button intent="primary">Update</Button>{" "}
                {/* Button to update user information */}
                &nbsp; {/* Non-breaking space */}
                <Button intent="danger">Delete</Button>{" "}
                {/* Button to delete user */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DEVGET; // Exporting the DEVGET component as default
