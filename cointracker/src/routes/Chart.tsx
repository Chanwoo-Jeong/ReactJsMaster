import { useParams } from "react-router-dom"

function Chart () {
    const params = useParams()
    console.log(params)
    return <>
    Chart part
    </>
}

export default Chart