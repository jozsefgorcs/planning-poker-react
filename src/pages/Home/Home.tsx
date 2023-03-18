import React, { useState } from "react";
import AddStoryModal from "../../components/StoryList/AddStoryModal";
import AvailableStoryListitem from "../../components/StoryList/AvailableStoryListitem";
import EstimationValue from "../../components/StoryList/EstimationValue";

type Props = {};

function HomePage({}: Props) {
  const [addStoryModalVisible, setAddStoryModalVisible] =
    useState<boolean>(false);
  function onNewStory(data: any): void {
    console.log("🚀 ~ file: Home.tsx:12 ~ onNewStory ~ data:", data);
  }

  return (
    <div>
      <AvailableStoryListitem
        id="asd"
        text="Test text"
        title="Test title"
        onEstimableClick={() => alert("ok")}
      ></AvailableStoryListitem>

      <EstimationValue
        onClick={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        value="12"
      />
      <AddStoryModal
        setVisible={setAddStoryModalVisible}
        visible={addStoryModalVisible}
        dataSubmit={onNewStory}
      ></AddStoryModal>
      <button
        className="btn btn-primary"
        onClick={() => setAddStoryModalVisible(true)}
      >
        Add story
      </button>
    </div>
  );
}

export default HomePage;
