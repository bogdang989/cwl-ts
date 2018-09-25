import {Optional} from "../../types";

export type LinkMergeMethod = "merge_nested" | "merge_flattened";

export class LinkMerge {

    value: LinkMergeMethod;
    readonly originalValue: Optional<LinkMergeMethod>;

    constructor(value?: LinkMergeMethod) {

        this.originalValue = value;

        if (this.originalValue) {
            this.value = value;
        }
    }

    toString() {
        return this.value;
    }

    serialize(): Optional<LinkMergeMethod> {

        if (this.originalValue || this.value === "merge_flattened" || this.value === "merge_nested") {
            return this.value;
        }
    }

}