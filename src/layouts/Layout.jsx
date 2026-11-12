import { useState } from "react";

import "./Layout.scss";

export default function Layout({ children }) {

  const [isLightTheme, setIsLightTheme] = useState('light');

  return (
    <div className="entity-layout" data-theme={isLightTheme ? "light" : "dark"}>
      
      <header className="entity-header">
        <div>
          CF
        </div>
        <nav>
          <a href="#1">Link 1</a>
          <a href="#2">Link 2</a>
          <a href="#3">Link 3</a>
        </nav>
      </header>

      <main className="entity-main">
        {children}
      </main>

      <footer className="entity-footer">
        Footer
      </footer>
    </div>
  );
}