import './App.css';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import AddProducts from './components/AddProducts';
import ListProducts from './components/ListProducts';
import Footer from './components/Footer';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
const marginTop = {
    marginTop:"20px"
};
  return (
    <Router>
      <Navigation/>
      <Container>
          <Row>
              <Col lg ={12} style={marginTop}>
                  <Switch>
                      <Route path="/" exact component={Welcome, ListProducts}/>
                      <Route path="/edit/:id" exact component={AddProducts}/>
                      <Route path="/add" exact component={AddProducts}/>
                  </Switch>
               </Col>
          </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
