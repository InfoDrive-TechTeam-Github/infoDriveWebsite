import { AddEdit } from '../../../components/jobs';
import { jobService } from '../../../services';

export default AddEdit;

export async function getServerSideProps({ params }) {
    const job = await jobService.getById(params.id);
    return (
        {props: { job }}
    )
}