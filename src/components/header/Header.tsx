import React, { useEffect, useState } from 'react'
import '../header/header.css';
import { Link } from 'react-router-dom';
import Overlay from '../modal/modal'
import Overlay2 from '../modal/modalcontact'
import { FormF } from '../form/FormFinal'
import { Contact } from '../contact/Contact'

export default function Header({ full, transparent }) {
	const [isMenuShowed, setIsMenuShowed] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
    const [isContactOpen, setContactIsOpen] = useState(false);
	const body = document.querySelector('body');
	const headerClasses = {
		"true": ["header_transparent", "header__button_transparent", "header__logo_invert", "header__navigation_transparent", "header_absolute"],
		"false": ["", "", "", ""],
	}

	const classes = {
		"burger": "header__burger",
		"burger_pressed": "header__burger_pressed",
		"menu_showed": "header__menu_showed",
	}

	const [burgerClass, setBurgerClass] = useState(classes.burger)
	const [menuClass, setMenuClass] = useState("")

	const burgerClickHandler = () => {
		if (burgerClass === classes.burger) setBurgerClass(classes.burger_pressed)
		else setBurgerClass(classes.burger)
		setIsMenuShowed((prev) => !prev)

		if (!isMenuShowed) {
			setMenuClass("header__menu_showed")
		}
		else {
			setMenuClass("")
		}

	}

	function preventScroll(event) {
		if (isMenuShowed) {
			event.preventDefault();
		}
	}

	function preventKeyScroll(event) {
		if (isMenuShowed) {
			const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

			if (keys[event.keyCode]) {
				event.preventDefault();
			}
		}
	}

	useEffect(() => {
		if (isMenuShowed) {
			// Добавляем обработчики событий, чтобы предотвратить прокрутку
			window.addEventListener('wheel', preventScroll, { passive: false });
			window.addEventListener('scroll', preventScroll, { passive: false });
			window.addEventListener('keydown', preventKeyScroll, false);


			if (!full) {
				body!.style.position = 'fixed'; // Запрещаем прокрутку body
				body!.style.overflowY = "scroll"
				body!.style.width = "100%"
			}
		} else {
			// Удаляем обработчики событий при закрытии меню
			window.removeEventListener('wheel', preventScroll);
			window.removeEventListener('scroll', preventScroll);
			window.removeEventListener('keydown', preventKeyScroll);
			body!.style.position = 'relative';
			body!.style.overflowY = "auto"
		}
		// Возвращаем функцию, которая будет вызвана для очистки событий, когда компонент размонтируется
		return () => {
			window.removeEventListener('wheel', preventScroll);
			window.removeEventListener('scroll', preventScroll);
			window.removeEventListener('keydown', preventKeyScroll);
		};
	}, [isMenuShowed]);


	return (
		<header className={`header ${headerClasses[transparent][0]}`}>
			<div className={`header__menu ${menuClass}`}>
				<div className="header-menu__container">
					<div className="header-menu__header">
						<div className="header__buttons">
							<button className={`header__button ${headerClasses[transparent][1]}`}>
								Eng
							</button>
							<button className={`header__button ${headerClasses[transparent][1]}`}>
								<img src='../images/icons/change-theme.svg'></img>
							</button>

						</div>
					</div>
					<nav className={`header-menu__navigation ${headerClasses[transparent][3]}`}>
						<ul className="header-menu-navigation__list">
							<li className="header-menu-navigation__item"><Link to="/" className="header-menu-navigation__link">Ho<span className='cursive'>me</span></Link></li>
							<li className="header-menu-navigation__item"><Link to="/" className="header-menu-navigation__link"><span className='cursive'>Ab</span>out</Link></li>
							<li className="header-menu-navigation__item"><Link to="/" className="header-menu-navigation__link">Con<span className='cursive'>tacts</span></Link></li>
							<li className="header-menu-navigation__item"><Link to="/" className="header-menu-navigation__link"><span className='cursive'>Hot</span>els</Link></li>
							<li className="header-menu-navigation__item"><Link to="/" className="header-menu-navigation__link">Visa S<span className='cursive'>ervices</span></Link></li>
							<li className="header-menu-navigation__item"><Link to="/" className="header-menu-navigation__link"><span className='cursive'>To</span>urs</Link></li>
						</ul>
					</nav>

				</div>
			</div>

			<div className="header__container">
				<Link to="/" className={`header__logo ${headerClasses[transparent][2]}`}>
					<img src='../images/icons/Logo.svg'></img>
				</Link>
				<nav className={`header__navigation ${headerClasses[transparent][3]}`}>
					<Link to="/" className="header-navigation__find-hotel">
						<div className={`header__button find-hotel__button ${headerClasses[transparent][1]}`}>
							<img src='../images/icons/Airplane.svg'></img>
						</div>
						{/* <p className='find-hotel__cursive'>Find a hotel for a trip</p> */}
						<p className='find-hotel__normal'>Find a hotel for a trip</p>

					</Link>
					<div className="header-navigation__main-links">
						<Link to="/destinations" className="header-navigation__link"><p>Destinations</p><span>+</span></Link>
						<Link to="/rent" className="header-navigation__link"><p>Rentals</p><span>+</span></Link>
						<Link to="/types" className="header-navigation__link"><p>Types of trips</p><span>+</span></Link>
					</div>
					<Link to="/meet" className="header-navigation__meet">Meet + Greet Services</Link>
				</nav>
				<div className="header__buttons">
					<a onClick={() => setContactIsOpen(true)}><button className={`header__button ${headerClasses[transparent][1]}`}>
						<img src='../images/icons/Phone.svg'></img>
					</button>
					</a>
					<Overlay2 handleClose={() => setContactIsOpen(false)} isContactOpen={isContactOpen}>
                        <Contact />
                    </Overlay2>
					<a onClick={() => setIsOpen(true)}><button className={`header__button ${headerClasses[transparent][1]}`}>
						<img src='../images/icons/Email.svg'></img>
					</button>
					</a>
					<Overlay handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                        <FormF />
                    </Overlay>
					<button className={`header__button ${burgerClass} ${headerClasses[transparent][1]}`} onClick={burgerClickHandler}>
						<div className="burger__slice burger__top"></div>
						<div className="burger__slice burger__middle"></div>
						<div className="burger__slice burger__bottom"></div>
					</button>
				</div>
			</div>
		</header>
	)
}
