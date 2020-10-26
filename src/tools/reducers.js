import { CREATE_TOOL, REMOVE_TOOL, TOGGLE_FAVOURITE_TOOL } from "./actions";

export const tools = (state = items, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TOOL: {
      const { name } = payload;

      const newTool = {
        id: state.length,
        name,
        description: "New tool, no description given",
        link: "NA",
      };

      return state.concat(newTool);
    }
    case REMOVE_TOOL: {
      const { name } = payload;

      return state.filter((tool) => tool.name !== name);
    }

    case TOGGLE_FAVOURITE_TOOL: {
      const { name } = payload;

      return state.map(tool => {
        if (tool.name === name)
        {
            return { ...tool,  favourite: !tool.favourite };
        }
        return tool;
      });
    }

    default:
      return state;
  }
};

const items = [
  {
    id: 1,
    name: "AlterInstall",
    description: "Manipulate add/remove programs entries",
    link: "https://k2buildstorage.blob.core.windows.net/tools/AlterInstall.zip",
    favourite: false,
  },
  {
    id: 2,
    name: "blobber",
    description: "Easy upload to blob storage",
    link: "https://k2buildstorage.blob.core.windows.net/tools/blobber.zip",
    favourite: false,
  },
  {
    id: 3,
    name: "dnSpy",
    description: "Debug code without pdbs",
    link: "https://k2buildstorage.blob.core.windows.net/tools/dnSpy-net472.zip",
    favourite: false,
  },
  {
    id: 4,
    name: "ExtractLogs",
    description: "Extract log files from Update History",
    link: "https://k2buildstorage.blob.core.windows.net/tools/ExtractLogs.zip",
    favourite: false,
  },
  {
    id: 5,
    name: "ExtractSnapshots",
    description: "Extract script snapshots out of logs",
    link:
      "https://k2buildstorage.blob.core.windows.net/tools/ExtractSnapshots.exe",
    favourite: false,
  },
  {
    id: 6,
    name: "Sizer",
    description: "Easily resize images",
    link: "https://k2buildstorage.blob.core.windows.net/tools/Sizer.zip",
    favourite: false,
  },
];
