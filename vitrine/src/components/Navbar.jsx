import React, { useState } from 'react'
/**
 * Author:tdms410
 */
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
import logo from "../images/logo.png"


function Navbar() {

	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(1);



	const handleAct = (e, index) => {
		setActive(index)
	}

	console.log(active)
	return (
		<nav>
			<div className="Navbar">
				<div className='logo'>
					<NavLink to="/" className="navbar-logo ">
						<img src={logo} alt='logo' height={55} width={50} />
						<h6 className='navbar-logoName d-flex flex-column justify-content-center align-items-center text-center'>
							<span style={{ color: '#1b4694', fontSize: '14px' }}>TCHOUPSON</span>
							<span id='text2' style={{ color: '#e21e20', fontSize: '13px' }}>CAMEROON</span>
						</h6>
					</NavLink>
				</div>
				
				<div className={`nav-items ${open && "open"}`} on >
					<NavLink className={`nav-link ${active === 1 && "active1"}`} onClick={(e) => setActive(e, 1)} to="/" id='textColor'>Acceuil</NavLink>
					<NavLink className={`nav-link ${active === 2 && "active2"}`} onClick={(e) => setActive(e, 2)} to="/story">Historique</NavLink>
					<NavLink className={`nav-link ${active === 3 && "active3"}`} onClick={(e) => handleAct(e, 3)} to="/catalog">Catalogue</NavLink>
					<NavLink className={`nav-link ${active === 4 && "active4"}`} onClick={(e) => handleAct(e, 4)} to="/contact">Contact</NavLink>
				</div>
				<div className={` nav-toggle ${open && "open"}`} onClick={() => setOpen(!open)}>
					<div className="bar"></div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar