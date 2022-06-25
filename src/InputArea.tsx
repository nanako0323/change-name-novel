import { Button, Paper, Stack, TextField } from "@mui/material"

const InputArea : React.FC = () => {
    return (
        <Paper>
            <Stack spacing={2} margin={2} direction="row" justifyContent="center">
                <TextField id="last-name" label="苗字" variant="outlined" style={{width: 'fit-content'}}/>
                <TextField id="first-name" label="名前" variant="outlined" style={{width: 'fit-content'}}/>
                <Button variant="contained" style={{width: 'fit-content'}}>OK</Button>
            </Stack>
        </Paper>
    )
}

export default InputArea