import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';

function AlbumsList({ user }) {

  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data.map((album ) => {
      return <ExpandablePanel key={album.id} header={album.title}>
        List of photos in the album.
      </ExpandablePanel>
    });
  }

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <div>Albums by {user.name}</div>
        <Button onClick={handleAddAlbum} primary >+ Add Album</Button>
      </div> 
      <div>{content}</div>
    </div>
 
  );
}

export default AlbumsList;
