import React, { useState } from "react";
import WhatOurUsersSayContext from "./WhatOurUsersSayContext";

const WhatOurUsersSayContextProvider = ({ children }) => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      rating: 4,
      author: "Tolu",
      review:
        "It really saves me time and effort. Diet consultancy is exactly what my wife and i have been laccking. It's the perfect solution for our health routine",
      date: "JAN 2022",
    },
    {
      id: 2,
      rating: 5,
      author: "Mike",
      review:
        "It really saves me time and effort. Diet consultancy is exactly what my wife and i have been laccking. It's the perfect solution for our health routine",
      date: "FEB 2022",
    },
    {
      id: 3,
      rating: 3,
      author: "Dave",
      review:
        "It really saves me time and effort. Diet consultancy is exactly what my wife and i have been laccking. It's the perfect solution for our health routine",
      date: "MARCH 2022",
    },
  ]);
  return (
    <WhatOurUsersSayContext.Provider value={{ reviews }}>
      {children}
    </WhatOurUsersSayContext.Provider>
  );
};

export default WhatOurUsersSayContextProvider;
