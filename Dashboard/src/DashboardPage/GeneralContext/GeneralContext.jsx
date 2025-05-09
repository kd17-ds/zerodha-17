import React, { Fragment } from "react";
import { useState } from "react";

import BuyPopup from "../BuyPopup/Buypopup";

export const GeneralContext = React.createContext({
    openBuyWindow: (uid) => { },
    closeBuyWindow: () => { },
});

const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUid, setselectedStockUid] = useState("");

    const handleOpenBuyWindow = (uid) => {
        console.log("Clicked2", uid);
        setIsBuyWindowOpen(true);
        setselectedStockUid(uid);
    }
    const handleCloseBuyWindow = () => {
        console.log("HI")
        setIsBuyWindowOpen(false);
        setselectedStockUid("");
    }
    return (
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow,
            }}
        >
            <Fragment>
                {props.children}
                {isBuyWindowOpen && <BuyPopup uid={selectedStockUid} />}
            </Fragment>
        </GeneralContext.Provider>
    );
}
export default GeneralContextProvider;