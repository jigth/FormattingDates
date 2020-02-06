// Format (Year3MonthDay_Dash) -> YYY-MM-DD HH:mm

const FormatBase = require('./FormatBase');

class FormatYear3MonthDay_Dash extends FormatBase{
    constructor(year, month, day, hour, minutes) {
        super(year, month, day, hour, minutes)
    }

    toString() {
        let year = this.year.substr(1);
        return `${year}-${this.month}-${this.day} ${this.hour}:${this.minutes}`
    }
}

module.exports = FormatYear3MonthDay_Dash;