import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddStoryModal from "../../components/StoryList/AddStoryModal";
import AvailableStoryList from "../../components/StoryList/AvailableStories/AvailableStoryList";
import AvailableStoryListitem from "../../components/StoryList/AvailableStories/AvailableStoryListitem";
import EstimationValue from "../../components/StoryList/EstimationValue";
import { storiesActions } from "../../store/stories";
type Props = {};

function HomePage({}: Props) {
  const dispatch = useDispatch();
  const availableStoryList = useSelector(
    (state: any) => state.stories.availableStories
  );
  const [addStoryModalVisible, setAddStoryModalVisible] =
    useState<boolean>(false);
  function onNewStory(data: any): void {
    dispatch(
      storiesActions.addStory({
        title: data.title,
        description: data.description,
        id: Math.floor(Math.random() * 1000),
      })
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-3">
          <AvailableStoryList
            storyList={availableStoryList}
          ></AvailableStoryList>
          <button
            className="btn btn-primary"
            onClick={() => setAddStoryModalVisible(true)}
          >
            Add story
          </button>
        </div>
        <div className="col-12 col-md-8">
          <EstimationValue
            onClick={function (value: string): void {
              throw new Error("Function not implemented.");
            }}
            value="12"
          />
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
