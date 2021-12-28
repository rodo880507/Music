import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';
import Button from '@/components/base/Button.vue';

describe('About.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(About, {
      global: {
        components: {
          'base-button': Button,
        },
      },
    });

    expect(wrapper.text()).toContain('about');
  });
});
