import {stack as Menu} from 'react-burger-menu';

const props = () =>{
    return(
        <Menu>
        <a className="menu-item">
          Home
        </a>
  
        <a className="menu-item" >
          Plot
        </a>
        <a className="menu-item">
          Structure
        </a>
  
        <a className="menu-item">
          Characters
        </a>

        <a className="menu-item">
          Notes
        </a>
  
        <a className="menu-item">
          Settings
        </a>
      </Menu>
    );
}

export default function Sidebar(){
    return props();
}