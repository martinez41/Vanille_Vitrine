import React,{useState} from 'react'
import PhoneInput from 'react-phone-number-input'
import Footer from '../../components/Footer'
import  'react-phone-number-input/style.css'
import Navbar from '../../components/Navbar'
import './contact.css'

function Contact() {

	const [valueNom, setValueNom] = useState('')
	const [valueNumb, setValueNumb] = useState('')
    const [valueEmail, setValueEmail] = useState('')
	const [valueComm, setValueComm] = useState('')
	const [submit, setSubmit] = useState(false);

	const handleConnect = (e) => {
        e.preventDefault();
        setSubmit(!submit);
        if (submit) {
            setValueNom('');
            setValueEmail('');
            setValueComm('');
            setValueNumb('')
        };
    }

  return (
	<div>
	<header>
	<Navbar/>
	<section className='bannerContact d-flex justify-content-center align-items-center'>
         
    </section>
	</header>
	<main className='mt-5 mb-5 container'>
		<div className="row">
			<div className='col-6'>
			<div className='row'>
			<div className='col-3' style={{fontSize:'9rem'}}><i class="bi bi-chat-left-text-fill"></i></div>
			<div className='col-9 d-flex align-items-center' >
			<h1 >TCHOUPSON ELECTRICITE</h1>
			</div>
			</div>
			<div className="mapouter"><div className="gmap_canvas"><iframe width={600} height={500} id="gmap_canvas" src="https://maps.google.com/maps?q=Tchoupson%20%C3%89lectrique,%20Douala&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://123movies-to.org" /><br /><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:500px;width:600px;}" }} /><a href="https://www.embedgooglemap.net">google map codes for website</a><style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}" }} /></div></div>
			<div className='row mt-5 '>
				<div className='col-6'>
				<i class="bi bi-pin-map-fill"></i><br/>
				Akwa ,Mobil bonakwanmouang
				</div>
				<div className='col-6'>
				<i class="bi bi-telephone-fill"></i><br/>
				698 39 96 09
				</div>
			</div>
			<div className='row mt-4'>
				<div className='col-6'>
				<i class="bi bi-pin-map-fill"></i><br/>
				Logpon ,A cote de Eneo
				</div>
				<div className='col-6'>
				<i class="bi bi-telephone-fill"></i><br/>
				671 10 63 60
				</div>
			</div>
			<div className='row mt-4'>
				<div className='col-6'>
				<i class="bi bi-pin-map-fill"></i><br/>
				Nyalla ,Pariso
				</div>
				<div className='col-6'>
				<i class="bi bi-telephone-fill"></i><br/>
				691 00 60 37
				</div>
			</div>
			<div className='row mt-4'>
				<div className='col-6'>
				<i className="bi bi-envelope-fill iconColor"></i><br/>
				Remplissez le formulaire ci-contre 
				</div>
				<div className='col-6'>
				<i class="bi bi-calendar-week-fill iconColor"></i><br/>
				Du Lundi au Vendredi / Samedi<br/>
				<i class="bi bi-clock-fill iconColor"></i><br/>
				07:30 – 17:30 / 08:00 – 15:00
				</div>
			</div>
			</div>
			<div className='col-6 pt-5'>
				<h5 style={{ color: '#000'}}>Un projet de travaux,un devis ,un conseil sur du matériel électrique ?<br/> Contactez-nous.</h5>
				<p>
				En tant que société spécialisée dans l’électricité générale, TCHOUPSON CAMEROUN vous propose l’ensemble de son expertise tant pour des travaux d’installation électrique en appartement qu’en immeuble d’habitation ou de bureaux, en passant par des opérations de mise en conformité électrique, n’hésitez pas à nous appeler. Nous vous proposons également la vente de matériels électriques dans nos magasins !
				</p>
				<h1>TCHOUPSON CAMEROUN, votre électricien partenaire !</h1>
				<div className="col-md d-flex justify-content-center p-5 _shadow1">
                    <form className="row g-3 d-flex justify-content-center needs-validation" onSubmit={(e) => handleConnect(e)}>
                        <div className="">
                            <label htmlFor="validationCustom01" className="form-label">Nom :</label>
                            <input
                                type="text"
                                className="form-control"
                                value={valueNom}
                                onChange={e => setValueNom(e.target.value)}
                                required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
						<div className="mt-2 ">
                            <label htmlFor="validationCustom03" className="form-label">Numéro de téléphone :</label>
                            <PhoneInput
                                // className="form-control d-flex"
                                id="validationCustom03"
								country = "US" 
                                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                // required minLength={9} maxLength={18}
                                value={valueNumb}
                                onChange={setValueNumb} 
								/>

                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="mt-2">
                            <label htmlFor="validationCustomUsername" className="form-label">Email :</label>
                            <div className="input-group has-validation">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="validationCustomUsername"
                                    aria-describedby="inputGroupPrepend"
                                    value={valueEmail}
                                    onChange={e => setValueEmail(e.target.value)}
                                    // pattern=".+@globex\.com"
                                    required />
                                <div className="invalid-feedback">
                                    Please your email
                                </div>
                            </div>
                        </div>

                        <div className="mt-2">

                            <label htmlFor="validationCustom03" className="form-label">Message :</label>
                            <div className="form-floating">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="validationCustom03"
                                    value={valueComm}
                                    onChange={e => setValueComm(e.target.value)}
                                    defaultValue={""} />
                            </div>
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        {
                            submit && <div className="alert alert-warning mt-3">
                                <p> Cette fonctionnalite n'est pas encore disponible pour le moment!! </p>
                            </div>
                        }
                        <div className="col-12 text-center  mt-3">
                            <button className="btns btn" type="submit">Envoyer</button>
                        </div>
                    </form>
                </div>
			</div>
		</div>
	</main>
	<Footer/>
	</div>
  )
}

export default Contact