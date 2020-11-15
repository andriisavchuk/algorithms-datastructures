import Header from './components/Header'
import MaxChar from './components/algorithms/string/04-MaxChar'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${MaxChar()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App
