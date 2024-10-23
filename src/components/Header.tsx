import Nav from './Nav';

function Header(propsObj: { count: number; color: string; userName: string }) {
    return (
      <header>
        <h3 style={{backgroundColor: propsObj.color}}>{propsObj.userName}</h3>
  
        <p>Header Count: {propsObj.count}</p>
        <Nav counterNum={propsObj.count} />
      </header>
    )
  }

  export default Header;