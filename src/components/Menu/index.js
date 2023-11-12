import './Menu.styles.css';
import { MenuLinks } from './MenuLinks';

export const Menu = () => {
  return (
    <nav className='menu'>
      <div className='menu__container'>
        <MenuLinks />
        <div className='menu__footer'>
          <>
            <a>Language</a>
            <a>get help</a>
            <a>exit</a>
          </>
        </div>
      </div>
    </nav>
  );
};
