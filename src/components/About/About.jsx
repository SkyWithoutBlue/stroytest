import React, { useEffect } from 'react'

import bigElipseLeft from '/Elipse_big_left.svg'
import bigElipse from '/Ellipse_big.svg'

function About() {
	useEffect(() => {
		// Register IntersectionObserver
		const io = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('elipse__big--animation')
				}
			})
		})

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						document.querySelectorAll('.header__link').forEach(link => {
							let id = link.getAttribute('href').replace('#', '')
							if (id === entry.target.id) {
								link.classList.add('header__link--active')
							} else {
								link.classList.remove('header__link--active')
							}
						})
					}
				})
				function onEntryTextAbout(entry) {
					entry.forEach(change => {
						if (change.isIntersecting) {
							change.target.classList.add('element-show')
						}
					})
				}

				let observer = new IntersectionObserver(onEntryTextAbout)
				let elements = document.querySelectorAll('.element-animation')

				for (let elm of elements) {
					observer.observe(elm)
				}
			},
			{
				threshold: 0.5,
			}
		)
		const boxElList = document.querySelectorAll('.main__elipse--big')
		boxElList.forEach(el => {
			io.observe(el)
		})
		document.querySelectorAll('section').forEach(section => {
			observer.observe(section)
		})
	})
	return (
		<section className='main__about' id='about' name='about'>
			<div className=' main__about--wrapper'>
				<img className='main__elipse--big' src={bigElipse} alt='' />
				<img className='main__elipse--big--left' src={bigElipseLeft} alt='' />
				<span className='left-span l-1'></span>
				<img />
				<div>
					<div className='main__about--label'>
						<p className='warning-color element-animation main__about--label--text'>
							Строй<span className='warning-color'>Хим</span>Торг
						</p>
					</div>
					<div className='text--container'>
						<p className='element-animation about-text'>
							Наши добавки используются для:
						</p>
						<p className='element-animation about-text'>
							<span className='warning-color '>увеличения</span> подвижности
							бетонной смеси;
						</p>
						<p className='element-animation about-text'>
							<span className='warning-color element-animation about-text'>
								замедления
							</span>
							или
							<span className='warning-color'> ускорения </span> схватывания;
						</p>
						<p className='element-animation about-text'>
							<span className='warning-color'>бетонирования</span> при
							отрицательных температурах;
						</p>
						<p className='element-animation about-text'>
							<span className='warning-color'>производства </span>
							вибропрессованных изделий;
						</p>
						<p className='element-animation about-text'>
							<span className='warning-color'>улучшения </span> морозостойкости
							и водонепроницаемости;
						</p>
						<p className='element-animation about-text'>
							<span className='warning-color'>производства </span> пенобетона.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
