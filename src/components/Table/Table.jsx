import './Table.css'

function Table(props) {
    return(
        <tr className='Table'>
            <td>{props.pos ?? "0"}</td>
            <td>{props.team ?? "Algum"}</td>
            <td>{props.points ?? "69"}</td>
            <td>{props.gf ?? "10"}</td>
            <td>{props.gs ?? "10"}</td>
        </tr>
    )
}

export default Table