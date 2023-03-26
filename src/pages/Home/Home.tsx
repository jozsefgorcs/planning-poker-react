import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddStoryModal from "../../components/StoryList/AddStoryModal";
import AvailableStoryList from "../../components/StoryList/AvailableStories/AvailableStoryList";
import CurrentEstimation from "../../components/StoryList/CurrentEstimation";

import { fetchStories, addStory, startEstimation } from "../../store/stories";
type Props = {};

function HomePage({}: Props) {
  const dispatch = useDispatch();
  const availableStoryList = useSelector(
    (state: any) => state.stories.availableStories
  );
  const [addStoryModalVisible, setAddStoryModalVisible] =
    useState<boolean>(false);
  const onNewStory = (data: any): void => {
    dispatch(
      addStory({
        title: data.title,
        description: data.description,
        id: Math.floor(Math.random() * 1000),
      })
    );
  };
  const onEstimableClick = (storyId: number): void => {
    dispatch(startEstimation(storyId));
  };

  useEffect(() => {
    dispatch(fetchStories());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3">
          <AvailableStoryList
            storyList={availableStoryList}
            onEstimableClick={onEstimableClick}
          ></AvailableStoryList>
          <button
            className="btn btn-primary"
            onClick={() => setAddStoryModalVisible(true)}
          >
            Add story
          </button>
        </div>
        <div className="col-12 col-md-8">
          <CurrentEstimation />
        </div>
        <AddStoryModal
          setVisible={setAddStoryModalVisible}
          visible={addStoryModalVisible}
          dataSubmit={onNewStory}
        ></AddStoryModal>
      </div>
    </div>
  );
}

export default HomePage;
