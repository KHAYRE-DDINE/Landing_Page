import { createContext, useState } from 'react';
import LandingPage from './Component/LandingPage/LandingPage';



export const LanguageContext = createContext(0)
export const setLanguageContext = createContext(0)

function App() {
  const [platformLanguage, setPlatformLanguage] = useState("english")

  return (
    <div className="App">
      <LanguageContext.Provider value={platformLanguage}>
        <setLanguageContext.Provider value={setPlatformLanguage}>
          <LandingPage />
        </setLanguageContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
