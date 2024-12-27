
    export type RemoteKeys = 'remote/App';
    type PackageType<T> = T extends 'remote/App' ? typeof import('remote/App') :any;