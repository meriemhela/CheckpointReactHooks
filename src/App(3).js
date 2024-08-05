import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(timerID);
  }, []); // Le tableau vide signifie que l'effet s'exécute une seule fois au montage

  return (
    <div>
      <h1>Current Time: {time}</h1>
    </div>
  );
};

export default Clock;
