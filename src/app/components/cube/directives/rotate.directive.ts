import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';
import { GameResultService } from 'src/app/@core/services/game-result.service';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective {
  @Input() rotationType: string;

  private el: ElementRef;

  private possibleTransformations = [
  {type: 'front', transformation: 'translateZ(-100px) rotateY(0deg);'},
  {type: 'back', transformation:  'translateZ(-100px) rotateY(-90deg)'},
  {type: 'right', transformation:  'translateZ(-100px) rotateY(-180deg)'},
  {type: 'left', transformation:  'translateZ(-100px) rotateY(90deg)'},
  {type: 'top', transformation: 'translateZ(-100px) rotateX(-90deg)'},
  {type: 'bottom', transformation: 'translateZ(-100px) rotateX(90deg)'}
  ];

  constructor(el: ElementRef, private renderer: Renderer2, private gameResultService: GameResultService) {
    this.el = el;
  }

  @HostListener('click') onClick() {
    this.rotate();
  }

  private rotate() {
    const rotationDirection = this.possibleTransformations.find((currentType) =>
      currentType.type === this.rotationType
    );

    this.renderer.setStyle(this.el.nativeElement, 'transform', rotationDirection.transformation);

    this.disableCube();
  }

  private disableCube() {
    this.renderer.setStyle(this.el.nativeElement, 'pointer-events', 'none');
    this.renderer.addClass(this.el.nativeElement, 'cube-disabled');
  }
}
