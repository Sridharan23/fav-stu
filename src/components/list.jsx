import '../index.css';



function List(props) {
  const { item, favoriteStudents, setFavoriteStudents } = props;


  const isInFavoriteList = favoriteStudents.some(fav => fav.id === item.id);

  function add() {

    setFavoriteStudents([...favoriteStudents, item])
  }

  return (
    <div>

      <div className='flex justify-between items-center '>
        <div>
          <p className="text-2xl m-5 ">{props.index + 1}. {item.stuname}</p>
        </div>
        <div>
          <button
            className="text-1xl p-1 bg-red-900 border  border-white  "

            onClick={add}
            disabled={isInFavoriteList}
          >
            {
              isInFavoriteList ? 'Added to Favorites'

                : 'Add to Favorite'
            }
          </button>
        </div>
      </div>



    </div>
  );
}

export default List;




