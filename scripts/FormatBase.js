// Base class of format. Default separator is '/'

// Base format: DD/MM/YY HH:mm
class FormatBase {
    
    constructor(year, month, day, hour, minutes) {
        this.Year = year.toString();
        this.Month = month.toString();
        this.Day = day.toString();
        this.Hour = hour.toString();
        this.Minutes = minutes.toString();

        this.beautifyFormat();

        // This attribute is just for legibility, it should not be used by child classes
        this.format = `${this.Day}/${this.Month}/${this.Year} ${this.Hour}:${this.Minutes}`;
    }

    beautifyFormat() {
        if (this.Month.length < 2) this.Month = `0${this.Month}`;
        if (this.Day.length < 2) this.Day = `0${this.Day}`;
        if (this.Hour.length < 2) this.Hour = `0${this.Hour}`;
        if (this.Minutes.length < 2) this.Minutes = `0${this.Minutes}`;
    }
    
    get year() {
        return this.Year;
    }

    get month() {
        return this.Month;
    }

    get day() {
        return this.Day;
    }

    get hour() {
        return this.Hour;
    }

    
    get minutes() {
        return this.Minutes;
    }

    changeSeparator(separator) {
        let thisFormat = Array.from(this.format);

        for (let i = 0; i < thisFormat.length; i++) {
            let sep = thisFormat[i];
            if(sep == '/') {  // Base class separator
                thisFormat[i] = separator;
            }
        }
        return thisFormat.join('');
    }

    toString() {
        // This method is to be overriten expressing some format like this
        return this.format;
    }
}

module.exports = FormatBase;
