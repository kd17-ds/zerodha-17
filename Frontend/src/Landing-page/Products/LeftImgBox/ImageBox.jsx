export default function ImageBox({ imageUrl }) {
    return (
        <div className="d-flex justify-content-center">
            <img src={imageUrl} alt="" />
        </div>
    );
}
