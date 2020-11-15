import Header from './components/Header'
import ReverseNumber from './components/algorithms/number/02-ReverseNumber'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${ReverseNumber()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App
