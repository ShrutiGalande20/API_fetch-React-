import MoviesData from "./MoviesData";


import Card from "./Card";


const Movies = () => {

    // console.log(MoviesData)
    return(
        <>  

        {/* <h1>Movies</h1> */}
            <h1 className="text-center text-4xl text-red-600 my-1 bg-yellow-400">Top 3 Movies for Watch</h1>
            <div className="borderw-[100vw] flex justify-center items-center">
                {
                    MoviesData.map((val, index) => {
                        return(
                            <Card val={val}/>
                        );
                    })
                }
            </div>


        </>
    );
}

export default Movies;