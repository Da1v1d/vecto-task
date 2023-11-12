import './MovieCarousel.styles.css';
import { useDrag } from '../../hooks/useDrag';

export const MovieCarousel = ({ items, setFeatured, featured, setPlay }) => {
  const dragRef = useDrag();

  const clickHandler = (id) => {
    const clickedMovie = items.find((el) => el.Id === id);
    setFeatured(clickedMovie);
    setPlay(false);
    if (featured.Id === id) setPlay(true);
    sessionStorage.setItem('featured', JSON.stringify(clickedMovie));
  };

  return (
    <div className='carousel__container'>
      <div className='carousel' ref={dragRef}>
        {items.map((el) => (
          <img
            onClick={() => clickHandler(el.Id)}
            key={el.Id}
            src={require(`../../assets/images/${el.CoverImage}`)}
          />
        ))}
      </div>
    </div>
  );
};
