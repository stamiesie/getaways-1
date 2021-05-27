export const pageCounter = (currentPage, places) => {
    const start = (currentPage - 1) * 10;
    const end = start + 10;
    const slicedResult = places.slice(start, end)
    return slicedResult;
};
