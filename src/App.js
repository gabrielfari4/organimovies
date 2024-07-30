import Form from './components/Form';
import Header from './components/Header';


function App() {

  const genre = [
    'Ação',
    'Aventura',
    'Comédia',
    'Drama',
    'Documentário',
    'Suspense',
    'Terror',
  ]

  return (
    <div className="App">
      <Header />
      <Form genre={genre}/>
    </div>
  );
}

export default App;
