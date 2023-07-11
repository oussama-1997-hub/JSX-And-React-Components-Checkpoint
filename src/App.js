import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const FirstName = "Oussama"
  return (
    <div className="App">
      
      
      
      <Card style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <h2>Price :</h2> <Price/>
        <p>
          <Description/>
        </p>
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
    <p>{FirstName ? `Hello, ${FirstName}`: "Hello, there !"}</p>
    <p>{FirstName ? <Image/>: ""}</p>
  
      

    </div>
  );
}

export default App;
