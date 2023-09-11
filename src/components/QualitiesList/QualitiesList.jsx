const QualitiesList = ({ qualitiesArr }) => {
  return qualitiesArr.map((quality) => (
    <span className={`badge btn-${quality.color} m-1`} key={quality._id}>
      {quality.name}
    </span>
  ));
};

export default QualitiesList;
