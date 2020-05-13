enum ProgressActions {
  NEXT_PAGE = 'nextPage',
}

const nextPage = () => ({
  type: ProgressActions.NEXT_PAGE,
});

export { ProgressActions, nextPage };
