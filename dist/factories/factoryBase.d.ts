/**
 * Factory to generate types.
 * @typeparam T The generic type for the object types in the factory.
 */
export declare abstract class FactoryBase<T> {
    /**
     * Register a new type with the factory.
     * @param name The name of the type to register.
     * @param typeConstructor The constructor for the type.
     */
    register(name: string, typeConstructor: () => T): void;
    /**
     * Unregister a type from the factory.
     * @param name The name of the type to unregister.
     */
    unregister(name: string): void;
    /**
     * Create an instance of an object from the factory.
     * @param name The name of the type to create.
     * @returns A new instance of the type if it exists, or undefined if it does not.
     */
    create(name: string): T;
}