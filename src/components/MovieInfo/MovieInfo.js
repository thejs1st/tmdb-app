import React, { Component } from "react";
import styles from "./MovieInfo.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class MovieInfo extends Component {
  render() {
    const { pending, error, selectedData } = this.props;

    if (!selectedData) {
      return null;
    }
    const {
      backdrop_path,
      genres,
      original_title,
      overview,
      poster_path,
      production_companies,
      release_date,
      runtime,
      tagline,
      vote_average
    } = selectedData;

    const genresList = genres.map(value => (
      <p key={value.name}>{value.name}</p>
    ));
    const companyList = production_companies.map(value => (
      <p key={value.name}>{value.name}</p>
    ));
    return (
      <div className={cx("MovieInfo")}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="movie-poster"
        />
        <div className={cx("info-box")}>
          <div className={cx("up-info")}>
            <h2>{original_title}</h2>
            <p className={cx("tagline")}>{tagline}</p>
            <p className={cx("overview")}>{overview}</p>
          </div>
          <div className={cx("down-info")}>
            {genresList}
            {companyList}
            <div className={cx("number-box")}>
              <div className={cx("release-date")}>
                <p>Release:</p>
                <p>{release_date}</p>
              </div>
              <div className={cx("runtime")}>
                <p>Runtime:</p>
                <p>{runtime}</p>
              </div>
              <div className={cx("vote-average")}>
                <p>Vote Average:</p>
                <p>{vote_average ? `${vote_average} / 10` : "-"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
