
import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component
export default class TouchMixin extends Vue {

  public startX: number = 0;

  public startY: number = 0;

  public deltaX: number = 0;

  public deltaY: number = 0;

  public direction: string = '';

  private MIN_DISTANCE: number = 10;

  public touchStart(event: TouchEvent) {
    this.resetTouchStatus();
    const touch = event.touches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
  }

  public touchMove(event: TouchEvent) {
    const touch = event.touches[0];
    this.deltaX = touch.clientX - this.startX;
    this.deltaY = touch.clientY - this.startY;
    this.direction = this.direction || this.getDirection(this.deltaX, this.deltaY);
  }

  public resetTouchStatus() {
    this.startX = 0;
    this.startY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.direction = '';
  }

  private getDirection(x: number, y: number) {
    x = Math.abs(x);
    y = Math.abs(y);

    if (x > y && x > this.MIN_DISTANCE) {
      return 'horizontal';
    }

    if (y > x && y > this.MIN_DISTANCE) {
      return 'vertical';
    }

    return '';
  }

}
