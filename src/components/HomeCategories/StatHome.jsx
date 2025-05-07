import statImg from '../../assets/stat/stat.jpg'

const StatHome = () => {
    const statsData = [
        { value: "31K", label: "Customers" },
        { value: "31K", label: "Reviews" },
        { value: "4,200", label: "Task Done" },
        { value: "1,200", label: "Jobs" },
    ];
    return (
<div className="max-w-screen-xl mx-auto px-3 md:px-8">
  <div
    className="stats lg:stats-horizontal stats-vertical shadow w-full py-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-8 gap-6 bg-cover bg-center bg-no-repeat rounded-2xl"
    style={{ backgroundImage: `url(${statImg})` }}
  >
    {statsData.map((item, index) => (
      <div key={index} className="stat text-center text-gray-900">
        <div className="stat-value sm:text-5xl text-3xl">{item.value}</div>
        <div className="stat-desc sm:mt-2 mt-1">{item.label}</div>
      </div>
    ))}
  </div>
</div>
    );
};

export default StatHome;