import * as C from "./styles";

type Props = {
    note: string
}

export function Display({ note }: Props) {

    return (
        <C.Container>
            <h1>{note}</h1>
        </C.Container>
    )
}