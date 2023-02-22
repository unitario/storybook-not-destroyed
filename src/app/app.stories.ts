import type { Meta, StoryObj } from '@storybook/angular';
import { AppComponent } from './app.component';

const meta: Meta<AppComponent> = {
  title: 'AppComponent',
  component: AppComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AppComponent>;

export const Primary: Story = {
  args: {
    type: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    type: "Secondary",
  },
};