import fs from "fs";
import path from "path";
import { Page, Story } from "@/types/stories";
import cleanTitle from "@/lib/cleanTitle";
import { storiesPath} from "@/lib/utils";

const storiesDirectory = path.join(process.cwd(), storiesPath);

export function getAllStories(): Story[] {
    console.log("enter getAllStories, storiesPath = ", storiesDirectory);
    if (!fs.existsSync(storiesDirectory)) {
        return [];
    }

    const storyFolders = fs.readdirSync(storiesDirectory);
    const stories: Story[] = storyFolders.map(storyFolder => {
        const storyPath = path.join(storiesDirectory, storyFolder);
        const files = fs.readdirSync(storyPath);

        const pages: Page[] = [];
        const pageMap: { [key: string]: Partial<Page> } = {};
        console.log("before files each");
        files.forEach(file => {
            const filePath = path.join(storyPath, file);
            console.log("filePath = " + file);
            const type = path.extname(file).substring(1);
            const pageNumber = file.match(/page(\d+)\./)?.[1];
            if (pageNumber) {
                if (!pageMap[pageNumber]) {
                    pageMap[pageNumber] = {};
                }

                if (type === "txt") {
                    pageMap[pageNumber].txt = fs.readFileSync(filePath, "utf8");
                }
                else if (type === "png") {
                    pageMap[pageNumber].png = `/stories/${storyFolder}/${file}`;
                }
            }
        });

        Object.keys(pageMap).forEach((pageNumber) => {
            // TODO enable if once images generated
            //if (pageMap[pageNumber].txt && pageMap[pageNumber].png) {
            if (pageMap[pageNumber].txt) {
                pages.push(pageMap[pageNumber] as Page);
            }
        });

        return {
            story: cleanTitle(storyFolder),
            pages,
        };
    });

    const storiesWithPages = stories.filter((story) => story.pages.length > 0);
    return storiesWithPages;
}

export const getStory = (story: string): Story | undefined => {
    const stories = getAllStories();
    return stories.find((s) => s.story === story);
};