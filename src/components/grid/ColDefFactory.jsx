import SkillsCellRenderer from './SkillsCellRenderer.jsx';
import ProficiencyCellRenderer from './ProficiencyCellRenderer.jsx';
import RefData from './RefData';
import {reactCellRendererFactory} from 'ag-grid-react';
import {reactFilterFactory} from 'ag-grid-react';
import SkillsFilter from './SkillsFilter.jsx';
import ProficiencyFilter from './ProficiencyFilter.jsx';

export default class ColDefFactory {

    createColDefs() {

        var columnDefs = [
            {
                headerName: 'Driver',
                children: [
                    {headerName: "Name", field: "name", filter: 'text'},
                    {headerName: "Vehicle Registration", field: "registration", filter: 'text'},
                ]
            },
            {
                headerName: 'Scores',
                children: [
                    {headerName: "Overall Driver Score", field: "score", filter: 'text'},
                    {headerName: "Speeding", field: "speeding_score", filter: 'text'},
                    {headerName: "Harsh Acceleration", field: "accel_score", filter: 'text'},
                    {headerName: "Harsh Braking", field: "brake_score", filter: 'text'},
                ]
            },
        ];
        return columnDefs;
    }
}
