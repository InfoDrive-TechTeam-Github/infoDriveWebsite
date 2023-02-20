import { jobsRepo } from 'helpers';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getJobById();
        case 'PUT':
            return updateJob();
        case 'DELETE':
            return deleteJob();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getJobById() {
        const job = jobsRepo.getById(req.query.id);
        return res.status(200).json(job);
    }

    function updateJob() {
        try {
            jobsRepo.update(req.query.id, req.body);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    function deleteJob() {
        jobsRepo.delete(req.query.id);
        return res.status(200).json({});
    }
}
