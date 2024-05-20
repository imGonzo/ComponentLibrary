import { fn } from "@storybook/test";
import "./instance-button";

export default {
    title: "Web Instance UI/Buttons",
    component: "instance-button",
    tags: ["autodocs"],
    render: (args) => Button(args),
    argTypes: {
        appearance: {
            control: { type: "select" },
            options: ["primary", "secondary", "tertiary", "ghost"],
        },
        label: { control: { type: "text" } },
        loading: { control: { type: "boolean" } },
    },
    args: { onClick: fn() },
};

const Button = (args) => {
    return `<instance-button appearance="${args.appearance}" ${args.loading ? "loading" : ""}>${args.label}</instance-button>`;
};

export const Primary = {
    args: {
        appearance: "primary",
        label: "Button",
        loading: false,
    },
};

export const Secondary = {
    args: {
        appearance: "secondary",
        label: "Button",
        loading: false,
    },
};

export const Tertiary = {
    args: {
        appearance: "tertiary",
        label: "Button",
        loading: false,
    },
};

export const Ghost = {
    args: {
        appearance: "ghost",
        label: "Button",
        loading: false,
    },
};

export const Loading = {
    args: {
        appearance: "primary",
        label: "Button",
        loading: true,
    },
};
