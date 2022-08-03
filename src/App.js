import cat from './images/cat.jpg';
import cat2 from './images/cat2.jpeg';
import cat3 from './images/cat3.jpeg';
import cat4 from './images/cat4.jpeg';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="contacts">
         <Contacts 
            img={cat}
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
        />
        <Contacts
            img={cat2}
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"
        />
        <Contacts 
            img={cat3}
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
        />
        <Contacts 
            img={cat4}
            name="Pumpkin"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.com"
        /> 
    </div>
  )
}

export default App;
