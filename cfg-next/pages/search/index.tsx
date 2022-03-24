import Container from "../../components/container"
import Header from "../../components/header"
import Layout from "../../components/layout"

const Search  = () => { 
    return (
    
        <Layout>
            <Container>
                <Header></Header>

                <section id="service-section" className="service-section sec-ptb-100 text-center clearfix">
				<div className="container">

					<div className="row justify-content-center">
						<div className="col-lg-7 col-md-8 col-sm-9 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
							<div className="section-title size-increase">
								<h2 className="title-text mb-0">
									After coming into contact with a religious man I always feel I must wash my hands.
								</h2>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<div className="service-default plr-30 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
								<span className="item-icon">
									<img src="assets/images/icons/icon_14.png" alt="image_not_found" />
								</span>
								<h3 className="item-title">Head Quarter</h3>
								<p className="mb-0">
									Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine.
								</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<div className="service-default plr-30 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
								<span className="item-icon">
									<img src="assets/images/icons/icon_15.png" alt="image_not_found" />
								</span>
								<h3 className="item-title">Phone Numbers</h3>
								<p className="mb-0">
									Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. 
								</p>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<div className="service-default plr-30 aos-init aos-animate" data-aos="fade-up" data-aos-delay="700">
								<span className="item-icon">
									<img src="assets/images/icons/icon_16.png" alt="image_not_found" />
								</span>
								<h3 className="item-title">Emails &amp; Support</h3>
								<p className="mb-0">
									Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. 
								</p>
							</div>
						</div>
					</div>

				</div>
			</section>

                <section id="map-section" className="map-section clearfix">
                    
                </section>
            </Container>
        </Layout>
    )
}

export default Search