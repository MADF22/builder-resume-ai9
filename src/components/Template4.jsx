const Template4 = ({ data }) => {
  return (
    <div className="p-6 bg-blue-50 rounded-lg">
      <h1 className="text-2xl font-bold">{data.name}</h1>
      <p className="text-gray-700">{data.title}</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <ul>
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Template4;
