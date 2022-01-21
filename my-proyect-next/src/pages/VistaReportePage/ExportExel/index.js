import React from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class ExportExel extends React.Component {
    constructor(props) {
        super(props);

    }
    getDataSet() {
        var dataSet = [];
        dataSet = this.props.dataSet
        console.log("dataSet");
        console.log(dataSet);
        return [dataSet];
    }
    render() {
        return (
            <ExcelFile element={
                <button className="btn" style={{
                    width: 200,
                    height: 40,
                    borderRadius: 10,
                    background: "#006F3B",
                }}><p class="text-light">Exportar Excel</p>
                </button>}>
                <ExcelSheet dataSet={this.getDataSet()} name="Hoja 1">
                </ExcelSheet>
            </ExcelFile >
        );
    }
}

