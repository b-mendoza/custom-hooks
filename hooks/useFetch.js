import { useState, useEffect, useRef } from 'react';

const useFetch = url => {
    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => () => (isMounted.current = false), []);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(
                data =>
                    isMounted.current &&
                    setState(s => ({ ...s, data, loading: false }))
            )
            .catch(() =>
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo completar la petición',
                })
            );

        return () => setState(s => ({ ...s, loading: true }));
    }, [url]);

    return state;
};

export default useFetch;
