export const Person = ({ person }) => {
    console.log(person)
  return (
    <h2>
      I {person.name} studying {person.course}
    </h2>
  );
};
