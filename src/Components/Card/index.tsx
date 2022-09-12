import { useEffect, useState } from "react";
import { numbersType } from "../../Pages/Game";
import "./styles.css";

interface CardType {
  data: numbersType[];
}

const Card = ({ data }: CardType) => {
  const [dataUse, setDataUse] = useState<numbersType[]>(data);
  const [dataChange, setDataChange] = useState(true);

  const [selectedCard1, setSelectedCard1] = useState<number | null>(null);
  const [selectedCard2, setSelectedCard2] = useState<number | null>(null);

  const handleShowCard = (id: number, index: number, par: number) => {
    dataUse[index].isHidden = !dataUse[index].isHidden;
    setDataUse(dataUse);
    setDataChange(!dataChange);

    if (selectedCard1 === null && selectedCard2 === null) {
      setSelectedCard1(id);
    }
    if (selectedCard1 !== null && selectedCard2 === null) {
      setSelectedCard2(par);
    }
  };

  useEffect(() => {
    if (selectedCard1 === null && selectedCard2 === null) {
      return;
    }
    if (selectedCard1 === selectedCard2) {
      const indexCard1 = dataUse.findIndex((f) => f.id === selectedCard1);
      const indexCard2 = dataUse.findIndex((f) => f.par === selectedCard2);
      Object.freeze(dataUse[indexCard1]);
      Object.freeze(dataUse[indexCard2]);
      setSelectedCard1(null);
      setSelectedCard2(null);
    }
    if (selectedCard1 !== selectedCard2) {
      setTimeout(() => {
        const indexCard1 = dataUse.findIndex((f) => f.id === selectedCard1);
        const indexCard2 = dataUse.findIndex((f) => f.par === selectedCard2);
        dataUse[indexCard1].isHidden = true;
        dataUse[indexCard2].isHidden = true;
        setSelectedCard1(null);
        setSelectedCard2(null);
      }, 1000);
    }
  }, [selectedCard2]);

  return (
    <>
      {dataUse?.map((item, index) => (
        <div
          className="card"
          key={index}
          onClick={() => handleShowCard(item.id, index, item.par)}
        >
          <div className="face front"> </div>
          <div className={`face back ${item.isHidden && "hidden"}`}>
            {item.label}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
