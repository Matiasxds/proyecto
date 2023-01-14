import { __read, __spread, __values, __decorate, __metadata, __param } from 'tslib';
import { EventEmitter, Output, Input, Component, Inject, ElementRef, NgModule } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { timer } from 'rxjs';

var CircleProgressOptions = /** @class */ (function () {
    function CircleProgressOptions() {
        this.class = '';
        this.backgroundGradient = false;
        this.backgroundColor = 'transparent';
        this.backgroundGradientStopColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsFontWeight = 'normal';
        this.unitsColor = '#444444';
        this.outerStrokeGradient = false;
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeGradientStopColor = 'transparent';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.titleFontWeight = 'normal';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.subtitleFontWeight = 'normal';
        this.imageSrc = undefined;
        this.imageHeight = undefined;
        this.imageWidth = undefined;
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showImage = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
        this.startFromZero = true;
        this.showZeroOuterStroke = true;
        this.lazy = false;
    }
    return CircleProgressOptions;
}());
/** @dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351 */
var CircleProgressComponent = /** @class */ (function () {
    function CircleProgressComponent(defaultOptions, elRef, document) {
        var _this = this;
        this.elRef = elRef;
        this.document = document;
        this.onClick = new EventEmitter();
        // <svg> of component
        this.svgElement = null;
        // whether <svg> is in viewport
        this.isInViewport = false;
        // event for notifying viewport change caused by scrolling or resizing
        this.onViewportChanged = new EventEmitter;
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;
        this.render = function () {
            _this.applyOptions();
            if (_this.options.lazy) {
                // Draw svg if it doesn't exist
                _this.svgElement === null && _this.draw(_this._lastPercent);
                // Draw it only when it's in the viewport
                if (_this.isInViewport) {
                    // Draw it at the latest position when I am in.
                    if (_this.options.animation && _this.options.animationDuration > 0) {
                        _this.animate(_this._lastPercent, _this.options.percent);
                    }
                    else {
                        _this.draw(_this.options.percent);
                    }
                    _this._lastPercent = _this.options.percent;
                }
            }
            else {
                if (_this.options.animation && _this.options.animationDuration > 0) {
                    _this.animate(_this._lastPercent, _this.options.percent);
                }
                else {
                    _this.draw(_this.options.percent);
                }
                _this._lastPercent = _this.options.percent;
            }
        };
        this.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
            var angleInRadius = angleInDegrees * Math.PI / 180;
            var x = centerX + Math.sin(angleInRadius) * radius;
            var y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = function (percent) {
            var _a, _b, e_1, _c, e_2, _d;
            // make percent reasonable
            percent = (percent === undefined) ? _this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            var circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            var boxSize = _this.options.radius * 2 + _this.options.outerStrokeWidth * 2;
            if (_this.options.showBackground) {
                boxSize += (_this.options.backgroundStrokeWidth * 2 + _this.max(0, _this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            var centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            var startPoint = { x: centre.x, y: centre.y - _this.options.radius };
            // get the end point of the arc
            var endPoint = _this.polarToCartesian(centre.x, centre.y, _this.options.radius, 360 * (_this.options.clockwise ?
                circlePercent :
                (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (_this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            var largeArcFlag, sweepFlag;
            if (circlePercent > 50) {
                _a = __read(_this.options.clockwise ? [1, 1] : [1, 0], 2), largeArcFlag = _a[0], sweepFlag = _a[1];
            }
            else {
                _b = __read(_this.options.clockwise ? [0, 1] : [0, 0], 2), largeArcFlag = _b[0], sweepFlag = _b[1];
            }
            // percent may not equal the actual percent
            var titlePercent = _this.options.animateTitle ? percent : _this.options.percent;
            var titleTextPercent = titlePercent > _this.options.maxPercent ?
                _this.options.maxPercent.toFixed(_this.options.toFixed) + "+" : titlePercent.toFixed(_this.options.toFixed);
            var subtitlePercent = _this.options.animateSubtitle ? percent : _this.options.percent;
            // get title object
            var title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.titleColor,
                fontSize: _this.options.titleFontSize,
                fontWeight: _this.options.titleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (_this.options.titleFormat !== undefined && _this.options.titleFormat.constructor.name === 'Function') {
                var formatted = _this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = __spread(formatted);
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (_this.options.title instanceof Array) {
                        title.texts = __spread(_this.options.title);
                    }
                    else {
                        title.texts.push(_this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            var subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: _this.options.subtitleColor,
                fontSize: _this.options.subtitleFontSize,
                fontWeight: _this.options.subtitleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (_this.options.subtitleFormat !== undefined && _this.options.subtitleFormat.constructor.name === 'Function') {
                var formatted = _this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = __spread(formatted);
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (_this.options.subtitle instanceof Array) {
                    subtitle.texts = __spread(_this.options.subtitle);
                }
                else {
                    subtitle.texts.push(_this.options.subtitle.toString());
                }
            }
            // get units object
            var units = {
                text: "" + _this.options.units,
                fontSize: _this.options.unitsFontSize,
                fontWeight: _this.options.unitsFontWeight,
                color: _this.options.unitsColor
            };
            // get total count of text lines to be shown
            var rowCount = 0, rowNum = 1;
            _this.options.showTitle && (rowCount += title.texts.length);
            _this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (_this.options.showTitle) {
                try {
                    for (var _e = __values(title.texts), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var span = _f.value;
                        title.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                        rowNum++;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            // calc dy for each tspan for subtitle
            if (_this.options.showSubtitle) {
                try {
                    for (var _g = __values(subtitle.texts), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var span = _h.value;
                        subtitle.tspans.push({ span: span, dy: _this.getRelativeY(rowNum, rowCount) });
                        rowNum++;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_d = _g.return)) _d.call(_g);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            // create ID for gradient element
            if (null === _this._gradientUUID) {
                _this._gradientUUID = _this.uuid();
            }
            // Bring it all together
            _this.svg = {
                viewBox: "0 0 " + boxSize + " " + boxSize,
                // Set both width and height to '100%' if it's responsive
                width: _this.options.responsive ? '100%' : boxSize,
                height: _this.options.responsive ? '100%' : boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius + _this.options.outerStrokeWidth / 2 + _this.options.backgroundPadding,
                    fill: _this.options.backgroundColor,
                    fillOpacity: _this.options.backgroundOpacity,
                    stroke: _this.options.backgroundStroke,
                    strokeWidth: _this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: "M " + startPoint.x + " " + startPoint.y + "\n        A " + _this.options.radius + " " + _this.options.radius + " 0 " + largeArcFlag + " " + sweepFlag + " " + endPoint.x + " " + endPoint.y,
                    stroke: _this.options.outerStrokeColor,
                    strokeWidth: _this.options.outerStrokeWidth,
                    strokeLinecap: _this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: _this.options.radius - _this.options.space - _this.options.outerStrokeWidth / 2 - _this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: _this.options.innerStrokeColor,
                    strokeWidth: _this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
                image: {
                    x: centre.x - _this.options.imageWidth / 2,
                    y: centre.y - _this.options.imageHeight / 2,
                    src: _this.options.imageSrc,
                    width: _this.options.imageWidth,
                    height: _this.options.imageHeight,
                },
                outerLinearGradient: {
                    id: 'outer-linear-' + _this._gradientUUID,
                    colorStop1: _this.options.outerStrokeColor,
                    colorStop2: _this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : _this.options.outerStrokeGradientStopColor,
                },
                radialGradient: {
                    id: 'radial-' + _this._gradientUUID,
                    colorStop1: _this.options.backgroundColor,
                    colorStop2: _this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : _this.options.backgroundGradientStopColor,
                }
            };
        };
        this.getAnimationParameters = function (previousPercent, currentPercent) {
            var MIN_INTERVAL = 10;
            var times, step, interval;
            var fromPercent = _this.options.startFromZero ? 0 : (previousPercent < 0 ? 0 : previousPercent);
            var toPercent = currentPercent < 0 ? 0 : _this.min(currentPercent, _this.options.maxPercent);
            var delta = Math.abs(Math.round(toPercent - fromPercent));
            if (delta >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(delta / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = delta;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(_this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = _this.options.animationDuration / interval;
                if (!_this.options.animateTitle && !_this.options.animateSubtitle && delta > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(delta / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = function (previousPercent, currentPercent) {
            if (_this._timerSubscription && !_this._timerSubscription.closed) {
                _this._timerSubscription.unsubscribe();
            }
            var fromPercent = _this.options.startFromZero ? 0 : previousPercent;
            var toPercent = currentPercent;
            var _a = _this.getAnimationParameters(fromPercent, toPercent), step = _a.step, interval = _a.interval;
            var count = fromPercent;
            if (fromPercent < toPercent) {
                _this._timerSubscription = timer(0, interval).subscribe(function () {
                    count += step;
                    if (count <= toPercent) {
                        if (!_this.options.animateTitle && !_this.options.animateSubtitle && count >= 100) {
                            _this.draw(toPercent);
                            _this._timerSubscription.unsubscribe();
                        }
                        else {
                            _this.draw(count);
                        }
                    }
                    else {
                        _this.draw(toPercent);
                        _this._timerSubscription.unsubscribe();
                    }
                });
            }
            else {
                _this._timerSubscription = timer(0, interval).subscribe(function () {
                    count -= step;
                    if (count >= toPercent) {
                        if (!_this.options.animateTitle && !_this.options.animateSubtitle && toPercent >= 100) {
                            _this.draw(toPercent);
                            _this._timerSubscription.unsubscribe();
                        }
                        else {
                            _this.draw(count);
                        }
                    }
                    else {
                        _this.draw(toPercent);
                        _this._timerSubscription.unsubscribe();
                    }
                });
            }
        };
        this.emitClickEvent = function (event) {
            if (_this.options.renderOnClick) {
                _this.animate(0, _this.options.percent);
            }
            _this.onClick.emit(event);
        };
        this.applyOptions = function () {
            var e_3, _a;
            try {
                // the options of <circle-progress> may change already
                for (var _b = __values(Object.keys(_this.options)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name_1 = _c.value;
                    if (_this.hasOwnProperty(name_1) && _this[name_1] !== undefined) {
                        _this.options[name_1] = _this[name_1];
                    }
                    else if (_this.templateOptions && _this.templateOptions[name_1] !== undefined) {
                        _this.options[name_1] = _this.templateOptions[name_1];
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            // make sure key options valid
            _this.options.radius = Math.abs(+_this.options.radius);
            _this.options.space = +_this.options.space;
            _this.options.percent = +_this.options.percent > 0 ? +_this.options.percent : 0;
            _this.options.maxPercent = Math.abs(+_this.options.maxPercent);
            _this.options.animationDuration = Math.abs(_this.options.animationDuration);
            _this.options.outerStrokeWidth = Math.abs(+_this.options.outerStrokeWidth);
            _this.options.innerStrokeWidth = Math.abs(+_this.options.innerStrokeWidth);
            _this.options.backgroundPadding = +_this.options.backgroundPadding;
        };
        this.getRelativeY = function (rowNum, rowCount) {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            var initialOffset = -0.18, offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = function (a, b) {
            return a < b ? a : b;
        };
        this.max = function (a, b) {
            return a > b ? a : b;
        };
        this.uuid = function () {
            // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        this.findSvgElement = function () {
            if (this.svgElement === null) {
                var tags = this.elRef.nativeElement.getElementsByTagName('svg');
                if (tags.length > 0) {
                    this.svgElement = tags[0];
                }
            }
        };
        this.checkViewport = function () {
            _this.findSvgElement();
            var previousValue = _this.isInViewport;
            _this.isInViewport = _this.isElementInViewport(_this.svgElement);
            if (previousValue !== _this.isInViewport) {
                _this.onViewportChanged.emit({ oldValue: previousValue, newValue: _this.isInViewport });
            }
        };
        this.onScroll = function (event) {
            _this.checkViewport();
        };
        this.loadEventsForLazyMode = function () {
            if (_this.options.lazy) {
                _this.document.addEventListener('scroll', _this.onScroll, true);
                _this.window.addEventListener('resize', _this.onScroll, true);
                if (_this._viewportChangedSubscriber === null) {
                    _this._viewportChangedSubscriber = _this.onViewportChanged.subscribe(function (_a) {
                        var oldValue = _a.oldValue, newValue = _a.newValue;
                        newValue ? _this.render() : null;
                    });
                }
                // svgElement must be created in DOM before being checked.
                // Is there a better way to check the existence of svgElemnt?
                var _timer_1 = timer(0, 50).subscribe(function () {
                    _this.svgElement === null ? _this.checkViewport() : _timer_1.unsubscribe();
                });
            }
        };
        this.unloadEventsForLazyMode = function () {
            // Remove event listeners
            _this.document.removeEventListener('scroll', _this.onScroll, true);
            _this.window.removeEventListener('resize', _this.onScroll, true);
            // Unsubscribe onViewportChanged
            if (_this._viewportChangedSubscriber !== null) {
                _this._viewportChangedSubscriber.unsubscribe();
                _this._viewportChangedSubscriber = null;
            }
        };
        this.document = document;
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    CircleProgressComponent.prototype.isDrawing = function () {
        return (this._timerSubscription && !this._timerSubscription.closed);
    };
    CircleProgressComponent.prototype.isElementInViewport = function (el) {
        // Return false if el has not been created in page.
        if (el === null || el === undefined)
            return false;
        // Check if the element is out of view due to a container scrolling
        var rect = el.getBoundingClientRect(), parent = el.parentNode, parentRect;
        do {
            parentRect = parent.getBoundingClientRect();
            if (rect.top >= parentRect.bottom)
                return false;
            if (rect.bottom <= parentRect.top)
                return false;
            if (rect.left >= parentRect.right)
                return false;
            if (rect.right <= parentRect.left)
                return false;
            parent = parent.parentNode;
        } while (parent != this.document.body);
        // Check its within the document viewport
        if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight))
            return false;
        if (rect.bottom <= 0)
            return false;
        if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth))
            return false;
        if (rect.right <= 0)
            return false;
        return true;
    };
    CircleProgressComponent.prototype.ngOnInit = function () {
        this.loadEventsForLazyMode();
    };
    CircleProgressComponent.prototype.ngOnDestroy = function () {
        this.unloadEventsForLazyMode();
    };
    CircleProgressComponent.prototype.ngOnChanges = function (changes) {
        this.render();
        if ('lazy' in changes) {
            changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
        }
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], CircleProgressComponent.prototype, "onClick", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "class", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "backgroundGradient", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "backgroundColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "backgroundGradientStopColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "backgroundOpacity", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "backgroundStroke", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "backgroundStrokeWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "backgroundPadding", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "radius", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "space", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "percent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "toFixed", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "maxPercent", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "renderOnClick", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "units", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "unitsFontSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "unitsFontWeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "unitsColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "outerStrokeGradient", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "outerStrokeWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "outerStrokeColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "outerStrokeGradientStopColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "outerStrokeLinecap", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "innerStrokeColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CircleProgressComponent.prototype, "innerStrokeWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], CircleProgressComponent.prototype, "titleFormat", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CircleProgressComponent.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "titleColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "titleFontSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "titleFontWeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], CircleProgressComponent.prototype, "subtitleFormat", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], CircleProgressComponent.prototype, "subtitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "subtitleColor", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "subtitleFontSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "subtitleFontWeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], CircleProgressComponent.prototype, "imageSrc", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "imageHeight", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "imageWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "animation", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "animateTitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "animateSubtitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], CircleProgressComponent.prototype, "animationDuration", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showTitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showSubtitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showUnits", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showImage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showBackground", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showInnerStroke", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "clockwise", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "responsive", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "startFromZero", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "showZeroOuterStroke", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CircleProgressComponent.prototype, "lazy", void 0);
    __decorate([
        Input('options'),
        __metadata("design:type", CircleProgressOptions)
    ], CircleProgressComponent.prototype, "templateOptions", void 0);
    CircleProgressComponent = __decorate([
        Component({
            selector: 'circle-progress',
            template: "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"svg\"\n             [attr.viewBox]=\"svg.viewBox\" preserveAspectRatio=\"xMidYMid meet\"\n             [attr.height]=\"svg.height\" [attr.width]=\"svg.width\" (click)=\"emitClickEvent($event)\" [attr.class]=\"options.class\">\n            <defs>\n                <linearGradient *ngIf=\"options.outerStrokeGradient\" [attr.id]=\"svg.outerLinearGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop1\"  [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.outerLinearGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </linearGradient>\n                <radialGradient *ngIf=\"options.backgroundGradient\" [attr.id]=\"svg.radialGradient.id\">\n                    <stop offset=\"5%\" [attr.stop-color]=\"svg.radialGradient.colorStop1\" [attr.stop-opacity]=\"1\"/>\n                    <stop offset=\"95%\" [attr.stop-color]=\"svg.radialGradient.colorStop2\" [attr.stop-opacity]=\"1\"/>\n                </radialGradient>\n            </defs>\n            <ng-container *ngIf=\"options.showBackground\">\n                <circle *ngIf=\"!options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        [attr.fill]=\"svg.backgroundCircle.fill\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n                <circle *ngIf=\"options.backgroundGradient\"\n                        [attr.cx]=\"svg.backgroundCircle.cx\"\n                        [attr.cy]=\"svg.backgroundCircle.cy\"\n                        [attr.r]=\"svg.backgroundCircle.r\"\n                        attr.fill=\"url(#{{svg.radialGradient.id}})\"\n                        [attr.fill-opacity]=\"svg.backgroundCircle.fillOpacity\"\n                        [attr.stroke]=\"svg.backgroundCircle.stroke\"\n                        [attr.stroke-width]=\"svg.backgroundCircle.strokeWidth\"/>\n            </ng-container>            \n            <circle *ngIf=\"options.showInnerStroke\"\n                    [attr.cx]=\"svg.circle.cx\"\n                    [attr.cy]=\"svg.circle.cy\"\n                    [attr.r]=\"svg.circle.r\"\n                    [attr.fill]=\"svg.circle.fill\"\n                    [attr.stroke]=\"svg.circle.stroke\"\n                    [attr.stroke-width]=\"svg.circle.strokeWidth\"/>\n            <ng-container *ngIf=\"+options.percent!==0 || options.showZeroOuterStroke\">\n                <path *ngIf=\"!options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        [attr.stroke]=\"svg.path.stroke\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n                <path *ngIf=\"options.outerStrokeGradient\"\n                        [attr.d]=\"svg.path.d\"\n                        attr.stroke=\"url(#{{svg.outerLinearGradient.id}})\"\n                        [attr.stroke-width]=\"svg.path.strokeWidth\"\n                        [attr.stroke-linecap]=\"svg.path.strokeLinecap\"\n                        [attr.fill]=\"svg.path.fill\"/>\n            </ng-container>\n            <text *ngIf=\"!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)\"\n                  alignment-baseline=\"baseline\"\n                  [attr.x]=\"svg.circle.cx\"\n                  [attr.y]=\"svg.circle.cy\"\n                  [attr.text-anchor]=\"svg.title.textAnchor\">\n                <ng-container *ngIf=\"options.showTitle\">\n                    <tspan *ngFor=\"let tspan of svg.title.tspans\"\n                           [attr.x]=\"svg.title.x\"\n                           [attr.y]=\"svg.title.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.title.fontSize\"\n                           [attr.font-weight]=\"svg.title.fontWeight\"\n                           [attr.fill]=\"svg.title.color\">{{tspan.span}}</tspan>\n                </ng-container>\n                <tspan *ngIf=\"options.showUnits\"\n                       [attr.font-size]=\"svg.units.fontSize\"\n                       [attr.font-weight]=\"svg.units.fontWeight\"\n                       [attr.fill]=\"svg.units.color\">{{svg.units.text}}</tspan>\n                <ng-container *ngIf=\"options.showSubtitle\">\n                    <tspan *ngFor=\"let tspan of svg.subtitle.tspans\"\n                           [attr.x]=\"svg.subtitle.x\"\n                           [attr.y]=\"svg.subtitle.y\"\n                           [attr.dy]=\"tspan.dy\"\n                           [attr.font-size]=\"svg.subtitle.fontSize\"\n                           [attr.font-weight]=\"svg.subtitle.fontWeight\"\n                           [attr.fill]=\"svg.subtitle.color\">{{tspan.span}}</tspan>\n                </ng-container>\n            </text>\n            <image *ngIf=\"options.showImage\" preserveAspectRatio=\"none\" \n                [attr.height]=\"svg.image.height\"\n                [attr.width]=\"svg.image.width\"\n                [attr.xlink:href]=\"svg.image.src\"\n                [attr.x]=\"svg.image.x\"\n                [attr.y]=\"svg.image.y\"\n            />\n        </svg>\n    "
        }),
        __param(2, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [CircleProgressOptions, ElementRef, Object])
    ], CircleProgressComponent);
    return CircleProgressComponent;
}());

var NgCircleProgressModule = /** @class */ (function () {
    function NgCircleProgressModule() {
    }
    NgCircleProgressModule_1 = NgCircleProgressModule;
    NgCircleProgressModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: NgCircleProgressModule_1,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    };
    var NgCircleProgressModule_1;
    NgCircleProgressModule = NgCircleProgressModule_1 = __decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: [
                CircleProgressComponent,
            ],
            exports: [
                CircleProgressComponent,
            ]
        })
    ], NgCircleProgressModule);
    return NgCircleProgressModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule };
//# sourceMappingURL=ng-circle-progress.js.map
