import {useContext, useEffect, useState} from "react";
import {characters, defaultHero, period_month} from "../utils/constants.ts";
import {HeroInfo} from "../utils/types";
import {useParams} from "react-router";
import ErrorPage from "./ErrorPage.tsx";
import {HeaderContext} from "../utils/context.ts";


const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();
    const {heroId = defaultHero} = useParams();
    const context = useContext(HeaderContext);
    const ChangeHeader = context?.changeHeader;

if (!(heroId in characters)){
    return <ErrorPage/>
}
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
            const hero = JSON.parse(localStorage.getItem(heroId)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
            if (ChangeHeader) {
                ChangeHeader(hero.payload.name)
            }
        } else {
            fetch(characters[heroId].url)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    };
                    setHero(info);
                    if (ChangeHeader) {
                        ChangeHeader(info.name)
                    }
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }
        }, [heroId])

    return (
        <>
            {(!!hero) &&
                <div className={'text-[2em] text-justify tracking-widest leading-14 ml-8'}>
                    {Object.keys(hero).map(key => <p key={key}>
                        <span className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>: {hero[key as keyof HeroInfo]}
                    </p>)}
                </div>
            }
        </>
    );
};

export default AboutMe;