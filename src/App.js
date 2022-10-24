import { useState } from "react"

function App() {
  const [names, setNames] = useState(null)

  const onLoad = () => {
    import("./names").then((module) => {
      setNames(module.default)

      import("./utilities" /* webpackChunkName: "utilities" */).then(
        ({ makeUpperCase }) => {
          setNames((names) => makeUpperCase(names))
        }
      )
    })
  }

  return (
    <div className="App">
      <div>Home App</div>
      <button onClick={onLoad}>Load</button>
      <div>{JSON.stringify(names)}</div>
    </div>
  )
}

export default App
