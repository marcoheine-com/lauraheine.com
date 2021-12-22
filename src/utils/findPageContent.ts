export const findPageContent = (sliceType: string, pageContent: any) =>
  pageContent.find((slice) => slice.slice_type === sliceType)
