import { Link, createFileRoute } from "@tanstack/react-router";
import "./style.css";

const imgSize = 150;

const Thumbnail = ({ index }: { index: number }) => (
  <div className='thumbnail' key={index} style={{ viewTransitionName: `img-${index}` }}>
    <img
      src={`https://picsum.photos/id/${index}/300/300`}
      width={imgSize}
      height={imgSize}
      loading="lazy"
    />
  </div>
);

const FolderLink = ({ index }: { index: number }) => (
  <Link
    key={index}
    to={"/folders/$folder"}
    params={{ folder: index.toString() }}
    preload="intent"
  >
    <article className="folder">
      <div className="pile">
        {Array(3).fill(undefined).map((_, j) => (
          <Thumbnail key={j} index={index * 10 + j} />
        ))}
      </div>
      <h3>Folder {index + 1}</h3>
    </article>
  </Link>
)

function Page() {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-8 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 lg">
      {Array(20).fill(undefined).map((_, i) => (
        <FolderLink key={i} index={i} />
      ))}
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Page
})