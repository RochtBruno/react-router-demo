import { useParams, useNavigate } from "react-router-dom";

function Review({reviews}){
    const navigate = useNavigate();
    const params = useParams();
    let id = params.reviewId
    // Diminua o valor de ID do parâmetro para acessarmos os itens corretos. Isso
    // é necessário porque os índices do array começam com 0, enquanto os IDs da 
    // API começam em 1.
    id = id -1

    return(
        <div className="review">
            {reviews && (
                <div className="review__item">
                    <h3>{reviews[id]?.title}</h3>
                    <p>{reviews[id]?.text}</p>
                    <p className="review__rating">Avaliação final: {reviews[id]?.rating}/5</p>
                    <button type="button" onClick={() => {navigate("/reviews")}}>Voltar para a lista de avaliações</button>
                </div>
            )}
        </div>
    )
}

export default Review

// Aqui, importamos o hook useParams() do react-router-dom e o usamos para obter a propriedade 
// reviewId do objeto params. Depois, no JSX, exibimos dinamicamente os conteúdos de uma 
// avaliação individual usando o valor id. 
// O ? usado em reviews[id]?.title é o operador de encadeamento opcional. Ele é usado aqui para 
// evitar erros se o componente review for renderizado antes que a solicitação API retorne 
// com os dados necessários. 

// Nesse caso, queremos que o botão sempre navegue de volta para um local específico, /reviews. 
// O hook useNavigate também permite que você envie o usuário de volta à página visitada 
// anteriormente (assim como o botão Voltar do navegador). Para fazer isso, 
// você pode enviar um valor de -1 ao hook.