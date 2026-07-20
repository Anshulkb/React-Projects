import { createContext, useEffect, useState } from "react";
import featureFlagsService from "../data";


export const FeatureContext = createContext(null);

export default function FeatureContextGlobalState({ children }) {
    const [loading, setLoading] = useState(false);
    const [enableFlags, setEnableFlags] = useState({});

    async function fetchFeatureFlags() {
        try {
            setLoading(true);
            const response = await featureFlagsService();
            // const data = await response.json();
            console.log(response);
            // if (data)
            setEnableFlags(response);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchFeatureFlags();
    }, []);
    return <FeatureContext.Provider value={{ loading, enableFlags }}>{children}</FeatureContext.Provider>
}

