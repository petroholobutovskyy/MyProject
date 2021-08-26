// import React, {Component} from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faUser} from "@fortawesome/free-solid-svg-icons";
// import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
//
// // ikonki maja byc klikane
// class Header extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="header__container">
//                     <a href="#" className="header-logo">Wander<span>Lust</span></a>
//                     <div className="header__user-container">
//                         <FontAwesomeIcon icon={faUser} className="icon-user" />
//                         <FontAwesomeIcon icon={faShoppingCart} className="icon-shopping-cart"/>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Header;
// import React, {Component} from 'react';
//
// class HeaderMain extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <nav className="header__navigation">
//                     <ul className="navigation-list">
//                         <li className="navigation-list-item"><a href="#"> Strona Glowna</a></li>
//                         <li className="navigation-list-item"><a href="#">Dlaczego my?</a></li>
//                         <li className="navigation-list-item"><a href="#">Wycieczki</a></li>
//                         <li className="navigation-list-item"><a href="#">Opinie</a></li>
//                         <li className="navigation-list-item"><a href="#">Kontakt</a></li>
//                     </ul>
//                 </nav>
//
//             </div>
//         );
//     }
// }
//
// export default HeaderMain;
//
// import React, {Component} from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import mount1 from '../images/mount1.jpg'
// import mount2 from '../images/mount2.jpg'
// import mount3 from '../images/mount3.jpg'
// import styled from "styled-components";
//
// class CarouselInfo extends Component {
//     render() {
//         return (
//             <div className="container" >
//                 <Carousel>
//                     <Carousel.Item className="carousel-item" >
//                         <img className="d-block w-100" src={mount1} alt="first slide"/>
//                         <Carousel.Caption>
//                             <h3 className="carousel-header">Jestesmy najwiekszym biurem podrózy w regionie!</h3>
//                             <p className="carousel-text">Juz od ponad 20 lat zorganizujemy wycieczki regionalne w Galicji.
//                                 Przez ten okres z naszych uslug skorzystalo ponad 20 000 zadowolonych klientow!</p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                     <Carousel.Item className="carousel-item" >
//                         <img className="d-block w-100" src={mount2} alt="second slide"/>
//                         <Carousel.Caption>
//                             <h3 className="carousel-header">Oferujemy rozne wycieczki na kazdy gust i kieszen:)</h3>
//                             <p className="carousel-text">Jesteś miłosnikiem gór i od zawsze marzyłeś wyruszyć w góry i poznać piękno ukrainskich Karpat?
//                                 A może uwielbiasz zabytkowa architekturę i chcialbys bliżej poznać historię Lwowa? W naszej ofercie kazdy znajdzie cos dla siebie!
//                             </p>
//                         </Carousel.Caption>
//                     </Carousel.Item >
//                     <Carousel.Item className="carousel-item" >
//                         <img className="d-block w-100" src={mount3} alt="third slide"/>
//                         <Carousel.Caption>
//                             <h3 className="carousel-header">Nie zwlekaj i zarezerwuj swoja wymarzona wycieczkę juz dzis!</h3>
//                             <p className="carousel-text">Pomozemy Ci spełnic swoje marzenie! Wypełnij krótki formularz i zaczynaj pakowac walike:)
//                             </p>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                 </Carousel>
//
//
//             </div>
//         );
//     }
// }
//
// export default CarouselInfo;
//
// import React, {Component} from 'react';
// import carpatians from '../images/carpatians.jpg'
// import  castle from '../images/castle.jpg'
// import ship from '../images/ship.jpg'
// import lwow from '../images/lwow.jpg'
//
// class ExcursionsInfo extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="excursion__main-container">
//                     <div className="excursion__single-container mountains">
//                         <img src={carpatians}/>
//                         <div className="excursion__header-container">
//                             <h2 className="excursion__header">Wyprawa w góry</h2>
//                             <p className="excursion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//                                 labore et dolore magna aliqua. </p>
//                         </div>
//                         <div className="excursion-buttons">
//                             <a href="#" className="more-info-button">Czytaj wiecej</a>
//                             <button className="single-btn">Rezerwuj</button>
//                         </div>
//                     </div>
//                     <div className="excursion__single-container lwow">
//                         <img src={lwow}/>
//                         <div className="excursion__header-container">
//                             <h2 className="excursion__header">Poznaj niesamowity Lwów!</h2>
//                             <p className="excursion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//                                 labore et dolore magna aliqua. </p>
//                         </div>
//                         <div className="excursion-buttons">
//                             <a href="#" className="more-info-button">Czytaj wiecej</a>
//                             <button className="single-btn">Rezerwuj</button>
//                         </div>
//                     </div>
//                     <div className="excursion__single-container castle">
//                         <img src={castle}/>
//                         <div className="excursion__header-container">
//                             <h2 className="excursion__header">Sredniowieczne zamki Galicji</h2>
//                             <p className="excursion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//                                 labore et dolore magna aliqua. </p>
//                         </div>
//                         <div className="excursion-buttons">
//                             <a href="#" className="more-info-button">Czytaj wiecej</a>
//                             <button className="single-btn">Rezerwuj</button>
//                         </div>
//                     </div>
//                     <div className="excursion__single-container ship">
//                         <img src={ship}/>
//                         <div className="excursion__header-container">
//                             <h2 className="excursion__header">Splyw statkiem rzeka Dnister</h2>
//                             <p className="excursion__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
//                                 labore et dolore magna aliqua. </p>
//                         </div>
//                         <div className="excursion-buttons">
//                             <a href="#" className="more-info-button">Czytaj wiecej</a>
//                             <button className="single-btn">Rezerwuj</button>
//                         </div>
//                     </div>
//                 </div>
//
//             </div>
//         );
//     }
// }
//
// export default ExcursionsInfo;
// import React, {Component} from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import insurance from '../images/insurance.jpg'
// import tourGuide from '../images/tourGuide.jpg'
// import bus from '../images/bus.jpg'
//
// class Services extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <h1 className="services__header">Rezerwujac z nami dostajesz:</h1>
//                 <div className="service-container">
//                     <img src={insurance}/>
//                     <div className="service-description">
//                         <h4 className="service-header">Ubezpieczenie 24/7</h4>
//                         <p className="service__text">Wyruszaj w podróz bez zadnych zmartwien! Wykup pełne ubezpieczenie i ciesz sie beztroskaw podróza w 100%! </p>
//                     </div>
//                 </div>
//                 <div className="service-container">
//                     <div className="service-description">
//                         <h4 className="service-header">Doswiadczonych przewodników</h4>
//                         <p className="service__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                     </div>
//                     <img src={tourGuide}/>
//                 </div>
//                 <div className="service-container">
//                     <img src={bus}/>
//                     <div className="service-description">
//                         <h4 className="service-header">Podróz komfortowymi autobusami</h4>
//                         <p className="service__text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Services;
//
//
// import React, {Component} from 'react';
//
// class Form extends Component {
//     render() {
//         return (
//             <div className="container" style={{border: "1px solid red"}}>
//                 <div className="form__container">
//                     <div className="form__header">
//                         <h1>Rezerwuj teraz!</h1>
//                         <p>Zarezerwuj swoja wymarzona podroz teraz i wyruszaj z nami!</p>
//                     </div>
//                     <form className="form">
//                         <div className="input-single"><input type="text" name="FirstName" placeholder="First name"/></div>
//                         <div className="input-single"> <input type="text" name="lastName" placeholder="Last name"/></div>
//                         <div className="input-single"><input type="email" name="email" placeholder="Your email address"/></div>
//                         <div className="input-single"><input type="tel" name="tel" placeholder="Your phone number"/></div>
//                         <div className="input-single"><input type="tel" name="tel" placeholder="Your phone number"/></div>
//                         <div className="input-single"><input type="number" name="numberOfPeople" placeholder="Select number of travelers"/></div>
//                         <div className="input-single"><input type="date"/></div>
//                         <div className="input-single"><select name="excursions" id="excursions-select">
//                             <option value="">Wybierz wycieczke:</option>
//                             <option value="gory">Wyprawa w góry</option>
//                             <option value="lwow">Pozdnaj niesamowity Lwów!</option>
//                             <option value="zamki">Sredniowieczne zamki Galicji</option>
//                             <option value="Dnister">Splyw statkiem rzeka Dnister</option>
//                         </select></div>
//                         <div className="input-single"><textarea cols="24" rows="4" placeholder="Czy masz jakies pytania?"></textarea></div>
//                         <button className="btn-form">Rezerwuj</button>
//                     </form>
//                 </div>
//
//             </div>
//         );
//     }
// }
//
// export default Form;
//
// import React, {Component} from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faAward} from "@fortawesome/free-solid-svg-icons";
// import {faUserTie} from "@fortawesome/free-solid-svg-icons/faUserTie";
// import {faHandHoldingUsd} from "@fortawesome/free-solid-svg-icons/faHandHoldingUsd";
//
// class WhyUs extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <div className="why-us__container">
//                     <h1 className="why-us__header">Dlaczego my?</h1>
//                     <div className="why-us-reasons">
//                         <div className="single-reason">
//                             <FontAwesomeIcon icon={faAward} className="whu-us-icons" />
//                             <h6>Zostismy docenieni<br/> przez naszych klientów<br/> jako najlepsze lokalne<br/> biuro turystyczne. </h6>
//                         </div>
//                         <div className="single-reason">
//                             <FontAwesomeIcon icon={faHandHoldingUsd} className="whu-us-icons"/>
//                             <h6>Mamy najbardziej konkurencyjne<br/> ceny na rynku.</h6>
//                         </div>
//                         <div className="single-reason">
//                             <FontAwesomeIcon icon={faUserTie} className="whu-us-icons"/>
//                             <h6>Dzialamy juz od 20 lat,<br/> co robi nas najbardziej<br/> doswiadczonym biurem w regionie.</h6>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default WhyUs;
// import React, {Component} from 'react';
//
// class Footer extends Component {
//     render() {
//         return (
//             <div className="container" style={{border: "1px solid purple"}}>
//                 <div className="footer__container">
//                     <a href="#">Logo</a>
//                     <div className="social-media-icons">
//                         <div>FB Icon</div>
//                         <div>TwitterIcon</div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Footer;


