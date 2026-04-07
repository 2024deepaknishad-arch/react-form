import React, { useState } from "react";

function FormComponent() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
      setError("All fields are required!");
      setOutput("");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter a valid email!");
      setOutput("");
      return;
    }

    setError("");
    setOutput(`Name: ${name} | Email: ${email}`);
  };

  return (
    <div>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <p style={{color:"red"}}>{error}</p>
      <p>{output}</p>
    </div>
  );
}

export default FormComponent;