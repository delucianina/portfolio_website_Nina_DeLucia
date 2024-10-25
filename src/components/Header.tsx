import Nav from './Nav';

function Header() {
    return (
      <header>
        <div className="logo">
          <img src="/images/squirrel_3.jpg" alt="cute picture of Marshal from ACNH" />
          <h3>Nina DeLucia</h3>
        </div>
  
        <Nav />
      </header>
    )
  }

  export default Header;