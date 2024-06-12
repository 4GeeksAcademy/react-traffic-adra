import React, { useState, useEffect } from "react";

const TrafficLight = () => {
    const [selectedLight, setSelectedLight] = useState("");
    const [active, setActive] = useState(false);
    const [purple, setPurple] = useState(false);

    const handleLightClick = (color) => {
        setSelectedLight(color);
    };

    useEffect(() => {
        let interval;
        if (active) {
            interval = setInterval(() => {
                if (selectedLight == "") {
                    setSelectedLight("red");
                } else if (selectedLight == "red") {
                    setSelectedLight("yellow");
                } else if (selectedLight == "yellow") {
                    setSelectedLight("green");
                } else if (selectedLight == "green") {
                    setSelectedLight("purple");
                } else if (selectedLight == "purple") {
                    setSelectedLight("red");
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [active, selectedLight]);

    return (
        <main>
            <div className="stick"></div>
            <div className="traffic-light">
                <div
                    className={`red ${selectedLight == "red" ? "light" : ""}`}
                    onClick={() => handleLightClick("red")}
                ></div>
                <div
                    className={`yellow ${
                        selectedLight == "yellow" ? "light" : ""
                    }`}
                    onClick={() => handleLightClick("yellow")}
                ></div>
                <div
                    className={`green ${
                        selectedLight == "green" ? "light" : ""
                    }`}
                    onClick={() => handleLightClick("green")}
                ></div>
                {purple ? (
                    <div
                        className={`purple ${
                            selectedLight == "purple" ? "light" : ""
                        }`}
                        onClick={() => handleLightClick("purple")}
                    ></div>
                ) : null}
                {/* {purple ? <div className="purple" /> : null} */}
            </div>
            <button
                onClick={() => setActive((prev) => !prev)}
                className="btn btn-dark"
            >
                Automatic
            </button>
            <button
                onClick={() => setPurple((prev) => !prev)}
                className="btn btn-dark"
            >
                {purple ? "Remove Purple" : "Add Purple"}
            </button>
        </main>
    );
};

export default TrafficLight;
