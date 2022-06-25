import { Paper, Stack, Typography } from "@mui/material"

const TitleArea : React.FC = () => {
    return (
        <Paper>
            <Stack spacing={2} margin={2}>
                <Typography variant="h4" gutterBottom component="div">
                    夏休みの宿題が終わらなかっただけなのに～廃病院からの脱出～
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    セロハンテープで廃病院からの脱出を試みる主人公。しかし、そこには敵の凶悪な罠が仕掛けられていた……
                </Typography>
            </Stack>
        </Paper>
    )
}

export default TitleArea