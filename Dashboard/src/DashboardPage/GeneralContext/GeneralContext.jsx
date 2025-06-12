import React, { Fragment } from "react";
import { useState } from "react";

import BuyPopup from "../BuyPopup/Buypopup";
import Sellpopup from "../SellPopup/Sellpopup";

export const GeneralContext = React.createContext({
    openBuyWindow: (uid) => { },
    closeBuyWindow: () => { },
    openSellWindow: (uid) => { },
    closeSellWindow: () => { },
});

const GeneralContextProvider = (props) => {
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
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
    const handleOpenSellWindow = (uid) => {
        console.log("Clicked2", uid);
        setIsSellWindowOpen(true);
        setselectedStockUid(uid);
    }
    const handleCloseSellWindow = () => {
        console.log("HI by")
        setIsSellWindowOpen(false);
        setselectedStockUid("");
    }
    return (
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow,
                openSellWindow: handleOpenSellWindow,
                closeSellWindow: handleCloseSellWindow,
            }}
        >
            <Fragment>
                {props.children}
                {isSellWindowOpen && <Sellpopup uid={selectedStockUid} />}
                {isBuyWindowOpen && <BuyPopup uid={selectedStockUid} />}
            </Fragment>
        </GeneralContext.Provider>
    );
}
export default GeneralContextProvider;