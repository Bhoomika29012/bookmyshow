import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 BookMyShow-2.0. All Rights Reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    position: "relative",
    bottom: "0",
    width: "100%",
  },
};

export default Footer;
