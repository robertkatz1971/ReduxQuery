import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Skeleton from './Skeleton';
import Button from './Button';
import PhotoListItem from "./PhotoListItem";

function PhotosList({ album }) {

  const { data, error, isFetching } = useFetchPhotosQuery(album);

  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  let content;
  if (isFetching) {
    content = <Skeleton className="h-8 w-8" times={4} />;
  } else if (error) {
    content = <div>Error loading photos.</div>;
  } else {
    content =  data.map(( photo ) => {
       return <PhotoListItem key={photo.id} photo={photo} />
    });
  }

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <div>
        <div className="m-2 flex flex-row items-center justify-between">
          <h3 className="text-lg font-bold">Photos in {album.title}</h3>
          <Button rounded loading={addPhotoResults.isLoading} onClick={handleAddPhoto} primary >
            + Add Photo
          </Button>
        </div> 
        <div className="mx-8 flex flex-row flex-wrap justify-center">
          {content}
        </div>
    </div>
 
  );
}

export default PhotosList;
