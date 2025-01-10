
export const ProjectCard = ({ title, description, imgUrl, onClick }) => {
  return (
    <div className="proj-imgbx" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
        {/* <a><img src={link}/></a> */}
      </div>
    </div>
  );
};
