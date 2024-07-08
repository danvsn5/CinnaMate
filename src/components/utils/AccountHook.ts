import { useState, useEffect } from 'react';

type globalUserVariables = {
    isLoggedIn: boolean
    username: string
    password: string
};

const useGlobalState = (globalVariable: globalUserVariables) => {
    const [, setState] = useState({});

    useEffect(() => {
        const handler = () => setState({});
        window.addEventListener('globalStateChange', handler);
        return () => window.removeEventListener('globalStateChange', handler);
    }, []);

    return globalVariable;
};

const updateGlobalState = () => {
    const event = new Event('globalStateChange');
    window.dispatchEvent(event);
};

export { useGlobalState, updateGlobalState };
