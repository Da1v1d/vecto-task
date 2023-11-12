import './Menu.styles.css';

const MenuItems = [
  'search',
  'home',
  'tv-shows',
  'movies',
  'genres',
  'watch-later',
];

export const MenuLinks = () => {
  const selected = window.location.pathname;

  return (
    <>
      <div className='menu__links'>
        <div className='about__user'>
          <img src={require('../../assets/images/avatar.png')} />
          <p>Daniel</p>
        </div>
        {MenuItems.map((text, key) => (
          <a
            className={`menu__link ${selected.includes(text) && 'selected'}`}
            key={key}
            href={text}>
            <div className='menu__link__image__container'>
              <img src={require(`../../assets/icons/${text}.png`)} alt={text} />
            </div>
            <p> {text.replace('-', ' ')}</p>
          </a>
        ))}
      </div>
    </>
  );
};
