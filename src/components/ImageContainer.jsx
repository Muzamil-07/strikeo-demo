// eslint-disable-next-line react/prop-types
export default function ImageContainer({ height, width, src }) {
  return (
    <div
      style={{
        height,
        width,
        overflow: "hidden",
        position: "relative",
        backgroundColor: "transparent",
        margin:'auto'
      }}
    >
      <img
      loading="lazy"
        src={src}
        alt="image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}
