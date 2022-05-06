import './App.css';
import { useSelector } from 'react-redux';

function Footer()
{ 
    const name=useSelector((state)=>state.data.value); 
    return(
          <div className="footer">{name}</div>
    
    );
}
export default Footer;