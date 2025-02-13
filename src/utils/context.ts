import { createContext } from "react";
interface HeaderContextType {
    changeHeader: (text: string) => void;
    header: string;
}
export const HeaderContext = createContext<HeaderContextType | null>(null);
