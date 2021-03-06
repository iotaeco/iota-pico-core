Object.defineProperty(exports, "__esModule", { value: true });
const factoryBase_1 = require("./factoryBase");
/**
 * Factory to generate rng service.
 */
class RngServiceFactory extends factoryBase_1.FactoryBase {
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
        if (!RngServiceFactory._instance) {
            RngServiceFactory._instance = new RngServiceFactory();
        }
        return RngServiceFactory._instance;
    }
    /* @internal */
    getInstance() {
        return RngServiceFactory.instance();
    }
}
exports.RngServiceFactory = RngServiceFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm5nU2VydmljZUZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yaWVzL3JuZ1NlcnZpY2VGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrQ0FBNEM7QUFFNUM7O0dBRUc7QUFDSCxNQUFhLGlCQUFrQixTQUFRLHlCQUF3QjtJQUkzRDs7O09BR0c7SUFDSDtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7WUFDOUIsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztTQUN6RDtRQUNELE9BQU8saUJBQWlCLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxlQUFlO0lBQ0wsV0FBVztRQUNqQixPQUFPLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7Q0FDSjtBQTNCRCw4Q0EyQkMifQ==