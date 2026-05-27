export function pagination(length, arr, currentPage ) {
    const TOUR_PER_PAGE= 6;
    const startIndex= (currentPage - 1) * TOUR_PER_PAGE;
    const endIndex= currentPage * TOUR_PER_PAGE;

    // const pageTours= toursList.slice(startIndex, endIndex);

    const pages= Math.ceil(length / TOUR_PER_PAGE);
    const pageTours= arr.slice(startIndex, endIndex);
    return {
        pages,
        pageTours
    };
}