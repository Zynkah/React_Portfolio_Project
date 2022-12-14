const Maids = ({ maid }) => {
    if (maid) {
      const { image, name, description } = maid;
      return (
        <>
          <img src={image} alt={name} style={{ width: "150px" }} />
          <div className="m-4">
            <h5 className="fw-bold">{name}</h5>
            {description}
          </div>
        </>
      );
    }
    return null;
  };
  
  export default Maids;