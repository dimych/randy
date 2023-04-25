import { ProductCard, productCardPropsType } from "./ProductCard";
import { ProductsCart } from "./ProductsCart";

export function Shop(){
    return(
      <div>
        <ProductsCart />
      <button>add-to-cart</button>
      <ProductCard name='milk' price={2} img='fotos-da-torre-de-paris.jpg'/>
      <ProductCard name='bread' price={5}   img='fotos-da-torre-de-paris.jpg'/>
      <ProductCard name='iphone' price={1092} img='fotos-da-torre-de-paris.jpg'/>
      </div>
    )
  }