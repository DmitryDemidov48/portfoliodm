import React from "react";
import IframeComponentMultiroom from "../components/game/IframeComponent";
import IframeComponentSpace from "../components/game/IframeComponentSpace";
import IframeComponentsTower from "../components/game/IframeComponentsTower";
import IframeComponentsCave from "../components/game/IframeComponentsCave";


export const EventsOne = () => {
    return (
        <div className="services">
            <IframeComponentSpace/>

        </div>
    );
};
export const EventsTwo = () => {
    return (
        <div className="services">
            <IframeComponentMultiroom/>

        </div>
    );
};

export const EventsThree = () => {
    return (
        <div className="services">
            <IframeComponentsTower/>
        </div>
    );
};

export const EventsFour = () => {
    return (
        <div className="services">
            <IframeComponentsCave/>
        </div>
    );
};
