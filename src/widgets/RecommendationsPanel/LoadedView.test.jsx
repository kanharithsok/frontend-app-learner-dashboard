import React from 'react';
import { shallow } from 'enzyme';

import LoadedView from './LoadedView';
import mockData from './mockData';
import messages from './messages';

jest.mock('./components/CourseCard', () => 'CourseCard');
jest.mock('hooks', () => ({
  reduxHooks: {
    usePlatformSettingsData: () => ({
      courseSearchUrl: 'course-search-url',
    }),
  },
}));
jest.mock('./track', () => ({
  findCoursesWidgetClicked: (href) => jest.fn().mockName(`track.findCoursesWidgetClicked('${href}')`),
}));

describe('RecommendationsPanel LoadedView', () => {
  const props = {
    courses: mockData.courses,
    isControl: null,
  };
  describe('snapshot', () => {
    test('without personalize recommendation', () => {
      const el = shallow(<LoadedView {...props} />);
      expect(el).toMatchSnapshot();
      expect(el.find('h3').text()).toEqual(messages.popularCoursesHeading.defaultMessage);
    });
    test('with personalize recommendation', () => {
      const el = shallow(<LoadedView {...props} isControl={false} />);
      expect(el).toMatchSnapshot();
      expect(el.find('h3').text()).toEqual(messages.recommendationsHeading.defaultMessage);
    });
  });
});
