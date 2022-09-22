import './Table.css'

function Table(props) {
    return(
        <tr className='Table' type={props.type ?? "N"}>
            <td>{props.pos ?? " "}</td>
            <td className='teamText'>{props.name ?? " "} ({props.initial ?? " "})</td>
            <td>{props.points ?? " "}</td>
            <td>{props.gf ?? " "}</td>
            <td>{props.gs ?? " "}</td>
        </tr>
    )
}

export default Table