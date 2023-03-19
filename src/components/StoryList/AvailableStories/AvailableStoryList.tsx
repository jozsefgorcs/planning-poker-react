import React from "react";
import AvailableStoryListitem from "./AvailableStoryListitem";

type Props = {
  storyList: Array<any>;
};

export default function AvailableStoryList({ storyList }: Props) {
  return (
    <>
      {storyList.map((story) => (
        <AvailableStoryListitem
          key={story.id}
          id={story.id}
          title={story.title}
          text={story.description}
          onEstimableClick={() => alert("ok")}
        ></AvailableStoryListitem>
      ))}
    </>
  );
}
