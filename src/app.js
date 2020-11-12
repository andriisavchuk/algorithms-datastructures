import Header from './components/Header'
import ReverseString from './components/algorithms/string/00-ReverseString'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${await ReverseString()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App
