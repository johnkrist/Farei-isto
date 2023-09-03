import { FiCalendar, FiClipboard } from "react-icons/fi"
import { Contaiener } from "./style"
import Button from "../Button"
export const  Card = ({title, date, onClick})=>{
    return (
        <Contaiener>
            <span>
                <FiClipboard/> {title}
            </span>
            <hr/>
            <time>
                <FiCalendar/> {title} 
            </time>
            <Button onClick={onClick}></Button>
        </Contaiener>
    )

}