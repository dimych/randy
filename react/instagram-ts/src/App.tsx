import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

 const [users] = useState(getUsers)

 const photosElements = users.map(user =>  <Photo src={user.photoName} likes={user.likes} />)
 //const photosElements = [<Photo />, <Photo />, <Photo />, <Photo />]



 const photos2Elements = users.map(user =>  <Photo2 
  data={user} />)


  return (
    <div className="App">
     {
      photos2Elements
     }


    
    </div>
  )
}


// component
//{ src, likes }

type PhotoPropsType = {
  src: string
  likes: number
}

function Photo(props: PhotoPropsType) {

 // const [count, setCount] = useState(0) // hook function

  return <div>
    <img style={ { width: '100px' } } src={ "images/" + props.src} />
    {props.src}
    <span>{props.likes}</span>
    {/* <button onClick={ () => { setCount(count + 1)  } }>{count} </button> */}
  </div>
}

type Photo2 = {
  /**
   * data - is user object. photoName and likes will be used from this object 
   */
  data: UserType
}
function Photo2(props: Photo2) {

  // const [count, setCount] = useState(0) // hook function
 
   return <div>
     <img style={ { width: '100px' } } src={ "images/" + props.data.photoName} />
     <span>{props.data.likes}</span>
     <Like user={props.data} />
     {/* <button onClick={ () => { setCount(count + 1)  } }>{count} </button> */}
   </div>
 }
 
 type LikePropsType = {
  user: UserType
 }
 function Like(props: LikePropsType) {
  if (props.user.addedToFavorite === true) {
    return <img src="images/thumbs-up.jpg"  style={ {width:'50px' }  }  />
  } else {
    return <img src="images/940_like_icon.jpg" alt="" style={ {width:'50px' } } />
  }
}


export default App
