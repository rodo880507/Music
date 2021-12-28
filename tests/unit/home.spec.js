import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import SongItem from '@/components/SongItem.vue';
import icon from '@/directives/icon';

jest.mock('@/includes/firebase', () => {});

describe('Home.vue', () => {
  test('renders list of songs', () => {
    const songs = [{}, {}, {}];

    Home.methods.getSongs = () => false;

    const component = shallowMount(Home, {
      data() {
        return {
          songs,
        };
      },
      global: {
        directives: {
          icon,
        },
        mocks: {
          $t: (message) => message,
        },
      },
    });

    const items = component.findAllComponents(SongItem);

    expect(items).toHaveLength(songs.length);

    items.forEach((wrapper, i) => {
      expect(wrapper.props().song).toStrictEqual(songs[i]);
      // expect(wrapper.props().song).toBe(songs[i]);
    });
  });
});
