import React, { ChangeEvent, useEffect, useState } from "react";

import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}
const AddToList: React.FC<IProps> = props => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
    id: "",
  });

  const handleClick = (): void => {
    if (!input.name || !input.img || !input.age) {
      return;
    }
    props.setPeople([
      ...props.people,
      {
        name: input.name,
        age: Number(input.age),
        url: input.img,
        note: input.note,
        id: input.id,
      },
    ]);
    setInput({
      name: "fff",
      age: "",
      img: "",
      note: "",
      id: "",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="AddToList">
      <input onChange={handleChange} name="name" type="text" placeholder="name" className="AddToList-input" />
      <input onChange={handleChange} name="age" type="number" placeholder="age" className="AddToList-input" />
      <input onChange={handleChange} name="img" type="url" placeholder="url" className="AddToList-input" />
      <input onChange={handleChange} name="id" type="text" placeholder="id" className="AddToList-input" />
      <textarea onChange={handleChange} name="note" placeholder="note" className="AddToList-input" />
      <button onClick={handleClick} className="AddToList-btn">
        Submit
      </button>
    </div>
  );
};

export default AddToList;
