const input = [
  {
    "id": 1,
    "name": "README.md",
    "parentId": null
  },
  {
    "id": 2,
    "name": "Documents",
    "parentId": null
  },
  {
    "id": 3,
    "name": "Word.doc",
    "parentId": 2,
  },
  {
    "id": 4,
    "name": "Powerpoint.ppt",
    "parentId": 2,
  },
  {
    "id": 5,
    "name": "Downloads",
    "parentId": null,
  },
  {
    "id": 6,
    "name": "unnamed.txt",
    "parentId": 5
  },
  {
    "id": 7,
    "name": "Misc",
    "parentId": 6
  },
  {
  "id": 8,
    "name": "foo.txt",
    "parentId": 7
  },
  {
    "id": 9,
    "name": "bar.txt",
    "parentId": 7
  }
]

const compareAndPushChildrenToParent = (arr) => {
  const result = [];
  const obj = {};

  // Step 1: Clone items and build lookup map
  for (let item of arr) {
    obj[item.id] = { ...item }; // Copy everything
  }

  // Step 2: Build tree structure
  for (let item of arr) {
    if (item.parentId === null) {
      result.push(obj[item.id]);
    } else {
      const parent = obj[item.parentId];
      if (parent) {
        parent.children = parent.children || [];
        parent.children.push(obj[item.id]);
      }
    }
  }

  // Step 3: Recursively remove `parentId` from all children
  const removeParentId = (node) => {
    const { parentId, ...rest } = node;
    if (rest.children) {
      rest.children = rest.children.map(removeParentId);
    }
    return rest;
  };

  return result.map(removeParentId);
};

console.log(compareAndPushChildrenToParent(input))

output :
[
  {
    "id": 1,
    "name": "README.md"
  },
  {
    "id": 2,
    "name": "Documents",
    "children": [
      {
        "id": 3,
        "name": "Word.doc"
      },
      {
        "id": 4,
        "name": "Powerpoint.ppt"
      }
    ]
  },
  {
    "id": 5,
    "name": "Downloads",
    "children": [
      {
        "id": 6,
        "name": "unnamed.txt"
      },
      {
        "id": 7,
        "name": "Misc",
        "children": [
          {
            "id": 8,
            "name": "foo.txt"
          },
          {
            "id": 9,
            "name": "bar.txt"
          }
        ]
      }
    ]
  }
]
