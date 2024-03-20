import { FiCalendar, FiClipboard } from "react-icons/fi"
import { Contaiener } from "./style"
import {Button} from "../Button"
export const  Card = ({title, date, tasks, removeTask, index})=>{
    return (
        <Contaiener>
            <time>
                <FiCalendar size={20}/> {date} 
            </time>
            <hr/>
            <span>
                <FiClipboard size={20}/> {title}
            </span>
            <Button onClick={() => removeTask(index)}>Concluir</Button>
        </Contaiener>
    )

}