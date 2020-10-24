import { CREATE_TOOL, REMOVE_TOOL } from "./actions";

export const tools = (state = items, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TOOL: {
      const { name } = payload;
      const newTool = {
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

    default:
      return state;
  }
};

const items = [
  {
    id: 1,
    name: "AlterInstall",
    description: "Manipulate add/remove programs entries",
    link:
      "https://k2buildstorage.blob.core.windows.net/tools/AlterInstall.zip",
  },
  {
    id: 2,
    name: "blobber",
    description: "Easy upload to blob storage",
    link: "https://k2buildstorage.blob.core.windows.net/tools/blobber.zip",
  },
  {
    id: 3,
    name: "dnSpy",
    description: "Debug code without pdbs",
    link:
      "https://k2buildstorage.blob.core.windows.net/tools/dnSpy-net472.zip",
  },
  {
    id: 4,
    name: "ExtractLogs",
    description: "Extract log files from Update History",
    link:
      "https://k2buildstorage.blob.core.windows.net/tools/ExtractLogs.zip",
  },
  {
    id: 5,
    name: "ExtractSnapshots",
    description: "Extract script snapshots out of logs",
    link:
      "https://k2buildstorage.blob.core.windows.net/tools/ExtractSnapshots.exe",
  },
  {
    id: 6,
    name: "Sizer",
    description: "Easily resize images",
    link: "https://k2buildstorage.blob.core.windows.net/tools/Sizer.zip",
  },
];
