import "./style.css";

function HeaderInfo(props) {
  const firstname = props.firstName;

  return (
    <div className="header-content">
      <h1 className="title-header">
        Bonjour <span>{firstname}</span>
      </h1>
      <p className="texte-header">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default HeaderInfo;
