type movieType = {
    /**
     *  Identifier for individual unique more
     */
    id: string

    /**
     *  Title of movie
     */
    title: string

    /**
     *  Overview for movie
     */
    overview: string

    /**
     *  Tagline for movie
     */
    tagline: string

    /**
     *  Release date for movie
     */
    release_date: string

    /**
     *  Unique poster path for movie that can be used to query a specific poster image from tmdb
     */
    poster_path: string

    /**
     *  Unique backdrop path for movie that can be used to query a specific backdrop image from tmdb
     */
    backdrop_path: string

}

export default movieType