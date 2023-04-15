import { ButtonStyle } from "./style"

export const Button = ({children, color, ...rest}) =>{
    return(
        <ButtonStyle color={color} type="button"{...rest}>
            {children}

        </ButtonStyle>
    )
}