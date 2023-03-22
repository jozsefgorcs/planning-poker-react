import "./AvailableStoryListitem.css";
type EstimateFunction = (id: number) => void;

type Props = {
  id: number;
  title: string;
  text: string;
  onEstimableClick: EstimateFunction;
};

const AvailableStoryListitem = (props: Props) => {
  return (
    <div className="card w-75">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a
          href="#"
          className="btn btn-primary btn-start"
          onClick={() => props.onEstimableClick(props.id)}
        >
          ➡️
        </a>
      </div>
    </div>
  );
};

export default AvailableStoryListitem;
