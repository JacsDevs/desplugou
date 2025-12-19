import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import ActivityCard from "./ActivityCard";

export default function ActivityList() {
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    async function carregar() {
      const snapshot = await getDocs(collection(db, "atividades"));
      const dados = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAtividades(dados);
    }
    carregar();
  }, []);

  return (
    <div className="grid">
      {atividades.map(a => (
        <ActivityCard key={a.id} atividade={a} />
      ))}
    </div>
  );
}