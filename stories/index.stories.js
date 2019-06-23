import React from 'react';

import { storiesOf } from "@storybook/react";

import { Button, Welcome } from "@storybook/react/demo";
import {SimpleTable} from "./components/story/SimpleTable";
import {withKnobs} from "@storybook/addon-knobs";
import Introduction from "./components/Introduction";
import {SimpleTableWithWeighting} from "./components/story/SimpleTableWithWeighting";

storiesOf("Welcome", module).add("to react-pdf-table", () => <Introduction/>);

const tableStories = storiesOf("Table", module);
tableStories.addDecorator(withKnobs);

tableStories.add("Simple Table", () => (<SimpleTable/>));
tableStories.add("Simple Table with Weighting", () => (<SimpleTableWithWeighting/>));
