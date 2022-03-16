import './Header.css';
import logo from './logo.svg'

export default function Header(params) {
  const setMobileNavOpen = params.setMobileNavOpen;

  return (
    <header>
      <div
        className='mobile-nav-icon'
        onClick={(e) => {
          setMobileNavOpen(true);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img src={logo} alt='logo' />
    </header>
  );
}
