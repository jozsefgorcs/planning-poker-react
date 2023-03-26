import React from "react";
import { useSelector } from "react-redux";
import EstimationValue from "../../components/StoryList/EstimationValue";
import { Story } from "../../store/stories";
type Props = {};

function CurrentEstimation({}: Props) {
  const estimableStory: Story = useSelector(
    (state: any) => state.stories.estimableStory
  );

  const estimationClickHandler = (value: number) => {
    alert(value);
  };
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h1>{estimableStory?.title}</h1>
        </div>
      </div>
      <div className="row ">
        <EstimationValue onClick={() => estimationClickHandler(0)} value="0" />
        <EstimationValue
          onClick={() => estimationClickHandler(0.5)}
          value="1/2"
        />

        <EstimationValue onClick={() => estimationClickHandler(1)} value="1" />
        <EstimationValue onClick={() => estimationClickHandler(2)} value="2" />
        <EstimationValue onClick={() => estimationClickHandler(3)} value="3" />
        <EstimationValue onClick={() => estimationClickHandler(5)} value="5" />
        <EstimationValue onClick={() => estimationClickHandler(8)} value="8" />
        <EstimationValue
          onClick={() => estimationClickHandler(13)}
          value="13"
        />
        <EstimationValue
          onClick={() => estimationClickHandler(21)}
          value="21"
        />
        <EstimationValue
          onClick={() => estimationClickHandler(34)}
          value="34"
        />
        <EstimationValue
          onClick={() => estimationClickHandler(55)}
          value="55"
        />
        <EstimationValue
          onClick={() => estimationClickHandler(89)}
          value="89"
        />
        <EstimationValue
          onClick={() => estimationClickHandler(1000)}
          value="♾️"
        />
        <EstimationValue onClick={() => estimationClickHandler(0)} value="☕" />
      </div>
    </div>
  );
}

export default CurrentEstimation;
