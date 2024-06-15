
import React from 'react';
import useMeowFacts from "./useMeowFacts/useMeowFacts";

const App = () => {
    const meowFacts = useMeowFacts();

    return (
        <div>
            {meowFacts.map((fact, index) => (
                <p key={index}>{fact}</p>
            ))}
        </div>
    );
};

export default App;