// Form validation
//
// import React from 'react';
// import { Formik, Form, Field, ErrorMessage  } from 'formik';
// import { FormGroup, Row, Col, FormLabel, FormControl, FloatingLabel, Button, InputGroup, FormSelect, FormCheck} from "react-bootstrap";
// import * as Yup from "yup";
//
// const SignupSchema = Yup.object().shape({
//     name: Yup.string()
//         .min(2, 'Imię musi posiadać minimum 2 litery!')
//         .max(70, 'Za długie!')
//         .required('Pole wymagane!'),
//     lastName: Yup.string()
//         .min(2, 'Nazwisko musi posiadać minimum 2 litery!')
//         .max(70, 'Za długie!')
//         .required('Pole wymagane!'),
//     email: Yup.string()
//         .email('Email nieważny')
//         .required('Pole wymagane!'),
//     phone: Yup.number().min(9, 'Numer musi posiadać 9 cyfr')
//         .required('Pole wymagane!')
// });
//
// const Formularz = () => (
//     <div className={'container1'}>
//         <h1>Formularz zgłoszeniowy</h1>
//         <Formik
//             initialValues={{
//                 name: '',
//                 lastName: '',
//                 email: '',
//                 phone: '',
//             }}
//             validationSchema={SignupSchema}
//             onSubmit={values => {
//                 // same shape as initial values
//                 console.log(values);
//             }}
//         >
//             {({ errors, touched, handleSubmit, handleChange }) => (
//                 <Form onSubmit={handleSubmit}>
//                     <Row className="mb-3" >
//                         <FormGroup as={Col}>
//                             <FormLabel style={{color: "blue",
//                                 textTransform: "uppercase",
//                                 marginBottom: "10px",
//                                 marginRight: "10px"
//                             }}>Imię</FormLabel>
//                             <Field name="name"  />
//                             {errors.name && touched.name ? (
//                                 <div>{errors.name}</div>
//                             ) : null}
//                             <ErrorMessage name="name" />
//                         </FormGroup>
//
//                         <FormGroup as={Col}>
//                             <FormLabel style={{color: "blue",
//                                 textTransform: "uppercase",
//                                 marginBottom: "10px",
//                                 marginRight: "10px"
//                             }}>Nazwisko</FormLabel>
//                             <Field name="lastName"  />
//                             {errors.lastName && touched.lastName ? (
//                                 <div>{errors.lastName}</div>
//                             ) : null}
//                             <ErrorMessage name="lastName" />
//                         </FormGroup>
//                     </Row>
//                     <Row className="mb-3">
//                         <FormGroup as={Col} >
//                             <FormLabel style={{color: "blue", textTransform: "uppercase"}}>Email</FormLabel>
//                             <Field name="email" type="email" />
//                             {errors.email && touched.email ? (
//                                 <div>{errors.email}</div>
//                             ) : null}
//                             <ErrorMessage name="email" />
//                         </FormGroup>
//                         <FormGroup as={Col} >
//                             <FormLabel style={{color: "blue", textTransform: "uppercase"}}>Telefon</FormLabel>
//                             <FormControl  type="tel" placeholder="+380 XXX XXX XXX" />
//                         </FormGroup>
//
//                     </Row>
//                     <Row className="mb-3">
//                         <Col>
//                             <FormSelect as={Col} style={{marginTop: "15px"}} required>
//                                 <option value="">Wybierz wycieczke:</option>
//                                 <option value="gory">Wyprawa w góry</option>
//                                 <option value="lwow">Pozdnaj niesamowity Lwów!</option>
//                                 <option value="zamki">Sredniowieczne zamki Galicji</option>
//                                 <option value="Dnister">Splyw statkiem rzeka Dnister</option>
//                             </FormSelect>
//                         </Col>
//
//                         <Col>
//                             <FormSelect as={Col} style={{marginTop: "15px"}}>
//                                 <option value="">Wybierz miasto wyjazdu</option>
//                                 <option value="lwow">Lwów</option>
//                                 <option value="luck">Łuck</option>
//                                 <option value="kijow">Kijów</option>
//                                 <option value="tarnopol">Tarnopol</option>
//                             </FormSelect>
//                         </Col>
//
//                         <Col>
//                             <FormSelect as={Col}  style={{marginTop: "15px"}} required>
//                                 <option value="">Wybierz ilość osób:</option>
//                                 <option value="1">1</option>
//                                 <option value="2">2</option>
//                                 <option value="3">3</option>
//                                 <option value="4">4</option>
//                                 <option value="5">5</option>
//                                 <option value="6">6</option>
//                                 <option value="7">7</option>
//                                 <option value="8">8</option>
//                                 <option value="9">9</option>
//                             </FormSelect>
//                         </Col>
//                     </Row>
//                     <Row className="mb-3">
//                         <FormGroup as={Col}
//                                    style={{color: "blue", textTransform: "uppercase"}}>
//                             <FormLabel>Wybierz datę podróży</FormLabel>
//                             <FormControl type="date" required/>
//                         </FormGroup>
//                     </Row>
//                     <Row>
//                         <FormLabel style={{color: "blue", textTransform: "uppercase"}}>Dodatkowe pytania:</FormLabel>
//                         <Col><FormControl as="textarea" style={{height: "150px", marginBottom: "20px"}}/></Col>
//
//                     </Row>
//                     <FormGroup className="mb-3" id="formGridCheckbox"
//                                style={{display: "flex", textAlign: "justify", fontSize: "14px"}}>
//                         <FormCheck
//                             onChange={handleChange}
//                             isInvalid={!!errors.terms}
//                             id="validationFormik0"
//                             style={{marginRight: "30px", fontSize: "20px"}}/>
//                         Oświadczam, że zapoznałem się z „Regulaminem świadczenia usług pośrednictwa ubezpieczeniowego drogą
//                         elektroniczną przez WanderlustTravel i akceptuję zawarte w nim warunki.
//                         Oświadczam, że niniejsza umowa ubezpieczenia spełnia moje wymagania i potrzeby ubezpieczeniowe, przy
//                         uwzględnieniu składki, jaką jestem skłonny zapłacić. Zawieram ją w wyniku swojej świadomej decyzji.
//                         Oświadczam, że zapoznałem się z informacją o przetwarzaniu moich danych osobowych, zawartą w
//                         udostępnionym mi dokumencie „Informacja Administratora danych osobowych”."
//                     </FormGroup>
//
//                     <Button variant="primary"
//                             type="submit"
//                             onClick={handleSubmit}
//                             style={{
//                                 marginBottom: "30px",
//                                 marginLeft: "50%",
//                                 transform: "translateX(-50%)"
//                             }}>
//                         Wyślij zgłoszenie
//                     </Button>
//                 </Form>
//             )}
//         </Formik>
//     </div>
// );
//
// export default Formularz;