export default function StatCard({ title, value }) {

  return (

    <div className="bg-slate-800 rounded-xl p-6 shadow">

      <h3 className="text-gray-400">

        {title}

      </h3>

      <p className="text-3xl text-white font-bold mt-2">

        {value}

      </p>

    </div>

  );

}