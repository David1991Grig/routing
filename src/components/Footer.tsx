import Button from "./ui/Button.tsx";

const Footer = () => {
    return (
        <footer className={'clear-both bg-grey-color h-20 rounded-b-2xl grid grid-cols-7 items-center'}>
            <Button className={'col-start-3'}>Send me an <span
                className={'text-black uppercase'}>email</span></Button>
        </footer>
    );
};

export default Footer;