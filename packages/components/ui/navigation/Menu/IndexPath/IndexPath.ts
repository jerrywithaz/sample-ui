import { IndexPath as IIndexPath } from './IndexPath.types';

class IndexPath implements IIndexPath {
    public row: number;
    public section?: number;

    constructor(row: number, section?: number) {
        this.row = row;
        this.section = section;
    }
}

export default IndexPath;
