import { useEffect, useState } from "react";

function useComponentDidMount() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted;
}

export default useComponentDidMount;
