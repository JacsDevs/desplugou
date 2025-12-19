import { Link } from "react-router-dom";

export default function ActivityCard({ atividade }) {
  return (
    <div className="card">
      <h3>{atividade.titulo}</h3>
      <p>{atividade.descricao}</p>
      <p><strong>Ano:</strong> {atividade.ano}</p>
      <p><strong>Eixo BNCC:</strong> {atividade.eixo_bncc}</p>

      <Link to={`/atividade/${atividade.id}`}>
        Ver detalhes
      </Link>
    </div>
  );
}