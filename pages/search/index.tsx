import { useEffect, useState } from "react";
import Container from "../../components/container"
import Header from "../../components/header"
import Layout from "../../components/layout"

import Map from '../../lib/map';
import { loadMapApi } from "../../lib/google-maps-util";
import Footer from "../../components/footer";

const Search  = () => { 

	const [scriptLoaded, setScriptLoaded] = useState(false);
    const [distanceInKm, setDistanceInKm] = useState<number>(-1);

    useEffect(() => {
        const googleMapScript = loadMapApi();
        googleMapScript.addEventListener('load', function () {
            setScriptLoaded(true);
        });
    }, []);

    const renderDistanceSentence = () => {
        return (
            <div className='distance-info'>
                {`Distance between selected marker and home address is ${distanceInKm}km.`}
            </div>
        );
    };

    return (    
        <Layout>
            <Container>
                <Header></Header>

				<section id="service-section" className="service-section sec-ptb-100 text-center clearfix">
					<div className="container">

						<div className="row justify-content-center">

							<form id="contact_form" action="mail.php" method="POST">
								<div className="row justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
									<div className="col-lg-12">
										<div className="form-item">
											<input type="text" name="name" placeholder="Search on..." />
										</div>
									</div>

								</div>
								<div className="text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
									<button type="submit" className="btn" value="submit">Search</button>
								</div>
							</form>

						</div>
					</div>
				</section>

				<section id="map-section" className="map-section clearfix">
					{scriptLoaded && (
						<Map
							mapType={google.maps.MapTypeId.ROADMAP}
							mapTypeControl={true}
							setDistanceInKm={setDistanceInKm}
						/>
					)}
					{distanceInKm > -1 && renderDistanceSentence()}
                </section>
            </Container>

			<Footer></Footer>
        </Layout>
    )
}

export default Search