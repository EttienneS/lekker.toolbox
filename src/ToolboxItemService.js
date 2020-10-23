export class ToolboxItemService {
  constructor() {}

  items = [
    { name: "item 1", value: "yolo" },
    { name: "item 2", value: "swag" },
    { name: "item 3", value: "420" },
  ];

  getItems() {
    return this.items;
  }
}
