import Navigation from "./Navigation.tsx";
import {defaultHero} from "../utils/constants.ts";
import {useEffect, useState} from "react";
import { characters }   from "../utils/constants.ts";
import {useParams} from "react-router";

const Header = () => {
    const {heroId = defaultHero} = useParams<{heroId:string}>();
    const [name, setName] = useState<string>(defaultHero);
    useEffect(() => {
        console.log(`heroId=${heroId}`);
        setName(heroId);
    }, [heroId])

    return (

        <header className={'rounded-t-2xl bg-grey-color'}>
            <Navigation/>
            <h1 className="text-center text-3xl py-6">
                {characters[name].name}
            </h1>
        </header>
    );
};

export default Header;