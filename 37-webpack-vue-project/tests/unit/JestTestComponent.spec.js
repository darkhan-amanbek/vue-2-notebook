import { shallowMount } from '@vue/test-utils';
import JestTestComponent from '@/components/JestTestComponent.vue';

describe('JestTestComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Jest Test Component';
    const wrapper = shallowMount(JestTestComponent, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});