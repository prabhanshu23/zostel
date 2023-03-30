import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGallery.css"
import { Link } from "react-router-dom";

export const ImagesGallery = () => {

    const images = [
        {
            original: 'https://img.cdn.zo.xyz/zostel/gallery/images/kR55bIDpRYC-2wYqnlT6jA/manali-20201112102605.jpg?w=1280',
            thumbnail: 'https://img.cdn.zo.xyz/zostel/gallery/images/kR55bIDpRYC-2wYqnlT6jA/manali-20201112102605.jpg?w=1280',
        },
        {
            original: 'https://img.cdn.zo.xyz/zostel/gallery/images/2B_i6AW9RTaNmY6d-2Bcmw/manali-board-20201105110533.jpg?w=1280',
            thumbnail: 'https://img.cdn.zo.xyz/zostel/gallery/images/2B_i6AW9RTaNmY6d-2Bcmw/manali-board-20201105110533.jpg?w=1280',
        },
        {
            original: 'https://img.cdn.zo.xyz/zostel/gallery/images/15R001HDS2Cc_wCv97eAPQ/manali-garden-cafe-20201105110535.jpg?w=1280',
            thumbnail: 'https://img.cdn.zo.xyz/zostel/gallery/images/15R001HDS2Cc_wCv97eAPQ/manali-garden-cafe-20201105110535.jpg?w=1280',
        },
        {
            original: 'https://img.cdn.zo.xyz/zostel/gallery/images/GkyGaeFwQnilVex_Cu_eHQ/manali-wall-art-20201105110536.jpg?w=1280',
            thumbnail: 'https://img.cdn.zo.xyz/zostel/gallery/images/GkyGaeFwQnilVex_Cu_eHQ/manali-wall-art-20201105110536.jpg?w=1280',
        },
        {
            original: 'https://img.cdn.zo.xyz/zostel/gallery/images/DOgsYSjnSJGZMX-8JOSyDg/manali_zostel_garden_cafe-20201105110548.jpg?w=1280',
            thumbnail: 'https://img.cdn.zo.xyz/zostel/gallery/images/DOgsYSjnSJGZMX-8JOSyDg/manali_zostel_garden_cafe-20201105110548.jpg?w=1280',
        },

    ];

    return (
        <>
            <Link to="/booking">
                <div className="cancel-btn">
                    <img src="x-lg.svg" alt="cancel" />
                </div>
            </Link>
            <ImageGallery items={images} />;
        </>
    )

};
