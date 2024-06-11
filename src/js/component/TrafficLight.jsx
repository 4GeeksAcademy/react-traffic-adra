import React, { useState, useEffect } from "react";

const TrafficLight = () => {
    const [selectedLight, setSelectedLight] = useState("");
    const [active, setActive] = useState(false);

    const handleLightClick = (color) => {
        setSelectedLight(color);
    };

    useEffect(() => {
        if (active) {
            const interval = setInterval(() => {
                if (selectedLight == "") {
                    setSelectedLight("red");
                } else if (selectedLight == "red") {
                    setSelectedLight("yellow");
                } else if (selectedLight == "yellow") {
                    setSelectedLight("green");
                } else if (selectedLight == "green") {
                    setSelectedLight("red");
                }
            }, 3000);
            return () => clearInterval(interval);
        }
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
            </div>
            <button onClick={() => setActive(!active)} className="btn btn-dark">
                Automatic
            </button>
        </main>
    );
};

export default TrafficLight;
