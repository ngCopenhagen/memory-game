import {Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {ReplaySubject} from 'rxjs/ReplaySubject';
import {animationFrame} from 'rxjs/scheduler/animationFrame';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/defer';
import 'rxjs/add/observable/timer';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/takeWhile';

/*
* Credit goes to Ben Lesh inspired from the slides found at.
* https://www.slideshare.net/benlesh1/advanced-rxjs-animations
* */

@Component({
    selector: 'itu-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BackgroundComponent implements OnInit, OnDestroy {

    @ViewChild('ship') ship: ElementRef;
    @ViewChild('shipTwo') shipTwo: ElementRef;

    private _kill$: ReplaySubject<boolean> = new ReplaySubject(1);

    private shipXpos = 600;

    ngOnDestroy() {
        this._kill$.next(true);
        this._kill$.complete();
    }

    ngOnInit() {
        Observable.of({
                element: this.ship.nativeElement,
                duration: 80000,
                distance: 1650,
                delay: 2000,
                loop: true,
                y: 0, x: -150
            },
            {
                element: this.shipTwo.nativeElement,
                duration: 80000,
                delay: 512,
                distance: 1750,
                loop: true,
                y: 10, x: -450
            }).subscribe((x) => {
            this.animateElement(x);
        });
    }

    animateElement(aniElement) {
        const msElapsed = (scheduler = animationFrame) => {
            return Observable.defer(() => {
                const start = scheduler.now();
                return Observable.interval(0, scheduler)
                    .map(() => scheduler.now() - start);
            });
        };

        const duration = (ms, scheduler = animationFrame) =>
            msElapsed(scheduler)
                .map(ems => ems / ms)
                .takeWhile(t => t <= 1);

        const distance = (d) => (t) => t * d;

        duration(aniElement.duration)
            .map(distance(aniElement.distance))
            .delay(new Date(Date.now() + aniElement.delay))
            .takeUntil(this._kill$)
            .subscribe((frame) => {
                    aniElement.element.setAttribute(
                        'style',
                        `opacity:1; transform:translate(${aniElement.x + frame}px,
                        ${aniElement.y}px) `);
                }, (error) => {
                    console.log('error', error);
                },
                () => {
                    if (aniElement.loop) {
                        this.animateElement(aniElement);
                    }

                });

    }
}
