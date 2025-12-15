"use client";

import { useEffect, useState } from "react";
import { SwissGridBackground } from "./SwissGridBackground";

export default function ClientSwissGridBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Don't render anything on server or during initial client render
    if (!mounted) {
        return null;
    }

    return <SwissGridBackground />;
}
