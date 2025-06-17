import { Meta } from '@storybook/react';
import { CheckboxTree } from '../../components/Atom/Checkbox/CheckboxTree';
import { TreeNode } from '../../types/checkboxExtends';
declare const meta: Meta<typeof CheckboxTree>;
export default meta;
export declare const BasicUsage: {
    args: {
        data: TreeNode[];
    };
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
    decorators?: import('@storybook/core/csf').DecoratorFunction<import('@storybook/react').ReactRenderer, {
        data: TreeNode[];
        checkedKeys?: string[] | undefined;
        onChecked?: ((keys: string[]) => void) | undefined;
    }> | import('@storybook/core/csf').DecoratorFunction<import('@storybook/react').ReactRenderer, {
        data: TreeNode[];
        checkedKeys?: string[] | undefined;
        onChecked?: ((keys: string[]) => void) | undefined;
    }>[] | undefined;
    argTypes?: Partial<import('@storybook/react').ArgTypes<import('../../types/checkboxExtends').CheckboxTreeProps>> | undefined;
    loaders?: import('@storybook/core/csf').LoaderFunction<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps> | import('@storybook/core/csf').LoaderFunction<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps>[] | undefined;
    beforeEach?: import('@storybook/core/csf').BeforeEach<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps> | import('@storybook/core/csf').BeforeEach<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps>[] | undefined;
    experimental_afterEach?: import('@storybook/core/csf').AfterEach<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps> | import('@storybook/core/csf').AfterEach<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps>[] | undefined;
    render?: import('@storybook/core/csf').ArgsStoryFn<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps> | undefined;
    tags?: import('@storybook/core/csf').Tag[];
    mount?: ((context: import('@storybook/core/csf').StoryContext<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps>) => (ui?: import("react").JSX.Element) => Promise<import('@storybook/core/csf').Canvas>) | undefined;
    name?: import('@storybook/core/csf').StoryName;
    storyName?: import('@storybook/core/csf').StoryName;
    play?: import('@storybook/core/csf').PlayFunction<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps> | undefined;
    globals?: import('@storybook/core/csf').Globals;
    story?: Omit<import('@storybook/core/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps, Partial<import('../../types/checkboxExtends').CheckboxTreeProps>>, "story"> | undefined;
};
export declare const InitiallyChecked: {
    args: {
        data: TreeNode[];
        checkedKeys: string[];
    };
    decorators?: import('@storybook/core/csf').DecoratorFunction<import('@storybook/react').ReactRenderer, {
        data: TreeNode[];
        checkedKeys?: string[] | undefined;
        onChecked?: ((keys: string[]) => void) | undefined;
    }> | import('@storybook/core/csf').DecoratorFunction<import('@storybook/react').ReactRenderer, {
        data: TreeNode[];
        checkedKeys?: string[] | undefined;
        onChecked?: ((keys: string[]) => void) | undefined;
    }>[] | undefined;
    parameters?: import('@storybook/react').Parameters;
    argTypes?: Partial<import('@storybook/react').ArgTypes<import('../../types/checkboxExtends').CheckboxTreeProps>> | undefined;
    loaders?: import('@storybook/core/csf').LoaderFunction<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps> | import('@storybook/core/csf').LoaderFunction<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps>[] | undefined;
    beforeEach?: import('@storybook/core/csf').BeforeEach<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps> | import('@storybook/core/csf').BeforeEach<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps>[] | undefined;
    experimental_afterEach?: import('@storybook/core/csf').AfterEach<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps> | import('@storybook/core/csf').AfterEach<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps>[] | undefined;
    render?: import('@storybook/core/csf').ArgsStoryFn<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps> | undefined;
    tags?: import('@storybook/core/csf').Tag[];
    mount?: ((context: import('@storybook/core/csf').StoryContext<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps>) => (ui?: import("react").JSX.Element) => Promise<import('@storybook/core/csf').Canvas>) | undefined;
    name?: import('@storybook/core/csf').StoryName;
    storyName?: import('@storybook/core/csf').StoryName;
    play?: import('@storybook/core/csf').PlayFunction<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps> | undefined;
    globals?: import('@storybook/core/csf').Globals;
    story?: Omit<import('@storybook/core/csf').StoryAnnotations<import('@storybook/react').ReactRenderer, import('../../types/checkboxExtends').CheckboxTreeProps, Partial<import('../../types/checkboxExtends').CheckboxTreeProps>>, "story"> | undefined;
};
