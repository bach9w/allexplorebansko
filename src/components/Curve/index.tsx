'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { text, curve, translate } from './anim';

const routes: Record<string, string> = {
	'/': 'HOME',
	'/about': 'ABOUT',
	'/contact': 'Contact',
};

const anim = (variants: any) => {
	return {
		variants,
		initial: 'initial',
		animate: 'enter',
		exit: 'exit',
	};
};

interface CurveProps {
	children: React.ReactNode;
	backgroundColor: string;
}
interface SVGProps {
	height: number | null;
	width: number | null;
}

const Curve: React.FC<CurveProps> = ({ children, backgroundColor }) => {
	const router = useRouter();
	const [dimensions, setDimensions] = useState<{
		width: number | null;
		height: number | null;
	}>({ width: null, height: null });

	useEffect(() => {
		function resize() {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		resize();
		window.addEventListener('resize', resize);
		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

	return (
		<div className="page curve" style={{ backgroundColor }}>
			<div
				style={{ opacity: dimensions.width == null ? 1 : 0 }}
				className="background"
			/>
			<motion.p className="route" {...anim(text)}>
				{routes[router.route]}
			</motion.p>
			{dimensions.width != null && <SVG {...dimensions} />}
			{children}
		</div>
	);
};
const SVG: React.FC<SVGProps> = ({ height, width }) => {
	const initialPath = `
        M0 300 
Q${width != null ? width / 2 : 0} 0 ${width} 300
L${width} ${height != null ? height + 300 : 0}
Q${width != null ? width / 2 : 0} ${height != null ? height + 600 : 0} 0 ${
		height != null ? height + 300 : 0
	}
        L0 0
    `;

	const targetPath = `
        M0 300
Q${width != null ? width / 2 : 0} 0 ${width} 300
        L${width} ${height}
Q${width != null ? width / 2 : 0} ${height} 0 ${height}
        L0 0
    `;

	return (
		<motion.svg {...anim(translate)}>
			<motion.path {...anim(curve(initialPath, targetPath))} />
		</motion.svg>
	);
};

export default Curve;
