import '../index.css';


import List from "./list"


function Addstudent(props) {
  
  return (
    <div>
      <div >
        <h1 className="text-5xl" >Students List :</h1>
        
        </div>
        <div >
        {
          props.student.map((item, index) => {
            return (
              <List id={item.id} item={item} index={index} setFavoriteStudents={props.setFavoriteStudents} favoriteStudents={props.favoriteStudents} />
            )
          })
        }
      </div>
    </div>

  );
}

export default Addstudent;