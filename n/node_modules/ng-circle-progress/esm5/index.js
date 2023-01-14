import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleProgressComponent, CircleProgressOptions } from './circle-progress.component';
export * from './circle-progress.component';
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
    NgCircleProgressModule = NgCircleProgressModule_1 = tslib_1.__decorate([
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
export { NgCircleProgressModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaXJjbGUtcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBa0MscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU3SCxjQUFjLDZCQUE2QixDQUFDO0FBYTVDO0lBQUE7SUFTQSxDQUFDOytCQVRZLHNCQUFzQjtJQUMxQiw4QkFBTyxHQUFkLFVBQWUsT0FBNEM7UUFBNUMsd0JBQUEsRUFBQSxZQUE0QztRQUN6RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLHdCQUFzQjtZQUNoQyxTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQzthQUNwRDtTQUNGLENBQUM7SUFDSixDQUFDOztJQVJVLHNCQUFzQjtRQVhsQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLHVCQUF1QjthQUN4QjtZQUNELE9BQU8sRUFBRTtnQkFDUCx1QkFBdUI7YUFDeEI7U0FDRixDQUFDO09BQ1csc0JBQXNCLENBU2xDO0lBQUQsNkJBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENpcmNsZVByb2dyZXNzQ29tcG9uZW50LCBDaXJjbGVQcm9ncmVzc09wdGlvbnNJbnRlcmZhY2UsIENpcmNsZVByb2dyZXNzT3B0aW9ucyB9IGZyb20gJy4vY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2lyY2xlUHJvZ3Jlc3NDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDaXJjbGVQcm9ncmVzc0NvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0NpcmNsZVByb2dyZXNzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Qob3B0aW9uczogQ2lyY2xlUHJvZ3Jlc3NPcHRpb25zSW50ZXJmYWNlID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQ2lyY2xlUHJvZ3Jlc3NNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IENpcmNsZVByb2dyZXNzT3B0aW9ucywgdXNlVmFsdWU6IG9wdGlvbnN9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19