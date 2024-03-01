/* eslint-disable react/prop-types */

import {useRef, useEffect, useCallback} from 'react';
import arrowBack from '../../assets/svg/arrow_back.png';
import arrowNext from '../../assets/svg/arrow_next.png';
import styled from 'styled-components';

const CarouselHome = ({
		children,
		controles = false,
		autoplay = false,
		velocity="500",
		interval="5000",
	}) => {
	const carouselHome = useRef(null);
	const intervalCarouselHome = useRef(null);

	// const next = useCallback(() => {
	// 	if(carouselHome.current.children.length > 0){
			
	// 		const firstItem = carouselHome.current.children[0];
	// 		carouselHome.current.style.transition = `${velocity}ms ease-out all`;
	// 		const sizeSlide = carouselHome.current.children[0].offsetWidth;
	// 		carouselHome.current.style.transform = `translateX(-${sizeSlide}px)`;

	// 		const transition = () => {
	// 			carouselHome.current.style.transition = 'none';
	// 			carouselHome.current.style.transform = `translateX(0)`;
	// 			carouselHome.current.appendChild(firstItem);
	// 			carouselHome.current.removeEventListener('transitionend', transition);
	// 		}
	// 		carouselHome.current.addEventListener('transitionend', transition);
	// 	}
	// }, [velocity]);
	
	const next = useCallback(() => {
		if (carouselHome.current && carouselHome.current.children.length > 0) {
		const firstItem = carouselHome.current.children[0];
		carouselHome.current.style.transition = `${velocity}ms ease-out all`;
		const sizeSlide = carouselHome.current.children[0].offsetWidth;
		carouselHome.current.style.transform = `translateX(-${sizeSlide}px)`;
 
		const transition = () => {
			carouselHome.current.style.transition = 'none';
			carouselHome.current.style.transform = `translateX(0)`;
			carouselHome.current.appendChild(firstItem);
			carouselHome.current.removeEventListener('transitionend', transition);
		}
		carouselHome.current.addEventListener('transitionend', transition);
		}
	}, [velocity, carouselHome]);

	const before = () => {
		if(carouselHome.current.children.length > 0){
			const index = carouselHome.current.children.length - 1;
			const lastItem = carouselHome.current.children[index];
			carouselHome.current.insertBefore(lastItem, carouselHome.current.firstChild);
			carouselHome.current.style.transition = 'none';
			const sizeSlide = carouselHome.current.children[0].offsetWidth;
			carouselHome.current.style.transform = `translateX(-${sizeSlide}px)`;
		
			setTimeout(() => {
				carouselHome.current.style.transition = `${velocity}ms ease-out all`;
				carouselHome.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

	useEffect(() => {
		if(autoplay){
			intervalCarouselHome.current = setInterval(() => {
				next();
			}, interval);
	
			carouselHome.current.addEventListener('mouseenter', () => {
				clearInterval(intervalCarouselHome.current);
			});
	
			carouselHome.current.addEventListener('mouseleave', () => {
				intervalCarouselHome.current = setInterval(() => {
					next();
				}, interval);
			});
		}
	}, [autoplay, interval, next]);

	return (
		<Container>
			<ContainerCarousel ref={carouselHome}>
				{children}
			</ContainerCarousel>
			{controles && <Ctls>
				<ButtonL onClick={before}>
					<img src={arrowBack}/>
				</ButtonL>
				<ButtonR  onClick={next}>
					<img src={arrowNext} />
				</ButtonR>
			</Ctls>}
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width:80%;
	margin:auto;
	background: var(
		--Background-Background-pgina-de-inicio,
		linear-gradient(
			180deg,
			rgba(198, 241, 191, 0.56) 0%,
			rgba(103, 189, 234, 0.38) 90.92%,
			rgba(255, 255, 255, 0.75) 127.47%
		),
		#fff
	);
	backdrop-filter: blur(2px);
	overflow: hidden;
	// width:96%;
	// height: auto;
	// margin: auto;
	
`;

const ContainerCarousel = styled.div`
	display: flex;
	flex-wrap: nowrap;
	// width:100%;
	// height:auto;
	// max-width: 100vw;
	// overflow: hidden;
	// margin: 10px 2px
`;

const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: .9s ease all;
	z-index: 10;
	// max-height: 400px; 
	position: relative;
	CardStars {
		width: 100%;
		vertical-align: top;
	}
`;


const Ctls = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const ButtonL = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	left: 0;
	transition: .9s ease all;
`;

const ButtonR = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: -moz-right;
	position: absolute;
	right: 0;
	transition: .1s ease all;
`;
 
export {CarouselHome, Slide};