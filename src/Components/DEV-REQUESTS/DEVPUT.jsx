// Importing necessary styles, components, and functions from external libraries and files
import "./App.css"; // Importing styles for the component
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import {
  Button,
  EditableText,
  InputGroup,
  Toaster,
  Position,
} from "@blueprintjs/core"; // Importing necessary components from BlueprintJS library

// Creating a toaster instance for showing notifications
const AppToaster = Toaster.create({
  position: Position.TOP_RIGHT, // Setting position of toaster notifications
});

// Creating a functional component called DEVPUT
function DEVPUT() {
  // Declaring state variables using useState hook
  const [users, setUsers] = useState([]); // State variable to store user data
  const [newName, setNewName] = useState(""); // State variable to store new user's name
  const [newEmail, setNewEmail] = useState(""); // State variable to store new user's email
  const [newWebsite, setNewWebsite] = useState(""); // State variable to store new user's website

  // useEffect hook to fetch data from an API when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Fetching data from a JSONPlaceholder API
      .then(response => response.json()) // Parsing the response as JSON
      .then(json => setUsers(json)); // Updating the users state with the fetched data
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Function to add a new user
  const addUser = () => {
    const name = newName.trim(); // Removing leading and trailing whitespace from name
    const email = newEmail.trim(); // Removing leading and trailing whitespace from email
    const website = newWebsite.trim(); // Removing leading and trailing whitespace from website
    if (name && email && website) { // Checking if name, email, and website are not empty
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST", // Setting HTTP method to POST
        body: JSON.stringify({ // Converting data to JSON string
          name,
          email,
          website,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Setting request headers
        },
      })
        .then(response => response.json()) // Parsing the response as JSON
        .then(data => {
          setUsers([...users, data]); // Adding the new user to the users state
          setNewName(""); // Resetting new user's name input
          setNewEmail(""); // Resetting new user's email input
          setNewWebsite(""); // Resetting new user's website input
          AppToaster.show({ // Showing notification for successful user addition
            message: "User added successfully",
            intent: "success",
            timeout: 3000, // Setting notification timeout
          });
        });
    }
  };

  // Function to update a user's information
  const updateUser = id => {
    const user = users.find(user => user.id === id); // Finding the user object with the specified id

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT", // Setting HTTP method to PUT
      body: JSON.stringify(user), // Sending the user object as the request body
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Setting request headers
      },
    })
      .then(response => response.json()) // Parsing the response as JSON
      .then(() => {
        AppToaster.show({ // Showing notification for successful user update
          message: "User updated successfully",
          intent: "success",
          timeout: 3000, // Setting notification timeout
        });
      });
  };

  // Function to handle changes in user's email or website
  const onChangeHandler = (id, key, value) => {
    setUsers(values => {
      return values.map(item =>
        item.id === id ? { ...item, [key]: value } : item
      );
    });
  };

  // Rendering JSX elements
  return (
    <div className="App"> {/* Container div with class name App */}
      <table className="bp4-html-table .modifier"> {/* Table with BlueprintJS and custom styles */}
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
          {users.map(user => (
            <tr key={user.id}> {/* Each row has a unique key based on user's id */}
              <td>{user.id}</td> {/* Displaying user's id */}
              <td>{user.name}</td> {/* Displaying user's name */}
              <td>
                <EditableText
                  value={user.email}
                  onChange={value => onChangeHandler(user.id, "email", value)}
                />
              </td>
              <td>
                <EditableText
                  value={user.website}
                  onChange={value => onChangeHandler(user.id, "website", value)}
                />
              </td>
              <td>
                <Button intent="primary" onClick={() => updateUser(user.id)}>
                  Update
                </Button>
                &nbsp;
                <Button intent="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <InputGroup
                value={newName}
                onChange={e => setNewName(e.target.value)}
                placeholder="Add name here..."
              />
            </td>
            <td>
              <InputGroup
                placeholder="Add email here..."
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
              />
            </td>
            <td>
              <InputGroup
                placeholder="Add website here..."
                value={newWebsite}
                onChange={e => setNewWebsite(e.target.value)}
              />
            </td>
            <td>
              <Button intent="success" onClick={addUser}>
                Add user
              </Button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default DEVPUT; // Exporting the DEVPUT component as default
