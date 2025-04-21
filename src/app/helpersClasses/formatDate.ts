export class ownFormatDate{
    static fromDateToDescription(date: any){
        date = new Date(date);

        const opciones: Intl.DateTimeFormatOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        date = new Intl.DateTimeFormat('en-US', opciones)
          .format(date)
          .replace(',', '');

        return date;
    }
}