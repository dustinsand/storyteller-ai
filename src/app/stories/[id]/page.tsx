import {getAllStories, getStory} from "@/lib/getAllStories";
import {notFound} from "next/navigation";
import Story from "@/components/Story";

interface StoryPagePros {
    params: {
        id: string
    }
}

function StoryPage( {params: {id} }: StoryPagePros) {
    const decodedId = decodeURIComponent(id);

    const story = getStory(decodedId);

    if (!story) {
        return notFound();
    }
    return <Story story={story} />
}

export default StoryPage;

export async function generateStaticParams() {
    const stories = getAllStories();
    const paths = stories.map((story) => ({
        id: story.story,
    }));
    return paths;
}