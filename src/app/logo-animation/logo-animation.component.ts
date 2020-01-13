import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-animation',
  template: ` <lottie-animation-view
                    [options]="lottieConfig"
                    [width]="500"
                    (animCreated)="handleAnimation($event)">
              </lottie-animation-view>`
})
export class LogoAnimationComponent {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor() {
    this.lottieConfig = {
      path: 'assets/animation.json',
      renderer: 'canvas',
      autoplay: true,
      loop: false
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }
}
