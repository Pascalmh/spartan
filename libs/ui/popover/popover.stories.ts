import { radixCross1 } from '@ng-icons/radix-icons';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { HlmButtonDirective } from '../button/helm/src';
import { HlmIconComponent, provideIcons } from '../icon/helm/src';
import { HlmInputDirective } from '../input/helm/src';
import { HlmLabelDirective } from '../label/helm/src';
import { BrnPopoverImports } from './brain/src';
import { HlmPopoverImports } from './helm/src';

export type PopoverProps = { offset: number; align: 'start' | 'center' | 'end' };
const meta: Meta<PopoverProps> = {
	title: 'Popover',
	argTypes: {
		align: { control: 'select', options: ['start', 'center', 'end'] },
	},
	decorators: [
		moduleMetadata({
			imports: [
				BrnPopoverImports,
				HlmPopoverImports,
				HlmButtonDirective,
				HlmLabelDirective,
				HlmInputDirective,
				HlmIconComponent,
			],
			providers: [provideIcons({ radixCross1 })],
		}),
	],
};

export default meta;
type Story = StoryObj<PopoverProps>;

export const Default: Story = {
	args: { offset: 4, align: 'center' },
	render: ({ align, offset }) => ({
		props: { align, offset },
		template: `
    <brn-popover [align]='align' [sideOffset]='offset' closeDelay='100'>
    <div class='py-80 flex flex-col items-center justify-center'>
        <button id='edit-profile' variant='outline' brnPopoverTrigger hlmBtn>Open Popover</button>
    </div>
    <div hlmPopoverContent class='w-80 grid gap-4' *brnPopoverContent='let ctx'>
          <div class='space-y-2'>
            <h4 class='font-medium leading-none'>Dimensions</h4>
            <p class='text-sm text-muted-foreground'>
              Set the dimensions for the layer.
            </p>
          </div>
          <div class='grid gap-2'>
            <div class='grid grid-cols-3 items-center gap-4'>
              <label hlmLabel for='width'>Width</label>
              <input hlmInput
                id='width'
                [defaultValue]="'100%'"
                class='col-span-2 h-8'
              />
            </div>
            <div class='grid grid-cols-3 items-center gap-4'>
              <label hlmLabel for='maxWidth'>Max. width</label>
              <input hlmInput
                id='maxWidth'
                [defaultValue]="'300px'"
                class='col-span-2 h-8'
              />
            </div>
            <div class='grid grid-cols-3 items-center gap-4'>
              <label hlmLabel for='height'>Height</label>
              <input hlmInput
                id='height'
                [defaultValue]="'25px'"
                class='col-span-2 h-8'
              />
            </div>
            <div class='grid grid-cols-3 items-center gap-4'>
              <label hlmLabel for='maxHeight'>Max. height</label>
              <input hlmInput
                id='maxHeight'
                [defaultValue]="'none'"
                class='col-span-2 h-8'
              />
            </div>
          </div>
    </div>
    </brn-popover>
    `,
	}),
};
