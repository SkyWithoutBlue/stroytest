import { InvisibleSmartCaptcha } from '@yandex/smart-captcha'
import { useCallback, useState } from 'react'

const InvisibleCaptcha = () => {
	const [token, setToken] = useState('')
	const [visible, setVisible] = useState(false)

	const handleChallengeHidden = useCallback(() => setVisible(false), [])

	const handleButtonClick = () => setVisible(true)

	return (
		<>
			<button
				onClick={handleButtonClick}
				className='submit__button'
				name='submit'
				type='submit'
				id='contact-submit'
				data-submit='...Отправка'
			>
				Отправить
			</button>
			<InvisibleSmartCaptcha
				className='InvisibleSmartCaptcha'
				sitekey='<ключ_клиента>'
				onSuccess={setToken}
				onChallengeHidden={handleChallengeHidden}
				visible={visible}
			/>
		</>
	)
}
export default InvisibleCaptcha
