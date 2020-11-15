import Header from './components/Header'
import ReverseVowels from './components/algorithms/string/02-ReverseVowels'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${ReverseVowels()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App
