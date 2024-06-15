import { useState, useEffect } from 'react';

const useMeowFacts = () => {
    const [meowFacts, setMeowFacts] = useState([]);

    useEffect(() => {
        const fetchMeowFacts = async () => {
            try {
                const response = await fetch('https://meowfacts.herokuapp.com/?count=3');
                const data = await response.json();
                setMeowFacts(data.data);
            } catch (error) {
                console.error('Ошибка при запросе к API:', error);
            }
        };

        fetchMeowFacts();
    }, []);

    return meowFacts;
};

export default useMeowFacts;
