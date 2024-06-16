import { createFileRoute } from '@tanstack/react-router'

import "./style.css";

const imgSize = 150;

function Page() {
  return (
    <div className="flex flex-wrap gap-8">
      {Array(5).fill(undefined).map((_, i) => (
        <article className="folder" key={i}>
          <div className="pile">
            {(Array(3).fill(undefined)).map((_, j) => (
              <div className='thumbnail' key={j}
              >
                <img src={`https://picsum.photos/id/${i * 10 + j}/${imgSize}/${imgSize}`} alt="" width={imgSize} height={imgSize} loading="lazy" /></div>
            ))}
          </div>
          <h3>Folder {i + 1}</h3>
        </article>
      ))}
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Page
})