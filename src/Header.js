import './App.css';
import { useSelector } from 'react-redux';
function Header()
{ 
    const name=useSelector((state)=>state.data.value); 
    return(

          <div className="header">{name}</div>
     
    
    );
}
export default Header;