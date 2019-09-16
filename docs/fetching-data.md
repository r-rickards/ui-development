# Fetching Data

<img src="https://github.com/alex-cory/use-http/raw/master/public/dog.png" alt="" />

## Redux & Request

## Roadmap

https://github.com/async-library/react-async

http://use-http.com/

##### Basic Usage (no managed state) `useFetch`

```
import useFetch from 'use-http'

function Todos() {
  const options = { // accepts all `fetch` options
    onMount: true // will fire on componentDidMount
  }

  const todos = useFetch('https://example.com/todos', options)

  function addTodo() {
    todos.post({
      title: 'no way',
    })
  }

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {request.error && 'Error!'}
      {request.loading && 'Loading...'}
      {(todos.data || []).length > 0 && todos.data.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      )}
    </>
  )
}
```

##### Basic Usage (managed state) `useFetch`

```
import useFetch from 'use-http'

function Todos() {
  const [todos, setTodos] = useState([])

  const request = useFetch('https://example.com')

  // on mount, initialize the todos
  useEffect(() => {
    initializeTodos()
  }, [])

  async function initializeTodos() {
    const initialTodos = await request.get('/todos')
    setTodos(initialTodos)
  }

  async function addTodo() {
    const newTodo = await request.post('/todos', {
      title: 'no way',
    })
    setTodos(oldTodos => [...oldTodos, newTodo])
  }

  return (
    <>
      <button onClick={ addTodo }>Add Todo</button>
      {todos.error && 'Error!'}
      {todos.loading && 'Loading...'}
      {todos.length > 0 && todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      )}
    </>
  )
}
```

### axios interceptor to add jwt

```
import axios from 'axios';
// You can use any cookie library or whatever
// library to access your client storage.
import cookie from 'cookie-machine';

axios.interceptors.request.use(function(config) {
  const token = cookie.get(__TOKEN_KEY__);

  if ( token != null ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, function(err) {
  return Promise.reject(err);
});
```
