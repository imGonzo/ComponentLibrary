import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'instance-ui/dist/instance-ui';

@Component({
    selector: 'instance-ui-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './instance-ui-button.component.html',
    styleUrl: './instance-ui-button.component.scss',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InstanceUIComponent {
    /**
     * Button contents
     *
     * @required
     */
    @Input()
    label: any = 'Button';

    /**
     * Type of button
     */
    @Input()
    appearance: 'primary' | 'secondary' | 'tertiary' | 'ghost' = 'primary';

    /**
     * Show loading spinner
     */
    @Input()
    loading: boolean = false;
}
