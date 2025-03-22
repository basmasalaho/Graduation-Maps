import { Link } from 'react-router-dom';
import getCroppedImageUrl from "../../services/image-url";
import CriticScore from "../CriticScore";
import { Emoji } from "../Emoji";
import PlatformIconList from "../Platform/PlatformIconList";
import styles from "../../../src/assets/styles/gameCard.module.css"; 

const GameCard = ({ game }) => {
  return (
    <Link to={`/games/${game.id}`} className={styles.card}>
      <img
        className={styles.image}
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <div className={styles.details}>
        <div className={styles.top}>
          <div className={styles.platform}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </div>
          <div className={styles.score}>
            <CriticScore score={game.metacritic} />
          </div>
        </div>
        <div className={styles.title}>
          <h5>
            {game.name} <Emoji rating={game.rating_top} />
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
