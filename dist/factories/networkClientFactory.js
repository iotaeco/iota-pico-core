Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = require("./factoryBase");
/**
 * Factory to generate network clients.
 */
class NetworkClientFactory extends factoryBase_1.FactoryBase {
    /**
     * Don't allow manual construction of the factory.
     * @internal
     */
    constructor() {
        super();
    }
    /**
     * Get the instance of the factory.
     * @returns The factory instance.
     */
    static instance() {
        if (!NetworkClientFactory._instance) {
            NetworkClientFactory._instance = new NetworkClientFactory();
        }
        return NetworkClientFactory._instance;
    }
    /* @internal */
    getInstance() {
        return NetworkClientFactory.instance();
    }
}
exports.NetworkClientFactory = NetworkClientFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya0NsaWVudEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yaWVzL25ldHdvcmtDbGllbnRGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrQ0FBNEM7QUFFNUM7O0dBRUc7QUFDSCwwQkFBa0MsU0FBUSx5QkFBMkI7SUFJakU7OztPQUdHO0lBQ0g7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUMsUUFBUTtRQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFO1lBQ2pDLG9CQUFvQixDQUFDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7U0FDL0Q7UUFDRCxPQUFPLG9CQUFvQixDQUFDLFNBQVMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsZUFBZTtJQUNMLFdBQVc7UUFDakIsT0FBTyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0NBQ0o7QUEzQkQsb0RBMkJDIn0=