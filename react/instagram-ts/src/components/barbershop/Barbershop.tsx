import { useState } from "react";

export const Barbershop = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export const Header = () => {
  return (
    <div>
      <b>Header will be here</b>
    </div>
  );
};
type MasterType = {
  photoFile: string;
  name: string;
  price: number;
};

export const Content = () => {
  // todo: typescript topic: generic
  const [masters, setMasters] = useState<MasterType[]>([
    { name: "randy", photoFile: "file1.png", price: 1 },
    { name: "dima", photoFile: "file2.png", price: 2 },
    { name: "ivan", photoFile: "file3.png", price: 0.2 },
  ]); // todo: react: hooks, useState

  return (
    <div>
      <button
        onClick={() => {
          const newMaster: MasterType = {
            name: "uknown",
            photoFile: "file4",
            price: 0,
          };

          // db.push(newMaster) mutable version -> avoid this in react
          const newMasters = [newMaster, ...masters]; // todo: destructuring
          setMasters(newMasters);
        }}
      >
        +
      </button>
      <hr />

      {masters.map((m) => (
        <Master name={m.name} photoFile={m.photoFile} price={m.price} />
      ))}
    </div>
  );
};

export const Master = (props: MasterType) => {
  return (
    <div>
      <img src={props.photoFile} />
      name: {props.name}, price {props.price} $
    </div>
  );
};

export const Footer = () => {
  return (
    <div>
      <b> Footer will be here</b>
    </div>
  );
};

type IdObject = {
  id: number;
};

const a: number = 2;
const arr: number[] = [2, 3, 4]; // todo: array typing
const arr2: boolean[] = [true, true, false]; // todo: array typing
const arr3: IdObject[] = [{ id: 1 }, { id: 2 }, { id: 3 }]; // todo: array typing

// todo: immutability , immutable changing
let db: MasterType[] = [
  { name: "randy", photoFile: "file1.png", price: 1 },
  { name: "dima", photoFile: "file2.png", price: 2 },
  { name: "ivan", photoFile: "file3.png", price: 0.2 },
];

const newMaster: MasterType = { name: "uknown", photoFile: "file4", price: 0 };

// db.push(newMaster) mutable version -> avoid this in react
db = [newMaster, ...db]; // todo: destructuring
