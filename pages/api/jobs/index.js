import { jobsRepo } from '../../../helpers';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getJobs();
        case 'POST':
            return createJob();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getJobs() {
        const jobs = jobsRepo.getAll();
        return res.status(200).json(jobs);
    }
    
    function createJob() {
        try {
            jobsRepo.create(req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
}
