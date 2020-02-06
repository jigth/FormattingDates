// Format (DayMontYear_Dash) -> DD-MM-YYYY HH:mm

const FormatBase = require('./FormatBase');

class FormatDayMonthYear_Dash extends FormatBase {
    constructor(year, month, day, hour, minutes) {
        super(year, month, day, hour, minutes);
    }

    toString() {
        let str = super.changeSeparator('-');  // Super format: DD/MM/YY HH:mm
        return str;
    }
}

module.exports = FormatDayMonthYear_Dash;