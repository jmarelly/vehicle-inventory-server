export const resObject = (message: string = '', data: any = []) => {
    const obj: {data: any, message: string} = {data, message};
    return obj;
}