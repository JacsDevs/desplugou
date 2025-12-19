import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { useEffect, useState } from "react";

export default function ActivityDetails() {
  const { id } = useParams();
  const [atividade, setAtividade] = useState(null);

  useEffect(() => {
    async function carregar() {
      const ref = doc(db, "atividades", id);
      const snap = await getDoc(ref);
      setAtividade(snap.data());
    }
    carregar();
  }, [id]);

  if (!atividade) return <p>Carregando...</p>;

  return (
    <div className="card">
      <h2>{atividade.titulo}</h2>
      <p>{atividade.descricao}</p>

      <a href={atividade.pdf_atividade} target="_blank" rel="noreferrer">
        📄 Baixar atividade
      </a><br/>

      <a href={atividade.pdf_manual} target="_blank" rel="noreferrer">
        📘 Baixar manual
      </a>
    </div>
  );
}