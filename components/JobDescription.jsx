function JobDescription({ job }) {
  const html = job.Jobdescription;
  const start = html.indexOf('<p', html.indexOf('<p') + 1);
  const end = html.indexOf('</p>', start) + 4;
  const thirdParagraph = html.substring(start, end);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: thirdParagraph,
      }}
      style={{ backgroundColor: '#6c757d' }}
    />
  );
}

export default JobDescription;
