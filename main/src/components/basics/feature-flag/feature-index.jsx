import TicTacToe from "../../applications/tic-tac-toe"
import QrCodeGenerator from "../qr-generator"
import ThemeChanger from "../theme-changer";
import TabContainer from "../tab-container/index";
import { useContext } from "react";
import { FeatureContext } from "./context/feature-flag";

export default function FeatureFlags() {

    const { loading, enableFlags } = useContext(FeatureContext);
    const componentToRender = [
        {
            key: "toggleMode",
            component: <ThemeChanger></ThemeChanger>
        },
        {
            key: "ticTacToe",
            component: <TicTacToe></TicTacToe>
        },
        {
            key: "qrGenerator",
            component: <QrCodeGenerator></QrCodeGenerator>
        },
        {
            key: "tabContainer",
            component: <TabContainer />
        }
    ]

    function checkEnabled(key) {
        return enableFlags[key];
    }
    if (loading) {
        return <h1>Loading Data!</h1>
    }
    return <div>Feature flags
        {
            componentToRender.map(item => (
                checkEnabled(item.key) ? item.component : null
            ))
        }
    </div>
}