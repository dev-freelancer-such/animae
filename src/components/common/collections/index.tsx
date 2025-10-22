import { HomeCollectionStoryInterface } from "@/models/home.models";

import CollectionStories from "@/components/common/collections/collection-stories";

interface CollectionStoriesContainerProps {
  collectionStoriesProps: HomeCollectionStoryInterface;
  isRanked?: boolean;
}

function CollectionStoriesContainer({
  collectionStoriesProps,
  isRanked = false,
}: CollectionStoriesContainerProps) {
  return (
    <section className="max-container flex items-center justify-center">
      <div className="container">
        <CollectionStories {...collectionStoriesProps} isRanked={isRanked} />
      </div>
    </section>
  );
}

export default CollectionStoriesContainer;
