import { Person } from "./Person";
export const NameList = () => {
  //   const names = ["apple", "orange", "banana", "grapes"];
  //   const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);

  const persons = [
    {
      id: 1,
      name: "Sharmila",
      course: "java",
    },
    {
      id: 2,
      name: "Sravani",
      course: ".Net",
    },
    {
      id: 3,
      name: "Sindhu",
      course: ".Net",
    },
  ];
  const personList = persons.map((person) => {
    return <Person key={person.id} person={person}></Person>;
  });
  return <div>{personList}</div>;
};
