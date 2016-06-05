import RefData from './RefData';

export default class RowDataFactory {

    createRowData() {
        var rowData = [];

        for (var i = 0; i < 100; i++) {
            var vehicleRegistration = RefData.REGISTRATIONS[i % RefData.REGISTRATIONS.length];
            rowData.push({
                name: RefData.FIRST_NAMES[i % RefData.FIRST_NAMES.length] + ' ' + RefData.LAST_NAMES[i % RefData.LAST_NAMES.length],
                registration: vehicleRegistration,
                score: Math.floor(Math.random() * 100),
                speeding_score: Math.floor(Math.random() * 100),
                accel_score: Math.floor(Math.random() * 100),
                brake_score: Math.floor(Math.random() * 100),
            });
        }

        return rowData;
    }
}


