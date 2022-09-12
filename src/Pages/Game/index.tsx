import Card from "../../Components/Card";
import "./styles.css";

export interface numbersType {
  id: number;
  label: number;
  isHidden: boolean;
  par: number;
}

const Game = () => {
  const numbers: numbersType[] = [
    {
      id: 1,
      label: 1,
      isHidden: true,
      par: 11,
    },
    {
      id: 2,
      label: 2,
      isHidden: true,
      par: 22,
    },
    {
      id: 3,
      label: 3,
      isHidden: true,
      par: 33,
    },
    {
      id: 4,
      label: 4,
      isHidden: true,
      par: 44,
    },
    {
      id: 5,
      label: 5,
      isHidden: true,
      par: 55,
    },
    {
      id: 6,
      label: 6,
      isHidden: true,
      par: 66,
    },
    {
      id: 7,
      label: 7,
      isHidden: true,
      par: 77,
    },
    {
      id: 8,
      label: 8,
      isHidden: true,
      par: 88,
    },
    {
      id: 9,
      label: 9,
      isHidden: true,
      par: 99,
    },
    {
      id: 10,
      label: 0,
      isHidden: true,
      par: 1010,
    },
    {
      id: 11,
      label: 1,
      isHidden: true,
      par: 1,
    },
    {
      id: 22,
      label: 2,
      isHidden: true,
      par: 2,
    },
    {
      id: 33,
      label: 3,
      isHidden: true,
      par: 3,
    },
    {
      id: 44,
      label: 4,
      isHidden: true,
      par: 4,
    },
    {
      id: 55,
      label: 5,
      isHidden: true,
      par: 5,
    },
    {
      id: 66,
      label: 6,
      isHidden: true,
      par: 6,
    },
    {
      id: 77,
      label: 7,
      isHidden: true,
      par: 7,
    },
    {
      id: 88,
      label: 8,
      isHidden: true,
      par: 8,
    },
    {
      id: 99,
      label: 9,
      isHidden: true,
      par: 9,
    },
    {
      id: 1010,
      label: 0,
      isHidden: true,
      par: 10,
    },
  ];

  return (
    <div className="game-container">
      <h1>Jogo da memória</h1>
      <div className="grid-game">
        <Card data={numbers.sort(() => Math.random() - 0.5)} />
      </div>
    </div>
  );
};

export default Game;
