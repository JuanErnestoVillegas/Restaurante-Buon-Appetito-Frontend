import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './Error404.css'

const Error404 = () => {
    const Navigate = useNavigate ();

    return (
        <div className='error_content'>
            <img src="https://cdn.dribbble.com/users/877246/screenshots/6054160/media/4aea60454c2b30dea6b35a8c6ed739ea.png?compress=1&resize=400x300"></img>
            <p className='parrafo_error'>Lo sentimos, la página que busca no está disponible</p>
            <Button variant="secondary" onClick={() => Navigate('/')} >
                Volver al Inicio
            </Button>
        </div>
    )
}

export default Error404;