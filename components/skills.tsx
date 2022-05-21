import React, { useContext, useRef } from 'react';
import styles from '../styles/skills.module.css'
import { ScrollContext } from '../utils/scroll-observer'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
	const progress = sectionProgress - blockNo
	if (progress >= 0 && progress < 1) {
		return 1
	}
	return 0.2
}

const Skills: React.FC = () => {
	const { scrollY } = useContext(ScrollContext)
	const refContainer = useRef<HTMLDivElement>(null)
	const numOfPages = 4
	let progress = 0
	const { current: elContainer } = refContainer
	
	if (elContainer) {
		const { clientHeight, offsetTop } = elContainer
		const screenH = window.innerHeight
		const halfH = screenH / 2
		const percentY = Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight
		progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
	}

	return (
		<div ref={refContainer} className="bg-black text-white">
			<div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
				<div className="leading-[1.15]">
					<div className={styles.skillText} style={{opacity: opacityForBlock(progress, 0)}}>We understand hassle-free productivity.</div>
					<span className={`${styles.skillText} inline-block after:content-['_']`} style={{opacity: opacityForBlock(progress, 1)}}>
						Carry your links anywhere just by using your memory, no effort required.
					</span>
					<span className={`${styles.skillText} inline-block`} style={{opacity: opacityForBlock(progress, 2)}}>
						Connecting the world together, 0 links at a time because this is just a fancy website.
					</span>
					<span className={`${styles.skillText} inline-block`} style={{opacity: opacityForBlock(progress, 3)}}>
						Absolutely no functionality attached.
					</span>
					<br />
					<br />
					<br />
				</div>
			</div>
		</div>
	)
}

export default Skills