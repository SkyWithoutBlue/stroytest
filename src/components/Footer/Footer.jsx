import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import './Footer.scss'
function Footer() {
	return (
		<section className='footer'>
			<div className='container footer__wrapper'>
				<NavHashLink href='/' className='footer__wrapper--logo'>
					<p className='warning-color'>Строй</p>
					<p>Хим</p>
					<p className='warning-color'>Торг</p>
				</NavHashLink>
				<div className='footer__wrapper--contacts'>
					<div>
						<p className='footer__wrapper--contacts--link contacts__label'>
							Почта:
						</p>
						<a
							href='mailto:stroihimchita@mail.ru'
							className='footer__wrapper--contacts--link'
						>
							stroihimchita@mail.ru
						</a>
						<p className='footer__wrapper--contacts--link'>Адрес:</p>
						<p className='footer__wrapper--contacts--link'>
							г. Чита, Романовский тракт, 61а, склад № 3
						</p>
					</div>
					<div className='footer__wrapper--contacts--link'>
						<p className='contacts__label'>Номер</p>
						<a href='tel:+73022714848'>+7 (3022) 71-48-48</a>
						<a href='tel:+79242750898'>+7 (924) 275-08-98</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer
