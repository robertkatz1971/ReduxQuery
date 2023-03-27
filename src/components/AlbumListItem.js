import { useRemoveAlbumMutation } from "../store";
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import { GoTrashcan } from 'react-icons/go';

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
                List of photos in the album.
                </ExpandablePanel>
            </>
          );
};

export default AlbumListitem;