import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Preloader = () => {
    var [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (percentage < 100) {
                setPercentage((prevPercentage) => prevPercentage + 1);
            }
        }, 10);

        return () => clearInterval(interval);
    }, [percentage]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100%",
                overflow: "hidden"
            }}
        >
            <Heading fontSize={['6rem', '10rem', '15rem', '20rem']} >{percentage}%</Heading>
        </motion.div >
    );
};

// For adding preloader branch