///<reference path="../webgl.d.ts" />
///<reference path="container.d.ts" />
declare module qtek {

    export module core {

        export module util {

            interface ListIterator<T, TResult> {
                (item: T, key: number, list: T[]): TResult;
            }

            interface DictionaryIterator<T, TResult> {
                (item: T, key: string, obj: IDictionary): TResult;
            }

            export function genGUID(): number;

            export function relative2absolute(path: string, basePath?: string) : string;

            export function extend(target: any, source: any): any;

            export function defaults(target: any, source: any): any;

            export function extendWithPropList(target: any, source: any, propList: string[]): any;

            export function defaultsWithPropList(target: any, source: any, propList: string[]): any;

            export function each<T>(obj: IList<T>, iterator: ListIterator<T, void>, context?: any): void;
            export function each<T>(obj: IDictionary<T>, iterator: DictionaryIterator<T, void>, context?: any): void;

            export function isObject(obj: any): boolean;

            export function isArray(obj: any): boolean;

            export function isArrayLike(obj: any): boolean;

            export function clone<T>(obj: T): T;
        }
    }
}