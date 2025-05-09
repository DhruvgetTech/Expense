import React from "react";


const recentTransactions = [
  { id: 1, title: "Grocery", amount: -50, date: "2025-05-06" },
  { id: 2, title: "Salary", amount: 1000, date: "2025-05-04" },
  { id: 3, title: "Electricity Bill", amount: -120, date: "2025-05-03" },
  { id: 4, title: "Freelance", amount: 400, date: "2025-05-01" },
];

const HomeDeshbord = () => {
  const totalIncome = recentTransactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = recentTransactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);
  const balance = totalIncome - totalExpense;

  const pieData = [
    { name: "Available Balance", value: balance },
    { name: "Income", value: totalIncome },
    { name: "Expense", value: totalExpense },
  ];

  const COLORS = ["#dc2626", "#10b981", "#3b82f6"]; // red, green, blue

  return (
    <>
    <div className="min-h-screen mt-12 bg-zinc-100 text-white p-6 space-y-6">
      <h1 className="text-3xl mt-12 font-bold text-purple-400">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       
           
            <div>
              <h2 className="text-lg font-semibold text-purple-700">
                Total Balance
              </h2>
              <p className="text-xl font-bold text-purple-900">${balance}</p>
            </div>
          
       
           
            <div>
              <h2 className="text-lg font-semibold text-purple-700">
                Total Income
              </h2>
              <p className="text-xl font-bold text-purple-900">
                ${totalIncome}
              </p>
            </div>
          
       
            <div>
              <h2 className="text-lg font-semibold text-purple-700">
                Total Expense
              </h2>
              <p className="text-xl font-bold text-purple-900">
                ${totalExpense}
              </p>
            </div>
          
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
       
            <h2 className="text-lg mb-2 text-pink-400 font-semibold">
              Financial Overview
            </h2>
            <div className="flex justify-center mb-4 space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                <span className="text-purple-400">Available Balance</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-purple-400">Total Income</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="text-purple-400">Total Expense</span>
              </div>
            </div>
            {/* <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer> */}
         

        {/* Recent Transactions */}
       <h2>
              Recent Transactions
            </h2>
            <ul className="space-y-3">
              {recentTransactions.map((txn) => (
                <li
                  key={txn.id}
                  className="flex justify-between items-center border-b border-gray-700 pb-2"
                >
                  <div className="flex items-center gap-2">
                   
                    <span className="text-purple-400">{txn.title}</span>
                  </div>
                  <div className="text-right">
                    <p
                      className={
                        txn.amount > 0 ? "text-green-500" : "text-pink-500"
                      }
                    >
                      {txn.amount > 0 ? "+" : "-"}${Math.abs(txn.amount)}
                    </p>
                    <p className="text-xs text-gray-400">{txn.date}</p>
                  </div>
                </li>
              ))}
            </ul>
        
      </div>
    </div>
    </>
  );
};

export default HomeDeshbord;
