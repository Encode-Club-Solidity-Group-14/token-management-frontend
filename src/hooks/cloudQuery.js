import Moralis from "moralis";
import { useEffect, useState } from "react";

Moralis.initialize(process.env.REACT_APP_MORALIS_APPLICATION_ID);
Moralis.serverURL = process.env.REACT_APP_MORALIS_SERVER_URL;

const defaultCloudQueryOptions = {
    params: {},
    postProcess: (r) => r.attributes, 
}

export function useMoralisCloudQuery(methodName, options = defaultCloudQueryOptions){
    const [state, setState] = useState({
        data: null, 
        error: null ,
        loading: false
    }) 
    useEffect(()=>{
        if(methodName){
            setState((v) => ({...v, loading: true}));
            Moralis.Cloud.run(methodName, options.params).then((data)=> {
                if(data){
                    const output = options.postProcess 
                        ? data.map(options.postProcess) 
                        : data;
                    setState({data: output, error: null, loading: false});
                } else{
                    setState({data: null, error: null, loading: false});
                }
            }).catch((error) => {
                console.error(error);
                setState({data: null, error: error, loading: false});
            })
        }
    }, [methodName, options]);

    return state;
}