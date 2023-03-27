import { useRemoveAlbumMutation } from "../store";
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import { GoTrashcan } from 'react-icons/go';
import PhotosList from './PhotosList';

const AlbumListitem = ({album}) => {

    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };

    const header = (<>
                        <Button rounded className="mr-2" loading={results.isLoading} danger onClick={handleRemoveAlbum}>
                            <GoTrashcan />
                        </Button>
                        {album.title}
                    </>
    );

    return (
            <>       
                <ExpandablePanel key={album.id} header={header}>
                    <PhotosList album={album} />
                </ExpandablePanel>
            </>
          );
};

export default AlbumListitem;