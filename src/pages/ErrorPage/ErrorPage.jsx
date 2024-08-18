import React from 'react'
import './ErrorPage.scss'

const ErrorPage = () => {
	return (
		<>
			<div className='error__label'>
				<h1>
					Oops... Looks like someone
					<span className='warning-color'> stole</span> the page!
				</h1>
			</div>
		</>
	)
}

export default ErrorPage
