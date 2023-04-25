export type productCardPropsType = {
  name: string;
  price: number;
  img: string;
};

export function ProductCard(props: productCardPropsType) {
  return (
    <div>
      {props.name} {props.price}
      <img src={"images/" + props.img} />
    </div>
  );
}

export const a = 34;


// function ProductCard (props: productCardPropsType) {
//   return <div>
//     <ProductTitle product={props}/>
//     <ProductPrice />
//     <ProductImage />
//   <img src={ "images/" + props.img }/>
//   </div>
//   }
    
