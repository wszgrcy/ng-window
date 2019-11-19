export interface ObjectRef extends Object {
    [name: string]: any;
}

export function mixinObjectExtend(object: ObjectRef) {
    if (Object.getPrototypeOf(object) === null) { object = Object.assign({}, object); }
    return {
        has: (key: string): boolean => {
            if ('has' in object) {
                return object.has(key);
            } else {
                return object.hasOwnProperty(key);
            }
        },
        get: (key: string): string | null => {
            if ('get' in object) {
                return object.get(key);
            } else {
                return object[key] || null;
            }
        },
        keys: (): string[] => {
            if ('keys' in object) {
                return object.keys();
            } else {
                return Object.keys(object);
            }
        },
        getAll: (key: string): string[] => {
            if ('getAll' in object) {
                return object.getAll(key);
            } else {
                return [object[key]];
            }
        },
        append: (name: string, value) => {
            if ('append' in object) {
                return object.append(name, value);
            } else {
                Object.defineProperty(object, name, { value, writable: true, configurable: true, enumerable: true });
                return object;
            }
        },
        set: (name: string, value) => {
            if ('set' in object) {
                return object.set(name, value);
            } else {
                object[name] = value;
                return object;
            }
        },
        delete: (name: string, value?) => {
            if ('delete' in object) {
                return object.delete(name, value);
            } else {
                delete object[name];
                return object;
            }
        },
    };
}
