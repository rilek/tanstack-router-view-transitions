import { Link, createFileRoute } from '@tanstack/react-router'
import { imgSize, imgUrls, tryParse } from './-utils';

export const Route = createFileRoute('/folders/$folder/')({
  component: () => {
    const params = Route.useParams();

    const folder = tryParse(params.folder);

    if (folder === null) return <div>Invalid folder</div>;


    return (
      <div>
        <Link to="/" className='inline-block mb-4'>{"<"} Back</Link>
        <div className='flex flex-wrap gap-4'>{
          imgUrls(folder, imgSize).map(url =>
            <div className='thumbnail aspect-square'>
              <img src={url} key={url} alt="" width={imgSize} height={imgSize} />
            </div>
          )}</div>
      </div>
    );
  }
})