import { useRemovePhotoMutation } from "../store";
import { GoTrashcan } from "react-icons/go";

const PhotoListitem = ({photo}) => {

    const [removePhoto, results] = useRemovePhotoMutation();

    const handleRemovePhoto = () => {
        removePhoto(photo);
    };

    return (
             <div className="relative m-2 cursor-pointer" onClick={handleRemovePhoto}>
                <img src={photo.url} alt={photo.id} />
                <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                    <GoTrashcan className="text-3xl" />
                </div>
             </div>
          );
};

export default PhotoListitem;