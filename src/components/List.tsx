import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  //TS Function to render element
  const renderList = (): JSX.Element[] => {
    return people.map(person => {
      return (
        <li key={person.id} className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt="Person's image" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  // Render itself
  return <ul>{renderList()}</ul>;
};

export default List;

// function List: React.FC<IProps>(props) {
//   return <div>I am a list</div>;
// }
