import { AddEdit } from '../../../components/jobs';
import { jobService } from '../../../services';

export default AddEdit;

export async function getStaticPaths() {
    const jobs = await jobService.getAll();
    console.log('jobs', jobs);
    const paths = jobs.map((job) => ({
      params: { id: job.id.toString() },
    }))
  
    return { paths, fallback: false }
}
//getserversideprops
export async function getStaticProps({ params }) {
    const job = await jobService.getById(params.id);
    return (
        {
            props: { job },
        }
    )
}