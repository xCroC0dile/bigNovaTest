import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <Header/>
    <div>
      {/* main-slider */}
      <section className="w3l-main-slider" id="home">
        <div className="companies20-content">
          <div className="owl-one owl-carousel owl-theme">
            {/* Slide 1 */}
            <div className="item">
              <li>
                <div className="slider-info banner-view bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>50% de réduction sur nos services phares</h5>
                        <p className="mt-4 pr-lg-4">
                          Faites le premier pas vers votre succès avec BigNova.
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="/about"
                        >
                          Prêt à commencer ?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>

            {/* Slide 2 */}
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top1 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>Améliorez votre visibilité en ligne rapidement</h5>
                        <p className="mt-4 pr-lg-4">
                          Nos solutions de développement et parrainage sont
                          efficaces et adaptées.
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="/about"
                        >
                          Découvrir BigNova
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>

            {/* Slide 3 */}
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top2 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>Boostez vos projets grâce à notre expertise</h5>
                        <p className="mt-4 pr-lg-4">
                          Ne perdez plus de temps, profitez de nos solutions web
                          productives.
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="/services"
                        >
                          Voir nos services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>

            {/* Slide 4 */}
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top3 bg bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg">
                        <h5>Développez vos compétences et votre réseau</h5>
                        <p className="mt-4 pr-lg-4">
                          Avec BigNova, combinez apprentissage, accompagnement
                          et parrainage.
                        </p>
                        <a
                          className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                          href="/parrainage"
                        >
                          Rejoindre le programme
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="waveWrapper waveAnimation">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path
              d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none" }}
            ></path>
          </svg>
        </div>
      </section>



      <section className="w3l-features py-5" id="facilities">
        <div className="call-w3 py-lg-5 py-md-4 py-2">
          <div className="container">
            <div className="row main-cont-wthree-2">
              <div className="col-lg-5 feature-grid-left">
                <h5 className="title-small mb-1">Étudier et obtenir un diplôme</h5>
                <h3 className="title-big mb-4">Nos installations</h3>
                <p className="text-para">
                  Curabitur id gravida risus. Fusce eget ex fermentum, ultricies
                  nisi ac sed, lacinia est. Quisque ut lectus consequat,
                  venenatis eros et, commodo risus. Nullam sit amet laoreet
                  elit. Suspendisse non magna a velit efficitur.{" "}
                </p>
                <p className="mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas ab qui impedit, libero illo quia sequi quibusdam
                  iure. Error minus quod reprehenderit quae dolor velit soluta
                  animi voluptate dicta enim? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Odio, provident!
                </p>
                <a
                  href="#url"
                  className="btn btn-primary btn-style mt-md-5 mt-4"
                >
                  En savoir plus
                </a>
              </div>
              <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                <div className="call-grids-w3 d-grid">
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-certificate"></span>
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Certificat mondial
                      </a>
                    </h4>
                    <p>
                      Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                      doloramet laoreet.
                    </p>
                  </div>
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-book"></span>
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Livres et bibliothèque
                      </a>
                    </h4>
                    <p>
                      Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                      dolor amet laoreet.
                    </p>
                  </div>
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-trophy"></span>
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Bourse
                      </a>
                    </h4>
                    <p>
                      Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                      dolor amet laoreet.
                    </p>
                  </div>
                  <div className="grids-1 box-wrap">
                    <a href="#more" className="icon">
                      <span className="fa fa-graduation-cap"></span>
                    </a>
                    <h4>
                      <a href="#feature" className="title-head">
                        Soutien aux anciens élèves
                      </a>
                    </h4>
                    <p>
                      Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                      dolor amet laoreet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w3l-homeblock3 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
          <h5 className="title-small text-center mb-1">D'après les nouvelles</h5>
          <h3 className="title-big text-center mb-sm-5 mb-4">
            Latest
            <span>Nouvelles</span>
          </h3>
          <div className="row top-pics">
            <div className="col-md-6">
              <div className="top-pic1">
                <div className="card-body blog-details">
                  <a href="#blog-single" className="blog-desc">
                   Améliorez vos compétences pédagogiques et votre expérience avec les meilleurs cours en ligne
                  </a>
                  <div className="author align-items-center">
                    <img
                      src="assets/images/team1.jpg"
                      alt="blogs"
                      className="img-fluid rounded-circle"
                    />
                    <ul className="blog-meta">
                      <li>
                        <a href="#author">Isabella ava</a>
                      </li>
                      <li className="meta-item blog-lesson">
                        <span className="meta-value"> Nov 19, 2020 </span>.
                        <span className="meta-value ml-2">
                          <span className="fa fa-clock-o"></span>1 min
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-4">
              <div className="top-pic2">
                <div className="card-body blog-details">
                  <a href="#blog-single" className="blog-desc">
                 Soyez plus productif pour réussir. Lancez-vous dans votre premier voyage.
                  </a>
                  <div className="author align-items-center">
                    <img
                      src="assets/images/team2.jpg"
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                    <ul className="blog-meta">
                      <li>
                        <a href="#author">Charlotte mia</a>
                      </li>
                      <li className="meta-item blog-lesson">
                        <span className="meta-value">Nov 19, 2020 </span>.
                        <span className="meta-value ml-2">
                          <span className="fa fa-clock-o"></span>1 min
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="top-pic3">
                  <div className="card-body blog-details">
                    <a href="#blog-single" className="blog-desc">
                      Nos cours de développement personnel sont plus efficaces. Commencez votre apprentissage en ligne.
                    </a>
                    <div className="author align-items-center">
                      <img
                        src="assets/images/team3.jpg"
                        alt=""
                        className="img-fluid rounded-circle"
                      />
                      <ul className="blog-meta">
                        <li>
                          <a href="#author">Elizabeth</a>
                        </li>
                        <li className="meta-item blog-lesson">
                          <span className="meta-value">Nov 19, 2020</span>.
                          <span className="meta-value ml-2">
                            <span className="fa fa-clock-o"></span>1 min
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-md-5 mt-4 text-more text-center">
            <a href="blog.html">
              Voir tous les articles
              <span className="pl-2 fa fa-long-arrow-right"></span>
            </a>
          </div>
        </div>
      </div>
      {/* //middle */}
      <section className="w3l-team py-5" id="team">
        <div className="call-w3 py-lg-5 py-md-4">
          <div className="container">
            <div className="row main-cont-wthree-2">
              <div className="col-lg-5 feature-grid-left">
                <h5 className="title-small mb-1">Des professionnels expérimentés</h5>
                <h3 className="title-big mb-4">Rencontrez nos professeurs</h3>
                <p className="text-para">
                  Curabitur id gravida risus. Fusce eget ex fermentum, ultricies
                  nisi ac sed, lacinia est. Quisque ut lectus consequat,
                  venenatis eros et, commodo risus. Nullam sit amet laoreet
                  elit. Suspendisse non magna a velit efficitur.
                </p>
                <p className="mt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas ab qui impedit, libero illo quia sequi quibusdam
                  iure. Error minus quod reprehenderit quae dolor velit soluta
                  animi voluptate dicta enim? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Odio, provident!
                </p>
                <a
                  href="#url"
                  className="btn btn-primary btn-style mt-md-5 mt-4"
                >
                  En savoir plus
                </a>
              </div>
              <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/team1.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">James</a>
                        </h3>
                        <span className="post">Directeur</span>
                        <ul className="social">
                          <li>
                            <a href="#link" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#link" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-sm-0 mt-3">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/team2.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Victoria</a>
                        </h3>
                        <span className="post">Directeur général</span>
                        <ul className="social">
                          <li>
                            <a href="#link" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#link" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-lg-4 mt-3">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/team3.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Isabella</a>
                        </h3>
                        <span className="post">Professeure</span>
                        <ul className="social">
                          <li>
                            <a href="#link" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#link" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-lg-4 mt-3">
                    <div className="box16">
                      <a href="#url">
                        <img
                          src="assets/images/team4.jpg"
                          alt=""
                          className="img-fluid radius-image"
                        />
                      </a>
                      <div className="box-content">
                        <h3 className="title">
                          <a href="#url">Elizabeth</a>
                        </h3>
                        <span className="post">Professeure</span>
                        <ul className="social">
                          <li>
                            <a href="#link" className="facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#link" className="twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  
    </div>
    <Footer/>
    </>
  );
}

export default Home;
