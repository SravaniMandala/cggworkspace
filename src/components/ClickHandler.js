const ClickHandler = () => {
  const clickHandler = (event, click = 1) => {
    console.log("Button Clicked", event, click);
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>
    </div>
  );
};

export default ClickHandler;
