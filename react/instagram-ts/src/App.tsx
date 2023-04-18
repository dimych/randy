import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


type UserType = {
  id: number;
  name: string;
  likes: number;
  dateOfBirth: number;
  addedToFavorite: boolean;
  photoName: string;
};

function getUsers() {
  const user1 = {
    id: 1,
    name: "Randy",
    likes: 198,
    dateOfBirth: 2004,
    addedToFavorite: true,
    photoName: "fotos-da-torre-de-paris.jpg",
  };

  const user2 = {
    id: 2,
    name: "Dima",
    likes: 201,
    dateOfBirth: 2001,
    addedToFavorite: true,
    photoName: "polaris-dream.jpg",
  };

  const user3 = {
    id: 3,
    name: "Levy",
    likes: 98,
    dateOfBirth: 1999,
    addedToFavorite: false,
    photoName: "istockphoto612x612.jpg",
  };

  const user4 = {
    id: 4,
    name: "Max",
    likes: 532,
    dateOfBirth: 1998,
    addedToFavorite: true,
    photoName: "pexels-anjana.jpg",
  };

  const userbase: UserType[] = [user1, user2, user3, user4];
  return userbase;
}

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
