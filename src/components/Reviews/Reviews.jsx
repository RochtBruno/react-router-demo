import './Reviews.css'
import { Link } from 'react-router-dom';

function Reviews({reviews}) {
  return (
    <div className="reviews">
        <ul className="reviews__list">
          {reviews.map((review) => {
            return (<li key={review.id} className="reviews__item">
                <Link to={`${review.id}`}>{review.title}</Link>
            </li>)
          })}
        </ul>
    </div>
  );
}

export default Reviews;

// O valor to usa um literal de modelo para converter o ID da avaliação de um número em uma string, 
// já que valores de string são necessários aqui. Usar o ID das avaliações como valor de to 
// significa que haverá um caminho individual para cada avaliação com base no ID. 
// Clique em qualquer título e veja como a URL no navegador é alterada dinamicamente.
