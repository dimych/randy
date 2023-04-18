import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
.render( <Shop />)


function Shop(){
  return(
    <div>
    <button>add-to-cart</button>
    <ProductCard name='milk' price={2} img='fotos-da-torre-de-paris.jpg'/>
    <ProductCard name='bread' price={5}   img='fotos-da-torre-de-paris.jpg'/>
    <ProductCard name='iphone' price={1092} img='fotos-da-torre-de-paris.jpg'/>
    </div>
  )
}

type productCardPropsType = {
name: string
price: number
img: string
}

function ProductCard (props: productCardPropsType) {
return <div>{props.name} {props.price}
<img src={ "images/" + props.img }/>
</div>
}

// function ProductCard (props: productCardPropsType) {
//   return <div>
//     <ProductTitle product={props}/>
//     <ProductPrice />
//     <ProductImage />
//   <img src={ "images/" + props.img }/>
//   </div>
//   }
