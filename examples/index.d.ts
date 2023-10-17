declare global {
    interface Window {
        UMDFooterElement: typeof UMDFooterElement;
    }
}
export default class UMDFooterElement extends HTMLElement {
    _shadow: ShadowRoot;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    connectedCallback(): void;
}
//# sourceMappingURL=index.d.ts.map