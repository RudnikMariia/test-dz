import { mount } from '@vue/test-utils';
import HeaderComp from '@/components/HeaderComp.vue';

describe('HeaderComp.vue', () => {
    it('renders logo text correctly', () => {
        const wrapper = mount(HeaderComp);
        expect(wrapper.find('.logo').text()).toBe('INVENTORY');
    });

    it('renders current day, date, and time', async () => {
        const wrapper = mount(HeaderComp);

        const fixedDate = new Date('2024-07-22T10:30:00');

        const originalDate = global.Date;
        global.Date = jest.fn(() => fixedDate) as unknown as typeof Date;

        await wrapper.vm.$nextTick();

        expect(wrapper.find('.datetime div:nth-child(1)').text()).toBe(fixedDate.toLocaleDateString('uk-UA', { weekday: 'long' }));
        expect(wrapper.find('.datetime div:nth-child(2)').text()).toContain(fixedDate.toLocaleDateString('uk-UA', { day: '2-digit', month: 'short', year: 'numeric' }));
        expect(wrapper.find('.datetime div:nth-child(2)').text()).toContain(fixedDate.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' }));

        global.Date = originalDate;
    });
});
