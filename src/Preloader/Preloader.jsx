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
        }, 5);

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
                width: "100%"
            }}
        >
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    position: "relative",
                    border: "5px solid"
                }}
            >
                <h1
                    style={{
                        position: "absolute",
                        bottom: "0",
                        margin: "0",
                        left: "10px",
                        fontSize: "3rem",
                        fontWeight: "bold"
                    }}
                >
                    Pr
                </h1>
                <h3
                    style={{
                        position: "absolute",
                        top: "10px",
                        margin: "0",
                        right: "10px",
                        fontWeight: "bold"
                    }}
                >
                    21
                </h3>
            </div>
            <Heading fontSize={'4rem'} marginTop={'20px'}>{percentage}%</Heading>
        </motion.div >
    );
};
