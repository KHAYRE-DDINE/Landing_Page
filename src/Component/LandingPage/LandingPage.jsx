import React, { useContext, useState } from "react";

import "./LandingPage.css";

import { LanguageContext } from "../../App";
import EnglishLanding from "./EnglishLanding";
import ArabicLanding from "./ArabicLanding";

function LandingPage() {
  const language = useContext(LanguageContext);
  const [active, setActive] = useState(`${language === "english" ? "student" : "الطالب"}`);

  console.log(active)
  
  return (
    <React.Fragment>
      {language === "english" ? (
        <EnglishLanding active={active} setActive={setActive} />
      ) : (
        <ArabicLanding active={active} setActive={setActive} />
      )}
    </React.Fragment>
  );
}

export default LandingPage;
