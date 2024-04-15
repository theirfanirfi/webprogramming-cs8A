import {Link} from 'react-router-dom';

function NavigationBar(props){

return (
	<ul>
	<li> <Link to="/home">Home</Link></li>
	<li> <Link to="/counter">Counter</Link></li>
	</ul>
	)
}

export default NavigationBar;