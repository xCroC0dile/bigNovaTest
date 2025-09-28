import React from "react";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div>
      {/* footer */}
     <section className="w3l-footer-29-main">
  <div className="footer-29 py-5">
    <div className="container py-md-4">
      <div className="row footer-top-29">
        {/* Contact */}
        <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
          <h6 className="footer-title-29">Contact</h6>
          <p>
            Adresse : BigNova, Centre de Développement Web, Rue Didouche Mourad, Alger, Algérie.
          </p>
          <p className="my-2">
            Téléphone : <a href="tel:+213123456789">+213 123 45 67 89</a>
          </p>
          <p>
            Email : <a href="mailto:contact@bignova.com">contact@bignova.com</a>
          </p>
          <div className="main-social-footer-29 mt-4">
            <a href="#facebook" className="facebook">
              <span className="fa fa-facebook"></span>
            </a>
            <a href="#twitter" className="twitter">
              <span className="fa fa-twitter"></span>
            </a>
            <a href="#instagram" className="instagram">
              <span className="fa fa-instagram"></span>
            </a>
            <a href="#linkedin" className="linkedin">
              <span className="fa fa-linkedin"></span>
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="col-lg-3 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">
          <ul>
            <h6 className="footer-title-29">Entreprise</h6>
            <li>
              <a href="about.html">À propos de BigNova</a>
            </li>
            <li>
              <a href="#blog"> Derniers articles</a>
            </li>
            <li>
              <a href="#teacher"> Devenez formateur</a>
            </li>
            <li>
              <a href="courses.html">Nos Formations</a>
            </li>
            <li>
              <a href="contact.html">Nous contacter</a>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
          <h6 className="footer-title-29">Programmes</h6>
          <ul>
            <li>
              <a href="#traning">Centre de Formation</a>
            </li>
            <li>
              <a href="#documentation">Documentation</a>
            </li>
            <li>
              <a href="#release">Nouveautés</a>
            </li>
            <li>
              <a href="#customers"> Témoignages</a>
            </li>
            <li>
              <a href="#helpcenter"> Centre d'aide</a>
            </li>
          </ul>
        </div>

        {/* Support / Apps */}
        <div className="col-lg-3 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
          <h6 className="footer-title-29">Support</h6>
          <a href="#playstore">
            <img
              src="assets/images/googleplay.png"
              className="img-responsive"
              alt="Google Play"
            />
          </a>
          <a href="#appstore">
            <img
              src="assets/images/appstore.png"
              className="img-responsive mt-3"
              alt="App Store"
            />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* copyright */}
  <section className="w3l-copyright text-center">
    <div className="container">
      <p className="copy-footer-29">© 2025 BigNova. Tous droits réservés</p>
    </div>

    {/* move top */}
    <button onClick={topFunction} id="movetop" title="Revenir en haut">
      &#10548;
    </button>
    {/* /move top */}
  </section>
  {/* //copyright */}
</section>

      {/* //footer */}
    </div>
  );
}

export default Footer;
