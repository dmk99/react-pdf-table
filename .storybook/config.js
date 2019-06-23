import { addParameters, configure } from '@storybook/react';

// Option defaults:
addParameters({
  options: {
    name: 'Storybook',
    url: '#',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    hierarchySeparator: null,
    hierarchyRootSeparator: null,
    sidebarAnimations: true
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
