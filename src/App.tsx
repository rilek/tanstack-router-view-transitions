import './App.css'


function App() {

  return (
    <>
      <article className="folder">
        <div className="pile">
          {(Array(3).fill(1)).map((_, i) => (
            <div
              className='thumbnail'
              key={i}
            >
              <img src={`https://picsum.photos/id/${i}/150/150`} alt="" /></div>
          ))}
        </div>
        <h3>Folder 1</h3>
      </article>
    </>
  )
}

export default App
