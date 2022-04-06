import {stack as Menu} from 'react-burger-menu';

const props = () =>{
    return(
        <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
  
        <a className="menu-item" href="/angular">
          Plot
        </a>
        <a className="menu-item" href="/angular">
          
        </a>
  
        <a className="menu-item" href="/react">
          Characters
        </a>

        <a className="menu-item" href="/laravel">
          Notes
        </a>
  
        <a className="menu-item" href="/node">
          Settings
        </a>
      </Menu>
    );
}

export default function Sidebar(){
    return props();
}