import Button from 'react-bootstrap/Button';

let nombre = 'Ignacio'

export const Persona = () => {
    return (
        <>
            <h1>{nombre}</h1>,
            <Button variant="warning">Warning</Button>
        </>
    )
}
