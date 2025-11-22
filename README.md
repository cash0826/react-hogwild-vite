# Lab: Hogwild

Imagine you are tasked with creating an interface for a pig farming competition for your local county fair that will show details about all the pigs who have entered the county fair competition along with their details that will be provided for you in a file. Your app must allow users to filter, sort, and update the displayed hogs while maintaining accessibility and responsiveness.

## Task

Build a hog themed webpage based on your knowledge of component-based design, props, state management, event handling, and conditional rendering

## Component Tree
```
└── App
    ├── Nav
    ├── Filter
    ├── HogForm
    └── HogList
        └──HogCard
            └──HogDetails
```

## Setup
Run the following commands to render the UI:
```
   npm install
   npm run dev

```
Ctrl + Click on the local host url to open the UI.
To terminate the UI rendering, go the open terminal and click Ctrl + C, then click Y to confirm.

## Testing
In a new terminal, run the following command:
```
   npm run test

```