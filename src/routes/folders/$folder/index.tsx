import { Link, createFileRoute } from '@tanstack/react-router'
import { imgSize, imgUrls, tryParse } from './-utils';

export const Route = createFileRoute('/folders/$folder/')({
  component: () => {
    const params = Route.useParams();
    const folder = tryParse(params.folder);

    if (folder === null) return <div>Invalid folder</div>;

    return (
      <div>
        <Link to="/" className='inline-block mb-4' preload="intent">{"<"} Back</Link>
        <div className='grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-3 md:grid-cols-2'>
          {imgUrls(folder, imgSize).map((url, i) =>
            <div className='thumbnail' key={url} style={i < 3 ? { viewTransitionName: `img-${folder * 10 + i}` } : {}} >
              <img src={url} alt="" width={imgSize} height={imgSize} />
            </div>
          )}
        </div>
      </div>
    );
  }
})