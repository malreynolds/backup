import ReactDOM from 'react-dom';
import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import RefData from './RefData';
import RowDataFactory from './RowDataFactory';
import ColDefFactory from './ColDefFactory.jsx';

// take this line out if you do not want to use ag-Grid-Enterprise
// import 'ag-grid-enterprise';

export default class MyApp extends React.Component {

    constructor() {
        super();

        this.rowDataFactory = new RowDataFactory();
        this.colDefFactory = new ColDefFactory();

        function getRows(params) {
            var that = this;
            this.showGridLoader = true;
            setTimeout(() => {
                var count = params.endRow - params.startRow;
                if (!this.data) {
                    this.data = that.getData(count || 150);
                }
                params.successCallback(rowDataFactory.createRowData(), 15000);
                this.showGridLoader = false;
            }, 5000);
        }

        this.state = {
            quickFilterText: null,
            showGrid: true,
            showToolPanel: false,
            columnDefs: this.colDefFactory.createColDefs(),
            dataSource: {
                datasource: {
                    getRows: getRows.bind(this),
                    rowCount: null,
                    pageSize: 100,
                    overflowSize: 100,
                    maxConcurrentRequests: 3
                }
            },
            rowData: this.rowDataFactory.createRowData(),
            icons: {
                columnRemoveFromGroup: '<i class="fa fa-remove"/>',
                filter: '<i class="fa fa-filter"/>',
                sortAscending: '<i class="fa fa-long-arrow-down"/>',
                sortDescending: '<i class="fa fa-long-arrow-up"/>',
                groupExpanded: '<i class="fa fa-minus-square-o"/>',
                groupContracted: '<i class="fa fa-plus-square-o"/>',
                columnGroupOpened: '<i class="fa fa-minus-square-o"/>',
                columnGroupClosed: '<i class="fa fa-plus-square-o"/>'
            }
        };

        // the grid options are optional, because you can provide every property
        // to the grid via standard React properties. however, the react interface
        // doesn't block you from using the standard JavaScript interface if you
        // wish. Maybe you have the gridOptions stored as JSON on your server? If
        // you do, the providing the gridOptions as a standalone object is just
        // what you want!
        this.gridOptions = {
            // this is how you listen for events using gridOptions
            onModelUpdated: function() {
                console.log('event onModelUpdated received');
            },
            // this is a simple property
            rowBuffer: 10 // no need to set this, the default is fine for almost all scenarios
        };


        this.handleResize = () => {
            setTimeout(this.api.sizeColumnsToFit(), 500);
        }
    }

    componentDidMount() {
        this.api.sizeColumnsToFit();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    onGridReady(params) {
        this.api = params.api;
        this.columnApi = params.columnApi;
    }

    onQuickFilterText(event) {
        this.setState({quickFilterText: event.target.value});
    }

    onCellClicked(event) {
        console.log('onCellClicked: ' + event.data.name + ', col ' + event.colIndex);
    }

    onRowSelected(event) {
        console.log('onRowSelected: ' + event.node.data.name);
    }

    render() {
        var gridTemplate = (
            <div style={{height: 400}} className="ag-blue">
                <AgGridReact
                    // gridOptions is optional - it's possible to provide
                    // all values as React props
                    gridOptions={this.gridOptions}

                    // listening for events
                    onGridReady={this.onGridReady.bind(this)}
                    onRowSelected={this.onRowSelected.bind(this)}
                    onCellClicked={this.onCellClicked.bind(this)}

                    // binding to simple properties
                    showToolPanel={this.state.showToolPanel}
                    quickFilterText={this.state.quickFilterText}

                    // binding to an object property
                    icons={this.state.icons}

                    // binding to array properties
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    // dataSource = {this.state.dataSource}

                    // no binding, just providing hard coded strings for the properties
                    rowSelection="multiple"
                    enableColResize="true"
                    enableSorting="true"
                    enableFilter="true"
                    groupHeaders="true"
                    rowHeight="22"
                    debug="true"
                    // rowModelType="pagination"
                />
            </div>
        );

        return <div>
            <div widthstyle={{padding: '4px'}}>
                {gridTemplate}
            </div>
        </div>;
    }

}
