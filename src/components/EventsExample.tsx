import { useRef, FC, useState } from "react";

interface IEventsExampleProps {}

export const EventsExample: FC<IEventsExampleProps> = ({}) => {
  const [value, setValue] = useState("");
  const [isDrag, setIsDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG");
  };
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("drop");
  };

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      <input
        type="text"
        ref={inputRef}
        placeholder="неуправляемый инпут"
      />
      <button onClick={clickHandler}>Click</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "red" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "green" : "grey",
          margin: 10,
        }}
      ></div>
    </div>
  );
};
