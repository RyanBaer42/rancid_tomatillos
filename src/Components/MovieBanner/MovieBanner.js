import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Glide from "@glidejs/glide"
import PropTypes from 'prop-types'
import "../../../node_modules/@glidejs/glide/dist/css/glide.core.css"
import "../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css"

import "./MovieBanner.css"

const sliderConfiguration = {
	autoplay: 5000,
	perView: 1,
	startAt: Math.floor(Math.random() * 40),
	type: "slider",
	focusAt: 'center',
	hoverpause: true,
};


class MovieBanner extends Component {
	constructor() {
		super()
		this.state = {}
	}

	componentDidMount() {
		const slider = new Glide('.glide', sliderConfiguration)
		slider.mount()
	}

	render() {
		const { movies } = this.props
		const banners = movies.map(movie => {
			return (
					<NavLink key={movie.id} className='glide__slide' to={`/movies/${movie.id}`}>
						<div className="movie-banner">
							<img className="banner-poster" alt={movie.title} src={movie.poster_path} />
							<img className="banner-image" alt={movie.title} src={movie.backdrop_path} />
						</div>
					</NavLink>
				)
		})
		return (
			<div className="glideContainer">
				<div className="glide">
					<div className="glide__track" data-glide-el="track">
						<ul className="glide__slides">
							{banners}
						</ul>
					</div>
						<div className="glide__arrows" data-glide-el="controls">
										<button className="glide__arrow glide__arrow--left" data-glide-dir="<">&#x3c;</button>
										<button className="glide__arrow glide__arrow--right" data-glide-dir=">">&#x3e;</button>
						</div>
				</div>
			</div>
		)
	}
}

export default MovieBanner

MovieBanner.propTypes = {
	movies: PropTypes.array.isRequired,
};