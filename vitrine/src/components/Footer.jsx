import React from 'react'
import './footer.css'

function Footer() {
  return (
	<footer className="container-fluid p-3 footer d-flex justify-content-center">
	<div className='container row  p-3'>
		<div className='col-md-4 p-3'>
			<div className='row mb-4'>
				<h1>TCHOUPSON CAMEROUN SARL : Mr qualité </h1>
			</div>
			<div className='row mb-4'>
				<p>
				L’expérience séculaire fait de TCHOUPSON CAMEROUN spécialiste dans la vente de matériel électriques sur Douala. Appartements, bureaux, commerces, hôtels, bâtiments publics et collectivités font appel à nos services tant pour des travaux d’envergure que pour des dépannages en électricité.Notre activité de commerce en gros et en détail nous permet également de proposer, aux particuliers, une large gamme de produits à des prix extrêmement compétitifs.
				</p>
			</div>
			<div className='row mb-4'>
				<p>Vous envisagez de revoir l’installation de votre appartement ? Contactez-nous et demandez votre devis gratuit !</p>
			</div>
		</div>
		<div className='col-md-4'></div>
		<div className='col-md-4'>
			<div className='row'>
				<h5>BUREAU & CONTACTS</h5>
				<p>
				<i className="bi bi-envelope-fill iconColor"></i>
				tchoupsonelect@gmail.com
				</p>
				<p></p>
				<p>
				<i class="bi bi-calendar-week-fill iconColor"></i>
				Du Lundi au Vendredi / Samedi<br/>
				<i class="bi bi-clock-fill iconColor"></i>
				07:30 – 17:30 / 08:00 – 15:00
				</p>
				<p>
				</p>
				<p>
				<i className="bi bi-geo-alt-fill iconColor"></i>
				Akwa ,Mobil bonakwanmouang<br/>
				<i className="bi bi-telephone-fill iconColor"></i>
				698 39 96 09
				</p>
				<p>
				</p>
				<p>
				<i className="bi bi-geo-alt-fill iconColor"></i>
				Logpon ,A cote de Eneo<br/>
				<i className="bi bi-telephone-fill iconColor"></i>
				671 10 63 60
				</p>
				<p>
				</p>
				<p>
				<i className="bi bi-geo-alt-fill iconColor"></i>
				Nyalla ,Pariso<br/>
				<i className="bi bi-telephone-fill iconColor"></i>
				691 00 60 37
				</p>
				<p>
				</p>
			</div>
			<div className='row'>
				<h5>NOS SERVICES</h5>
				<p>
				 - Fournisseur de matériel d’électricité<br/>
	

				</p>
			</div>
			<div className='row'>
				<h5>NOS RESEAUX</h5>
				<p>
				<a href='https://www.facebook.com/TchoupsonCameroun' target='_blanck'><i className="bi bi-facebook iconColor"></i>Tchoupson Cameroun Sarl</a>
				</p>
			</div>
		</div>
	</div>
	</footer>
  )
}

export default Footer