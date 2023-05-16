import { Subject } from "rxjs";

const FRUITS: string[] = [
    'acorn_squash', 'apple', 'bell_pepper', 'blueberries', 'broccoli',
    'carrot', 'celery', 'chili_pepper', 'corn', 'eggplant', 'harold',
    'lettuce', 'mushroom', 'onion', 'potato', 'pumpkin', 'radish', 'squash',
    'strawberry', 'sugar_snap', 'tomato', 'zucchini' ];

export class InventoryService {

    getInventory(): string[] {
        return FRUITS;
    }

}