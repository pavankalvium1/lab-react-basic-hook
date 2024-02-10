import UseHooks from "./component/second";
import First from "./component/first";
import "./App.css";

function App() {
  return (
    <div className="App">
      <First.Provider value="In the heart of a bustling city, Lily discovered an antique bookstore tucked away on a forgotten street. Intrigued, she entered and found an ancient tome with a mysterious aura. As she flipped through its pages, the world around her blurred, and she found herself in a medieval kingdom. Tasked with solving a riddle to return home, Lily embarked on a quest that unveiled her inner courage. Alongside newfound friends, she faced mythical creatures and enchanted challenges. The journey transformed her, and when she finally cracked the riddle, she returned to the bookstore, forever changed. The once-hidden shop had vanished, leaving only memories of an extraordinary adventure.">
        <UseHooks />
      </First.Provider>
    </div>
  );
}

export default App;