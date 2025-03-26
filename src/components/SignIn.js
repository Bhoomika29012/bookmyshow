import React from "react";

const SignIn = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Sign In</h2>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
        <input type="email" placeholder="Email" required style={{ padding: "10px", width: "250px" }} />
        <input type="password" placeholder="Password" required style={{ padding: "10px", width: "250px" }} />
        <button
          type="submit"
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
