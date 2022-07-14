import React from "react";
import Die from "./components/Die";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";

export default function App() {
  return (
    <div>
      <Die />
      <Footer
        columns={[
          {
            title: "🤠 TENZIES APP 🤠",
          },
        ]}
        bottom="Made with ❤️ by ALA EDDINE BENNA"
      />
      ,
    </div>
  );
}
