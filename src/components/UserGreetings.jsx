export const UserGreetings = () => {
  const isLoggenIn = true;
  return (
    // <h1>Welcome {isLoggenIn && 'CGG'}</h1>
    <h1>Welcome{isLoggenIn ? "CGG" : " "}</h1>
  );
};
