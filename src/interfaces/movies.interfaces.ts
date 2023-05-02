export type TMovieReq = {
    name: string
    description?: string | undefined
    duration: number
    price: number
}


// type iMovieUpdate = DeepPartial<Movie>
// type iMovieRepo = Repository<Movie>