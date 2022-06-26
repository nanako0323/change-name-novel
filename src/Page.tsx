import { Container, Stack } from "@mui/material"
import { useState } from "react"
import ContentArea from "./ContentArea"
import InputArea from "./InputArea"
import TitleArea from "./TitleArea"

const Page : React.FC = () => {

    const [lastName, setLastName] = useState<string>('苗字')
    const [firstName, setFirstName] = useState<string>('名前')

    const handleChangeName = (newLastName : string, newFirstName : string) => {
        setLastName(newLastName)
        setFirstName(newFirstName)
    }

    return (
        <Container>
            <Stack spacing={2} margin={2}>
                <TitleArea />
                <InputArea handleChangeName={handleChangeName} />
                <ContentArea lastName={lastName} firstName={firstName} />
            </Stack>
        </Container>
    )
}

export default Page