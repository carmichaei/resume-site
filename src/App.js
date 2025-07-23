import React from "react";

export default function App() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f6f8",
      }}
    >
      <img
        src="/resume_base.png"
        alt="Connor Carmichael Resume"
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
      />
    </div>
  );
}
