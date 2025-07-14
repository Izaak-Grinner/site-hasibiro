import { useState, type CSSProperties } from "react";

function Settings() {
  const [DTstate, setDTstate] = useState<string>("童貞");

  const handleDT = () => {
    setDTstate((prevState) => (prevState === "童貞" ? "非童貞" : "童貞"));
  };

  // --- スタイル定義 ---
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "2rem auto",
    maxWidth: "400px",
  };

  const titleStyle: CSSProperties = {
    color: "#333",
    marginBottom: "1.5rem",
  };

  const statusStyle: CSSProperties = {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    color: "#555",
  };

  const emphasisStyle: CSSProperties = {
    color: "#d9534f",
    fontWeight: 600,
  };

  const buttonStyle: CSSProperties = {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "white",
    backgroundColor: "#5c6bc0",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>設定ページ</h1>
      <p style={statusStyle}>
        あなたは<b style={emphasisStyle}>{DTstate}</b>です
      </p>
      <button onClick={handleDT} style={buttonStyle}>
        貞操状態変更
      </button>
    </div>
  );
}

export default Settings;