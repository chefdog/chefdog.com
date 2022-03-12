import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/logo_1.png'

const Footer = () => {
    return (
		<footer id="footer-section" className="footer-section sec-ptb-100 bg-default-black text-white clearfix">
			<div className="container">
				<div className="row">

					<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
						<div className="brand-logo clearfix" data-aos="fade-up" data-aos-delay="100">
							<a href="index.html">
								{/* <img src="assets/images/logo/logo_2.png" alt="logo_not_found"> */}
							</a>
						</div>
					</div>

					<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div className="row">
							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
								<div className="useful-links ul-li-block clearfix" data-aos="fade-up" data-aos-delay="300">
									<ul className="clearfix">
										<li><a href="#!">+2 0100-843-1112</a></li>
										<li><a href="#!">hola@afkar.agency</a></li>
										<li><a href="#!">Berlin, Germany</a></li>
									</ul>
								</div>
							</div>

							<div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
								<div className="useful-links ul-li-block clearfix" data-aos="fade-up" data-aos-delay="500">
									<ul className="clearfix">
										<li><a href="#!">COMPANY</a></li>
										<li><a href="service-1.html">SERVICES</a></li>
										<li><a href="#!">CASE STUDIES</a></li>
										<li><a href="contact.html">CONTACT</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
						<div className="social-links-text ul-li-right clearfix" data-aos="fade-up" data-aos-delay="700">
							<ul className="clearfix">
								<li><a href="#!">facebook</a></li>
								<li><a href="#!">twitter</a></li>
								<li><a href="#!">instagram</a></li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
		</footer>
    )
  }
  
  export default Footer