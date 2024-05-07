/* eslint-disable @typescript-eslint/no-explicit-any */
export const getQueryParams = (onReject: (e: any) => void) => {
    const urlParams = new URLSearchParams(window.location.search);
    const branchId = urlParams.get('branchId');
    const eventId = urlParams.get('eventId');
    if (!branchId || !eventId) {
        onReject('No branch id or event id found');
        return { branchId, eventId };
    }
    return { branchId, eventId };
};
