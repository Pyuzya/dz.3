import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './components/Cards';

function App() {
    return (
        <div className='d-flex'>
            <Cards id='cards' image>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </Cards>
            <Cards id='cards' image />
            <Cards id='cards'>
                <h5 className="card-title">Special title treatment</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </Cards>
        </div>
    );
}

export default App;
