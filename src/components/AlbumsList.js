import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumListitem from "./AlbumListItem";

function AlbumsList({ user }) {

  const { data, error, isFetching } = useFetchAlbumsQuery(user);

  const [addAlbum, results] = useAddAlbumMutation();

  let content;
  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content =  data.map((album ) => {
       return <AlbumListitem key={album.id} album={album} />
    });
  }

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
        <div className="m-2 flex flex-row items-center justify-between">
          <h3 className="text-lg font-bold">Albums by {user.name}</h3>
          <Button rounded loading={results.isFetching} onClick={handleAddAlbum} primary >+ Add Album</Button>
        </div> 
        <div>{content}</div>
    </div>
 
  );
}

export default AlbumsList;
