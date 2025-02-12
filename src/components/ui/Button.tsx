import {ReactNode} from "react";

interface Props {
    children: ReactNode,
    className?: string,
    callback?: () => void,
}

const Button = ({children, callback, className}: Props) => {
    return (
        <div onClick={callback ?? (() => {})} className={`text-center bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white ${className ?? ''}`}>{children}</div>
    );
};

export default Button;