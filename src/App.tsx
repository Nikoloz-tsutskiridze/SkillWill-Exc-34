import React from "react";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const handleItemClick = (label: string) => {
    alert(`Clicked: ${label}`);
  };

  return (
    <div>
      {/* Horizontal Navbar */}
      <Navbar
        layout="horizontal"
        styles={{
          backgroundColor: "#3f51b5",
        }}
        customButtonStyles={{
          color: "#ffffff",
          padding: "8px 16px",
        }}
        items={[
          { label: "Home", onClick: () => handleItemClick("Home") },
          { label: "About", onClick: () => handleItemClick("About") },
          { label: "Contact", onClick: () => handleItemClick("Contact") },
        ]}
      />

      {/* Vertical Navbar */}
      <Navbar
        layout="vertical"
        styles={{
          backgroundColor: "#2e7d32",
        }}
        customButtonStyles={{
          color: "#ffffff",
        }}
        items={[
          { label: "Dashboard", onClick: () => handleItemClick("Dashboard") },
          { label: "Settings", onClick: () => handleItemClick("Settings") },
          { label: "Profile", onClick: () => handleItemClick("Profile") },
        ]}
      />
    </div>
  );
};

export default App;
