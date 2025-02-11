type Page = {
  data: {
    total: number;
    clips: Clip[];
  };
  pagination: {
    hasMore: boolean;
    cursor: null | string;
  };
};
