import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Glide from "@glidejs/glide"
import "../../../node_modules/@glidejs/glide/dist/css/glide.core.css"
import "../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css"

import "./MovieBanner.css"

const sliderConfiguration = {
	autoplay: 5000,
	perView: 1,
	startAt: 0,
	type: "slider",
	focusAt: 'center',
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
					<NavLink className='glide__slide' to={`/movies/${movie.id}`}>
						<div className="movie-banner">
							<img className="banner-poster" alt={movie.title} src={movie.poster_path} />
							<img className="banner-image" alt={movie.title} src={movie.backdrop_path} />
						</div>
					</NavLink>
				)
		})
		return (
			<div className="glide">
				<div className="glide__track" data-glide-el="track">
					<ul className="glide__slides">
						{banners}
					</ul>
				</div>
			</div>
		)
	}
}


export default MovieBanner
