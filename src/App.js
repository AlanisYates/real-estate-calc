import React from "react";
import MaterialLayout from "./Components/Layout/MaterialLayout";
import PropertyList from "./Components/PropertyList/PropertyList";
import PropertyPage from "./Components/PropertyPage";

function App() {
  return (
    <div>
      <MaterialLayout>
        {/* <PropertyList /> */}
        <PropertyPage />
      </MaterialLayout>
    </div>
  );
}

export default App;
