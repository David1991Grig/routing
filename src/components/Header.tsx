import Navigation from "./Navigation.tsx";

import {useContext} from "react";
import {HeaderContext} from "../utils/context.ts";


const Header = () => {
    const context = useContext(HeaderContext);
    const header = context?.header;

    return (

        <header className={'rounded-t-2xl bg-grey-color'}>
            <Navigation/>
            <h1 className="text-center text-3xl py-6">
                {header}
            </h1>
        </header>
    );
};

export default Header;