const { getComponent, util } = UIkit;
const {
  $,
  $$,
  addClass,
  data,
  on,
  removeClass,
} = util;

const filterComp = getComponent($('div[uk-filter]'), 'filter');

const simulateUrl = ({ currentTarget }) => {
  const urlParams = new URLSearchParams(data(currentTarget, 'url')); // replace with window.location.search

  if (urlParams.has('filter')) {
    const filter = urlParams.get('filter');

    $$('li[uk-filter-control]').forEach((item) => {
      removeClass(item, 'uk-active');

      if (data(item, 'uk-filter-control') === `[data-tags*='${filter}']`) {
        addClass(item, 'uk-active');
        filterComp.apply(item);
      }
    });
  }
};

on('.simulate-url', 'click', simulateUrl);
