import { Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Preloader = () => {
    var [percentage, setPercentage] = useState(0);
    var bg = useColorModeValue("wheat", "#1A202C");
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
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100%",
                overflow: "hidden",
                position: "relative",
                zIndex: "2",
                background: bg
            }}
        >
            <Heading fontSize={['8rem', '10rem', '15rem', '20rem']} >{percentage}%</Heading>
        </motion.div >
    );
};

// For adding preloader branch