import './App.css'
import { useQuizStore } from './store/useQuizStore'

function App() {
  const { questions } = useQuizStore()

  return (
    <>
      <pre>{JSON.stringify(questions, null, 2)}</pre>
    </>
  )
}

export default App