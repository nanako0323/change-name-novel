import { Button, Paper, Stack, TextField } from "@mui/material"
import { useState } from "react"

type InputAreaProps = {
    handleChangeName :(newLastName : string, newFirstName : string) => void
}

const InputArea : React.FC<InputAreaProps> = ({handleChangeName}) => {

    const [lastName, setLastName] = useState<string>('苗字')
    const [firstName, setFirstName] = useState<string>('名前')

    const handleClick = () => {
        handleChangeName(lastName, firstName)
    }

    return (
        <Paper>
            <Stack spacing={2} margin={2} direction="row" justifyContent="center">
                <TextField id="last-name" label="苗字" variant="outlined" style={{width: 'fit-content'}} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}/>
                <TextField id="first-name" label="名前" variant="outlined" style={{width: 'fit-content'}} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}/>
                <Button variant="contained" style={{width: 'fit-content'}} onClick={handleClick}>OK</Button>
            </Stack>
        </Paper>
    )
}

export default InputArea