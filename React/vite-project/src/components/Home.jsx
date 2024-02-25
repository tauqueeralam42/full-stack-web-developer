import React from 'react';

const Home = ({ users }) => {
  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <h3>{user.name}</h3>
              <p>Age: {user.age}</p>
              <p>Email: {user.email}</p>
              <p>Address: {user.address}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No user data available. Please submit the form.</p>
      )}
    </div>
  );
};

export default Home;
