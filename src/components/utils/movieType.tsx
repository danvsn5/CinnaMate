type movieType = {
    /**
     *  Identifier for individual unique more
     */
    id: number
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
    releaseDate: string
        /**
     *  Unique poster path for movie that can be used to query a specific poster image from tmdb
     */
    posterPath: string
        /**
     *  Unique backdrop path for movie that can be used to query a specific backdrop image from tmdb
     */
    backdropPath: string
}

export default movieType