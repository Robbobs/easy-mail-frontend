import { Fragment } from 'react';

export interface Config<T>{
    label: string;
    render: (item: T) => React.ReactNode;
    sortValue?: (item: T) => string | number;
    header?: () => React.ReactNode;
}

export interface TableProps<T> {
    data: T[];
    config: Config<T>[];
    keyFn: (item: T) => string | number;
}

export default function Table<T>({ data, config, keyFn }: TableProps<T>) {
    const renderedHeaders = config.map((header) =>{

        if (header.header){
            return <Fragment key={header.label}>{header.header()}</Fragment>;
        }

        return <th key={ header.label }>{ header.label }</th>     
    });

    const renderedRows = data.map((rowData) => {
        
        const renderedCells = config.map((column) => {
            return (
                <td className="py-2 pr-20" key={column.label}>
                    {column.render(rowData)}
                </td>
            );
        });       


        return(
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        )
    });

    return(
        <table className="table-auto border-spacing-2 text-left">
            <thead>
                <tr className="border-b-2">
                    { renderedHeaders }
                </tr>
            </thead>
            <tbody>{ renderedRows }</tbody>
        </table>
    )
}