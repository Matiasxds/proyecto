var NgCircleProgressModule_1;
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleProgressComponent, CircleProgressOptions } from './circle-progress.component';
export * from './circle-progress.component';
let NgCircleProgressModule = NgCircleProgressModule_1 = class NgCircleProgressModule {
    static forRoot(options = {}) {
        return {
            ngModule: NgCircleProgressModule_1,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    }
};
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
export { NgCircleProgressModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1jaXJjbGUtcHJvZ3Jlc3MvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsdUJBQXVCLEVBQWtDLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFN0gsY0FBYyw2QkFBNkIsQ0FBQztBQWE1QyxJQUFhLHNCQUFzQiw4QkFBbkMsTUFBYSxzQkFBc0I7SUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUEwQyxFQUFFO1FBQ3pELE9BQU87WUFDTCxRQUFRLEVBQUUsd0JBQXNCO1lBQ2hDLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO2FBQ3BEO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBVFksc0JBQXNCO0lBWGxDLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLFlBQVk7U0FDYjtRQUNELFlBQVksRUFBRTtZQUNaLHVCQUF1QjtTQUN4QjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUF1QjtTQUN4QjtLQUNGLENBQUM7R0FDVyxzQkFBc0IsQ0FTbEM7U0FUWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENpcmNsZVByb2dyZXNzQ29tcG9uZW50LCBDaXJjbGVQcm9ncmVzc09wdGlvbnNJbnRlcmZhY2UsIENpcmNsZVByb2dyZXNzT3B0aW9ucyB9IGZyb20gJy4vY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vY2lyY2xlLXByb2dyZXNzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ2lyY2xlUHJvZ3Jlc3NDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBDaXJjbGVQcm9ncmVzc0NvbXBvbmVudCxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0NpcmNsZVByb2dyZXNzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3Qob3B0aW9uczogQ2lyY2xlUHJvZ3Jlc3NPcHRpb25zSW50ZXJmYWNlID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQ2lyY2xlUHJvZ3Jlc3NNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6IENpcmNsZVByb2dyZXNzT3B0aW9ucywgdXNlVmFsdWU6IG9wdGlvbnN9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19