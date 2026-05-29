export default function Dashboard() {
    return (
        <div>
            <h1 className="text-3x1 font-bold mb-6">
                Dashboard
            </h1>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl shadow">
                    <h2 className="text-gray-500">
                        Total Sales
                    </h2>
                    <p className="text=2xl font-bold">$8900</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow">
                    <h2 className="text-gray-500">
                        Products
                    </h2>
                    <p className="text=2xl font-bold">25</p>
                </div>
                <div className="bg-white p-5 rounded-xl shadow">
                    <h2 className="text-gray-500">
                        Customer
                    </h2>
                    <p className="text=2xl font-bold">18</p>
                </div>
            </div>
        </div>
    )
};
