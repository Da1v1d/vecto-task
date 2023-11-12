import './Home.styles.css';
import data from '../../data.json';
import { MovieCarousel } from '../../components/MovieCarousel';
import { Button } from '../../components/Button';
import { useEffect, useState } from 'react';
import { toHoursAndMinutes } from '../../utils/utils';
import { VideoPlayer } from '../../components/VidePlayer';

export const Home = () => {
  const [featured, setFeatured] = useState(
    JSON.parse(sessionStorage.getItem('featured')) || data.Featured
  );
  const [trending, setTrending] = useState(data.TrendingNow);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setTrending([
      featured,
      ...data.TrendingNow.filter((el) => el.Id !== featured.Id),
    ]);
  }, []);

  return (
    <>
      <header
        style={{
          backgroundImage:
            !play &&
            `url(${require(`../../assets/images/${featured.TitleImage}`)}`,
        }}>
        <main>
          <h3>{featured.Category}</h3>
          <h1>{featured.Title}</h1>
          <p>
            {featured.ReleaseYear} {featured.MpaRating}{' '}
            {toHoursAndMinutes(featured.Duration)}
          </p>
          <p>{featured.Description}</p>
          <div className='button__container'>
            <Button icon='play' text='Play' onClick={() => setPlay(true)} />
            <Button text='More info' color='blue' />
          </div>
          {play && <VideoPlayer videoUrl={featured.VideoUrl} />}
        </main>
        <h2>Trending now</h2>
        <MovieCarousel
          featured={featured}
          setPlay={setPlay}
          items={trending}
          setFeatured={setFeatured}
        />
      </header>
    </>
  );
};
