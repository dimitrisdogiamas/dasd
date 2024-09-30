function MyButton() {
  return (
    <button>i am a button</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to  my app</h1>
      <MyButton />
    </div>
  );
} // here we nest the button element to the default function 

//when it starts with a capital then it's a react component
//the export default is to export the function 