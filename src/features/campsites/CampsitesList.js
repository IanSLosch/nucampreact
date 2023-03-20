import { Col, Row } from "reactstrap"
import CampsiteCard from "./CampsiteCard"
import { selectAllCampsites } from "./camplsitesSlice";

const CampsitesList = () => {
    const campsites = selectAllCampsites()

    return (
        <Row ms-auto='className'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                    <CampsiteCard campsite={campsite} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default CampsitesList