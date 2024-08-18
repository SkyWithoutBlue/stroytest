import React, { Suspense, useState } from 'react'
import LoadingPage from '../LoadingPage/LoadingPage'
import './productsPage.scss'

function ProductsPage() {
	const [isButtonClicked, setsButtonClicked] = useState(false)

	const handleToggle = () => setsButtonClicked(prev => !prev)

	return (
		<Suspense fallback={<LoadingPage />}>
			<div className='productsPage__wrapper'>
				<p className='productsPage__wrapper--label'>Каталог товаров</p>
				<ul className='productsPage__wrapper--menu'>
					<li className='productsPage__wrapper--item'>
						<button
							className='productsPage__wrapper--button'
							onClick={handleToggle}
						>
							Узнать больше
						</button>
					</li>
				</ul>
				{isButtonClicked && (
					<div className='products__page--wrapper'>
						<div className='product__overlay'>
							<button
								className='close__button'
								onClick={() => setsButtonClicked(prev => !prev)}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									x='0px'
									y='0px'
									width='40'
									height='40'
									viewBox='0 0 30 30'
								>
									<path d='M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z'></path>
								</svg>
							</button>
							<div className='product__content--label'>Арматура</div>
							<div className='product__content--flex'>
								{/* IMAGE */}
								<img className='test_image' src='/armatura.png' alt='' />
								<div className='product__content--description'>
									<h1 className='product__content--text'>Рифленая:</h1>
									<p className='product__content--text-sub'>
										6мм6000 /в бухтахСт.25Г2С; Ст3ПС/СП 8мм6000 /11700/в
										бухтахСт.25Г2С; Ст35ГС; Ст3ПС; Ст3ПС/СП 10мм11700/в
										бухтахСт.25Г2С; Ст3ПС; Ст35ГС 12ммн/д от 6000-11700Ст.25Г2С;
										Ст3ПС 14ммн/д от 6000-11700Ст.25Г2С; Ст3ПС/СП 16ммн/д от
										6000-11700Ст.25Г2С; Ст3ПС 18ммн/д от 6000-11700Ст3ПС
									</p>
									<p className='product__content--text--notification'>
										Стоимость и наличие уточняйте у специалистов
										<span className='warning-color'>Строй</span>
										<span>Хим</span>
										<span className='warning-color'>Торг</span>
									</p>
								</div>
							</div>
							<button className='product__content--button'>
								Заказать сейчас
							</button>
						</div>
					</div>
				)}
			</div>
		</Suspense>
	)
}

export default ProductsPage
