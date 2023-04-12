import { useSelector } from 'react-redux'
import { Col, Row } from "reactstrap"
import CampsiteCard from "./CampsiteCard"
import { selectAllCampsites } from "./campsitesSlice";
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites)
    const isLoading = useSelector((state) => state.campsites.isLoading)
    const errMsg = useSelector((state) => state.campsites.errMsg)

    // The isLoading variable will keep track of whether the campsites data 
    //  (the array from db.json) is still waiting for a response from a fetch request.
    // The errMsg variable will contain an error message string if the fetch has failed.

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    }

    return (
        <Row ms-auto='className'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' 
                        className='m-4' 
                        key={campsite.id} 
                    >
                    <CampsiteCard campsite={campsite} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default CampsitesList