import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/logo_1.png'

const Header = () => {
    return (
		<header id="header-section" className="header-section sticky-header clearfix">
			<div className="container">
				<div className="row align-items-center">

					<div className="col-lg-4">
						<div className="brand-logo">
							<a href="/">
								<Image src={logo} alt="Chefdog logo"></Image>
							</a>
							<div className="mobile-menu-btns float-right ul-li-right">
								<ul className="clearfix">
									<li>
										<button type="button" className="cart-btn">
											<i className="icon-bag"></i>
											<small className="count-text">3</small>
										</button>
									</li>
									<li>
										<button type="button" className="menu-btn">
											<span></span>
											<span></span>
											<span></span>
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-lg-8">
						<nav className="main-menu ul-li-right clearfix">
							<ul className="clearfix">
								<li>
									<a href="/">HOME</a>
								</li>
								<li>
									<a href="#!">ABOUT</a>
								</li>
							</ul>
						</nav>
					</div>

				</div>
			</div>
		</header>
    )
  }
  
  export default Header