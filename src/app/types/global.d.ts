declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

declare module '*.svg' {
    // eslint-disable-next-line no-undef
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
