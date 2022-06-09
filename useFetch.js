import { useEffect, useState, useRef } from "react";

const useFecth = url => {
    const isMounted = useRef(true);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {

        setState({ data: null, loading: true, error: null });
        /* console.log(url) */
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if( isMounted ){
            
                    setState({ data, loading: false, error: null });
                }
            })
            .catch(error => {
                setState({ data: null, loading: false, error });
            });
    }, [url]);

    return state;
}
 
export default useFecth;