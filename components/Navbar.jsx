import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { Link as Scroll } from 'react-scroll';
import { Divider, Logo } from '.';
import Socials from '../components/Socials';

const menuItems = [
	{ icon: '', label: 'Token', to: 'section-token', isExternal: false },
	{ icon: '', label: 'BUIDL Plan', to: 'section-roadmap', isExternal: false },
	{ icon: '', label: 'About', to: 'section-fundamentals', isExternal: false },
	{ icon: '', label: 'FAQ', to: 'section-faq', isExternal: false },
	{
		icon: '',
		label: 'News',
		to: 'https://blog.kromatika.finance/',
		isExternal: true,
	},
];

const cta = [
	{
		label: 'Launch Dapp',
		to: 'https://app.kromatika.finance/#/pool',
		isExternal: true,
		className: 'btn btn-solid',
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className='padding-x' style={{ height: '107px', width: '100%' }}>
			<div className='navbar'>
				<Logo path='/' />
				<Divider type='vertical' h='64.5px' />
				<nav className='navbar__nav'>
					<ul className='navbar__list'>
						{menuItems.map(({ icon, label, to, isExternal }, i) =>
							isExternal ? (
								<li className='navbar__item' key={i}>
									<Link href={to}>
										<a
											href='https://blog.kromatika.finance/'
											target='_blank'
											rel='noopener noreferrer'>
											{icon}
											{label}
										</a>
									</Link>
								</li>
							) : (
								<li className='navbar__item' key={i}>
									<Scroll
										activeClass='active'
										to={to}
										spy={true}
										smooth={true}
										duration={500}
										offset={50}>
										{icon}
										{label}
									</Scroll>
								</li>
							)
						)}
					</ul>
				</nav>
			</div>
			<div className='btn-group'>
				{cta.map(({ label, to, className }, i) => (
					<Link href={to} passHref={true} key={i}>
						<motion.a
							className={className}
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
							whileTap={{ scale: 0.9 }}>
							{label}
						</motion.a>
					</Link>
				))}
			</div>

			<div className='toggle-menu' onClick={() => setOpen(!open)}>
				{open ? <CgClose /> : <CgMenuRight />}
			</div>

			{open && (
				<div className='menu'>
					<nav className='navbar__nav'>
						<ul className='navbar__list'>
							{menuItems.map(({ icon, label, to, isExternal }, i) =>
								isExternal ? (
									<li className='navbar__item' key={i}>
										<Link href={to}>
											<a
												href='https://blog.kromatika.finance/'
												target='_blank'
												rel='noopener noreferrer'>
												{icon}
												{label}
											</a>
										</Link>
									</li>
								) : (
									<li className='navbar__item' key={i}>
										<Scroll
											activeClass='active'
											to={to}
											spy={true}
											smooth={true}
											duration={500}
											offset={-150}>
											{icon}
											{label}
										</Scroll>
									</li>
								)
							)}
						</ul>
					</nav>
					<div className='btn-group'>
						{cta.map(({ label, to, className }, i) => (
							<Link href={to} key={i}>
								<a
									className={`${className} btn-block`}
									target='_blank'
									rel='noopener noreferrer'>
									{label}
								</a>
							</Link>
						))}
					</div>
					<Socials />
				</div>
			)}
		</header>
	);
};

export default Navbar;
