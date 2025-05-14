import './PageNotFound.css'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className="not-found">
            <h3 className="not-found__title">
                <span>404</span> - Página não encontrada!
            </h3>
            <p className="not-found__text">
                Opa! Não há nada aqui... Desculpe. 🥺
            </p>
            <Link to="/">Voltar à página principal</Link>
        </div>
    )
}

export default PageNotFound