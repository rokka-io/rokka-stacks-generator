import rokkaClient from 'rokka';
import { RokkaApi } from 'rokka/src/apis';

export interface Ratio {
    w: number;
    h: number;
}

export interface ViewportSize {
    width: number;
    height: number;
    crop?: boolean;
    mode?: string;
}

export interface Viewport {
    mobile: number;
    tablet: number;
    desktop: number;
    widescreen: number;
    fullhd: number;
    fourk: number;
}

export interface StyleDefinition {
    name: string;
    mode?: string;
    crop?: boolean;
    ratio?: Ratio;
    sizes?: number[];
    pictures?: Record<string, ViewportSize|'noop'>;
    viewport: Viewport;
}

export interface ResizeStackDefinition {
    name: string;
    width: number;
    height: number;
    viewport?: string;
    mode?: string;
    crop?: boolean;
}

export interface NoopStackDefinition {
    name: 'dynamic/noop'
}

export type StackDefinition = ResizeStackDefinition|NoopStackDefinition

export interface Style {
    name: string;
    ratio?: Ratio;
    stacks: StackDefinition[];
}

function isNoopStack(stack: StackDefinition): stack is NoopStackDefinition {
    return stack.name === 'dynamic/noop'
}

export default class RokkaHandler {
    organization: string;

    client: RokkaApi;

    constructor(organization: string, apiKey: string) {
        this.organization = organization;
        this.client = rokkaClient({
            apiKey
        });
    }

    createStack(stack: StackDefinition): Promise<StackDefinition> {
        if (isNoopStack(stack)) {
            return Promise.resolve(stack)
        }

        const operations = [
            this.client.operations.resize(stack.width, stack.height, {
                // @ts-ignore
                mode: stack.mode
            })
        ];

        if (stack.crop) {
            operations.push(
                this.client.operations.crop(stack.width, stack.height, {
                    anchor: 'auto',
                    mode: 'absolute'
                })
            );
        }

        const queryParams = { overwrite: true };
        return this.client.stacks
            .create(this.organization, stack.name, { operations }, queryParams)
            .then(() => {
                return stack;
            });
    }
}
