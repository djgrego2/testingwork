export class DataUtils {
  public static dateTimeToLocalDate(dateTime: string): string {
    const date = new Date(dateTime);
    const formattedDate = `${date.getUTCDate().toString().padStart(2, "0")}/${(
      date.getUTCMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getUTCFullYear()}`;
    return formattedDate;
  }
}
