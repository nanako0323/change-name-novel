import { Container, Stack } from "@mui/material"
import ContentArea from "./ContentArea"
import InputArea from "./InputArea"

const Page : React.FC = () => {
    return (
    <Container>
        <Stack spacing={2} margin={2}>
            <ContentArea />
            <InputArea />
        </Stack>
    </Container>
    )
}

export default Page