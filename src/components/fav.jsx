import '../index.css';
function Fav(props) {
    var favoriteStudents = props.favoriteStudents;

    function remove(removeid) {

        var temp = favoriteStudents.filter(item => {
            if (item.id === removeid) {
                return false
            }
            else {
                return true
            }
        })
        props.setFavoriteStudents(temp)
    }

    return (
        <div>
            <h1 className='text-5xl'>Favorite Students List :</h1>
            <div>
                {
                    favoriteStudents.length > 0 ? favoriteStudents.map((item, index) => {
                        return (
                            <div className='flex justify-between items-center '>
                                <p className="text-2xl m-5 ">{index + 1}. {item.stuname}</p>
                                <button
                                    onClick={() => remove(item.id)}
                                    className="text-2xl p-1 bg-red-900 border  border-white  mr-5 ">
                                    Remove
                                </button>
                            </div>
                        );
                    }) : <p className='font-medium text-4xl text-red-900 m-5'>Add Your favorite student ?</p>
                }
            </div>
        </div>
    );
}

export default Fav;