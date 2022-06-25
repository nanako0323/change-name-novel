import { Container, Stack } from "@mui/material"
import ContentArea from "./ContentArea"
import InputArea from "./InputArea"
import TitleArea from "./TitleArea"

const Page : React.FC = () => {
    return (
        <Container>
            <Stack spacing={2} margin={2}>
                <TitleArea />
                <InputArea />
                <ContentArea />
            </Stack>
        </Container>
    )
}

export default Page