import React from "react";
import AvailableStoryListitem from "./AvailableStoryListitem";

type Props = {
  storyList: Array<any>;
  onEstimableClick(storyId: number): void;
};

export default function AvailableStoryList({
  storyList,
  onEstimableClick,
}: Props) {
  return (
    <>
      {storyList.map((story) => (
        <AvailableStoryListitem
          key={story.id}
          id={story.id}
          title={story.title}
          text={story.description}
          onEstimableClick={(id: number) => onEstimableClick(id)}
        ></AvailableStoryListitem>
      ))}
    </>
  );
}
