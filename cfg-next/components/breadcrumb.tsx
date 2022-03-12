import bg from '../public/images/backgrounds/bg_4.jpg'


const Breadcrumb = () => {
    return (
        <section id="breadcrumb-section" className="breadcrumb-section sec-ptb-100 text-center text-white clearfix" data-background="/public/images/backgrounds/bg_4.jpg">
            <div className="container">
                <h2 className="page-title mb-30">Recent Stories</h2>
                <div className="breadcrumb-nev ul-li-center clearfix">
                    <ul className="clearfix">
                        <li><a href="index.html"><i className="fas fa-home mr-1"></i>Home</a></li>
                        <li><i className="fas fa-chevron-circle-right mr-1"></i> Blog List</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb