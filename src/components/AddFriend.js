import React from "react";

const AddFriend = () => {
  return (
    <div>
      <h2>AddFriend</h2>
      <form>
        <div>
          <label>Username:</label>
          <input id="username" />
        </div>
        <div>
          <label>Age:</label>
          <input id="age" />
        </div>
        <div>
          <label>Email:</label>
          <input id="email" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddFriend;
