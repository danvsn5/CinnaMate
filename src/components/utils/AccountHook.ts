import { useState, useEffect } from 'react';

const useGlobalState = (globalVariable: any) => {
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
