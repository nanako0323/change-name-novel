import { Paper, Stack, Typography } from "@mui/material"

type ContentAreaProps = {
    lastName : string
    firstName : string
}

const ContentArea : React.FC<ContentAreaProps> = ({lastName, firstName}) => {
    return (
        <Paper>
            <Stack spacing={2} margin={2}>
                <Typography variant="body1" gutterBottom>
                    俺の名前は{lastName}{firstName}。何やかんやあって、この廃病院に閉じ込められてしまった。<br />
                    「{lastName}！出てこい！」<br />
                    外から俺を呼ぶ声がする。
                </Typography>
            </Stack>
        </Paper>
    )
}

export default ContentArea