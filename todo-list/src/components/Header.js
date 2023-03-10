import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add as addTodo } from '../state/todos'

function Header() {
  const [input, setInput] = useState('')
    const dispatch = useDispatch()


  const handleAddTodo = e => {
    if (!(e.keyCode === 13 || e.key === 'Enter')) {
      return
    }


      const text = input.trim()
    if (text === '') {
      return
    }

    setInput('')
    dispatch(addTodo(text))
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        autoFocus
        className="new-todo"
        onInput={ e => setInput(e.target.value) }
        onKeyDown={ handleAddTodo }
        placeholder="What needs to be done?"
        value={ input }
      />
    </header>
  )
}

export default Header
