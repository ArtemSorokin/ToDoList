import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Button, Container, TextField} from "@material-ui/core";
import {store} from "../reducers/srore";


import {AddFormForTodoList} from "../AddFormForTodoList";
import {action} from "@storybook/addon-actions";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AppWithRedux from "../AppWithRedux";
import {Provider} from "react-redux";
import {WithProviderReduxDecorator} from "../reducers/appWithReduxDecorator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'AppWithReduxStories',
    decorators: [WithProviderReduxDecorator],
    component: AppWithRedux,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof AppWithRedux>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppWithRedux> = (args) =>  <AppWithRedux /> ;


export const AppWithReduxExample = Template.bind({})
