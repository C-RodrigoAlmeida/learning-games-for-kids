export class StringUtils {

    public static isNullOrEmpty(val: string): boolean {
        if (val === undefined || val === null || val.trim() === '') {
            return true;
        }
        return false;
    };

    public static stringCharFilter(entry: string): string {
        return entry.replace(/[^0-9]/g, '');
    }
}