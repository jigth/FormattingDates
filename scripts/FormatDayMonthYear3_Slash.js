// Format3 (DayMontYear_Slash) -> DD/MM/YYY HH:mm

const FormatBase = require('./FormatBase');

class FormatDayMonthYear3_Slash extends FormatBase {
    constructor(year, month, day, hour, minutes) {
        super(year, month, day, hour, minutes)
    }

    toString() {
        let year = this.year.substr(1);
        return `${this.day}/${this.month}/${year} ${this.hour}:${this.month}`
    }
}

module.exports = FormatDayMonthYear3_Slash;