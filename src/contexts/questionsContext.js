import { createContext } from "react";
import qstns from "../helper/questions";

export const QuestionsContext = createContext();


export const QuestionsProvider = ({children}) => {
    const questions = qstns;

    return(
        <QuestionsContext.Provider value={{questions}}>
            {children}
        </QuestionsContext.Provider>
    )

}