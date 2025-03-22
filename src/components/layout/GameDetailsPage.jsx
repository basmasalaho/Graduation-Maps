import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import apiClient from '../../services/api-client';
import styles from '../../assets/styles/GameDetailsPage.module.css';
// استيراد مكتبة Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const GameDetailsPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    apiClient
      .get(`/games/${id}`)
      .then(res => {
        setGame(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching game details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!game) return <div>Game not found</div>;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription); // تبديل حالة عرض الوصف الكامل
  };

  return (
    <div className={styles.container }>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.returnButton}>
          ← Return
        </Link>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              className={styles.swiperContainer}
            >
              <SwiperSlide>
                <div className={styles.slideContent}>
                  <div className={styles.titleContainer}>
                    <img 
                      src={game.background_image} 
                      alt={game.name}
                      className={styles.gameTitleImage} 
                    />
                    <h1 className={styles.gameTitle}>{game.name}</h1>
                  </div>
                </div>
              </SwiperSlide>
              {game.screenshots?.map((screenshot) => (
                <SwiperSlide key={screenshot.id}>
                  <img 
                    src={screenshot.image} 
                    alt={`${game.name} screenshot`}
                    className={styles.screenshot} 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className={styles.contentWrapper}>
              <div className={styles.descriptionWrapper}>
                <p className={styles.description}>
                  {showFullDescription ? game.description_raw : `${game.description_raw.substring(0, 200)}...`}
                </p>
                <button onClick={toggleDescription} className={styles.readMoreButton}>
                  {showFullDescription ? 'Read Less' : 'Read More'}
                </button>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <p className={styles.statLabel}>Release Date</p>
                  <p className={styles.statValue}>{game.released}</p>
                </div>
                <div className={styles.statCard}>
                  <p className={styles.statLabel}>Rating</p>
                  <p className={styles.statValue}>{game.rating}/5</p>
                </div>
                <div className={styles.statCard}>
                  <p className={styles.statLabel}>Metacritic</p>
                  <p className={styles.statValue}>{game.metacritic}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
};

export default GameDetailsPage;
